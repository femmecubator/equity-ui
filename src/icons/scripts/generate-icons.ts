import { promises as fsPromises, existsSync } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { parse } from 'node-html-parser';
import * as p from '@clack/prompts';
import { optimize } from 'svgo';
import chalk from 'chalk';
import { Project, SyntaxKind, SourceFile } from 'ts-morph';
import * as prettier from 'prettier';
import { iconList } from '../icon-constant';
import { configuration } from './svgo-config';

const renderLogo = () => {
  console.log(chalk.hex('#550CCD')`\n   ░░░░░░░░░░░░  ░░░`);
  console.log(
    '    ',
    chalk.bgHex('#550CCD').white.bold.italic`  Femmecubator  `
  );
  console.log(chalk.hex('#550CCD')`    ░░░░░░░░░░░░░░░`);
  console.log(chalk.hex('#C4B8FE')`                          ░░░░░░░`);
  console.log(
    chalk.hex('#FF96AA')`   █▀▀`,
    chalk.hex('#FFC458')`█▀█`,
    chalk.hex('#F5D3AC')`█░█`,
    chalk.hex('#40327B')`█`,
    chalk.hex('#7660D9')`▀█▀`,
    chalk.hex('#FF96AA')`█▄█`,
    chalk.hex('#C4B8FE')` ░█ █ █░`
  );
  console.log(
    chalk.hex('#FF96AA')`   ██▄`,
    chalk.hex('#FFC458')`▀▀█`,
    chalk.hex('#F5D3AC')`█▄█`,
    chalk.hex('#40327B')`█`,
    chalk.hex('#7660D9')`░█░`,
    chalk.hex('#FF96AA')`░█░`,
    chalk.hex('#C4B8FE')` ░█▄█ █░`
  );
  console.log(chalk.hex('#C4B8FE')`                          ░░░░░░░ \n\n`);
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const existingIcons = new Set<string>(iconList);
const iconConstantFileName = 'icon-constant.ts';

function onCancel() {
  p.cancel('Icon generation has been cancelled');
  process.exit(0);
}

async function getFolderPath() {
  const argPath = process.argv[2];

  p.intro(`${chalk.bgCyan(chalk.black(' Icon Generator '))}`);
  const response = await p.text({
    placeholder: '../src',
    initialValue: argPath,
    message: argPath
      ? 'Is this the correct path?'
      : 'Enter the path of the SVG folder:',
    validate: (value) => {
      if (!value) return 'You need a valid path to proceed!';

      if (!existsSync(value)) return `${chalk.red(value)} is NOT a valid path!`;
      return;
    },
  });

  if (p.isCancel(response)) onCancel();

  return response.toString();
}

renderLogo();

async function generateSvgIcons(): Promise<void> {
  const inputDir = await getFolderPath();
  const outputDir = path.join(__dirname, '../');

  await p.group(
    {
      iconSelect: () => {
        return p.select({
          message: 'Choose an action:',
          initialValue: 'specific',
          options: [
            { value: 'specific', label: 'Add Icon' },
            { value: 'all', label: 'Update All Icons' },
            { value: 'remove', label: 'Remove Icon' },
          ],
        });
      },
      iconSelected: async ({ results }) => {
        if (!results.iconSelect) return;

        switch (results.iconSelect) {
          case 'specific':
            await handleSpecificIconGeneration(inputDir, outputDir);
            break;
          case 'all':
            await handleAllIconsGeneration(inputDir, outputDir);
            break;
          case 'remove':
            await handleRemoveIcon(outputDir);
            break;
          default:
            console.log('Invalid action selected');
        }
      },
    },
    {
      onCancel,
    }
  );

  p.outro('Action completed successfully!');
}

async function handleSpecificIconGeneration(
  inputDir: string,
  outputDir: string
) {
  const files = glob
    .sync('**/*.svg', { cwd: inputDir })
    .sort((a, b) => a.localeCompare(b));
  const filteredFiles = files.filter((file) => file.includes('24'));
  if (filteredFiles.length === 0) {
    p.note(`No SVG Icons found in ${inputDir}`);
    onCancel();
  }

  const newIcons = filteredFiles.filter(
    (file) => !existingIcons.has(convertString(path.basename(file, '.svg')))
  );

  const options = newIcons.map((icon) => ({
    value: icon,
    label: `${chalk.red.strikethrough(
      path.basename(icon, '.svg')
    )} ${chalk.yellow('-->')} ${chalk.green(
      convertString(path.basename(icon, '.svg'))
    )}`,
    selected: true,
  }));

  if (!options.length) {
    p.note('No new icons to add!');
    onCancel();
  }

  const selectedIcons = await p.multiselect({
    initialValues: newIcons,
    message: 'Select new icons to add:',
    options: options,
  });

  if (p.isCancel(selectedIcons)) {
    onCancel();
  }

  try {
    if (Array.isArray(selectedIcons)) {
      await addNewIcons(selectedIcons, inputDir, outputDir);
    }
  } catch (error) {
    console.error('Error during SVG addition:', error);
  }
}

async function handleAllIconsGeneration(
  inputDir: string,
  outputDir: string
): Promise<void> {
  const files = glob
    .sync('**/*.svg', { cwd: inputDir })
    .sort((a, b) => a.localeCompare(b));
  const filteredFiles = files.filter((file) => file.includes('24'));
  if (filteredFiles.length === 0) {
    p.note(`No SVG files found in ${inputDir}`);
    onCancel();
  }

  try {
    const spritesheetContent = await generateAllIcons(
      filteredFiles,
      inputDir,
      outputDir
    );
    await writeIfChanged(
      path.join(outputDir, 'sprite.svg'),
      spritesheetContent,
      true
    );
  } catch (error) {
    console.error('Error during SVG generation:', error);
    onCancel();
  }
}

async function addNewIcons(
  selectedFiles: string[],
  inputDir: string,
  outputDir: string
): Promise<void> {
  for (const file of selectedFiles) {
    const iconName = convertString(path.basename(file, '.svg'));
    const iconPath = path.join(inputDir, file);
    await addNewIcon(iconPath, outputDir, iconName);
  }
}

async function addNewIcon(
  iconPath: string,
  outputDir: string,
  iconName: string
): Promise<void> {
  let newIconContent = await fsPromises.readFile(iconPath, 'utf8');
  const optimizedSvg = optimize(newIconContent, configuration);
  newIconContent = optimizedSvg.data;

  const newSvg = parse(newIconContent).querySelector('svg');
  if (!newSvg) {
    const message = `No SVG element found in ${iconPath}`;
    p.note(message);
    onCancel();

    throw message;
  }

  newSvg.tagName = 'symbol';
  newSvg.setAttribute('id', iconName);

  const spritePath = path.join(outputDir, 'sprite.svg');
  const spriteContent = await fsPromises.readFile(spritePath, 'utf8');
  const root = parse(spriteContent);
  const defs = root.querySelector('defs');
  if (!defs) {
    throw new Error('No <defs> element found in the sprite.');
  }

  defs.appendChild(newSvg);

  const formattedContent = await prettier.format(root.toString(), {
    parser: 'html',
  });
  await fsPromises.writeFile(spritePath, formattedContent);

  await updateTypeScriptFiles(iconName);
}

async function updateTypeScriptFiles(iconName: string): Promise<void> {
  const project = new Project();
  const iconListFilePath = path.join(__dirname, `../${iconConstantFileName}`);

  updateIconListFile(project, iconListFilePath, iconName);
}

async function updateIconListFile(
  project: Project,
  filePath: string,
  iconName: string
) {
  const sourceFile = project.addSourceFileAtPath(filePath);
  const exportConst = sourceFile.getVariableDeclaration('iconList');

  if (!exportConst) {
    throw new Error('iconList variable not found');
  }

  const initializer = exportConst
    .getInitializerIfKindOrThrow(SyntaxKind.AsExpression)
    .getExpressionIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  const formattedIconName = iconName;

  if (!existingIcons.has(formattedIconName)) {
    initializer.addElement(`'${formattedIconName}'`);
  }

  await formatAndSaveSourceFile(sourceFile, project);
}

async function formatAndSaveSourceFile(
  sourceFile: SourceFile,
  project: Project
) {
  const formattedContent = await prettier.format(sourceFile.getFullText(), {
    parser: 'typescript',
    singleQuote: true,
  });
  sourceFile.replaceWithText(formattedContent);
  await project.save();
}

function convertString(input: string): string {
  const sizeMatch = input.match(/Size=(\d+)/i);
  const nameMatch = input.match(/Name=([^,]+)/i);

  if (!sizeMatch || !nameMatch) {
    throw new Error('Invalid input format');
  }

  const formattedName = nameMatch?.[1]
    ?.trim()
    .toLowerCase()
    .replace(/\s+/g, '-');

  return formattedName ?? '';
}

async function generateAllIcons(
  files: string[],
  inputDir: string,
  outputDir: string
) {
  const iconList: string[] = [];

  const symbols = await Promise.all(
    files.map(async (file) => {
      const input = await fsPromises.readFile(
        path.join(inputDir, file),
        'utf8'
      );
      const fileName = file.replace(/\.svg$/, '');

      const tempRoot = parse(input);
      const tempSvg = tempRoot.querySelector('svg');
      if (!tempSvg) throw new Error(`No SVG element found in ${file}`);

      iconList.push(convertString(fileName));

      const optimizedSvg = await optimize(input, configuration);
      const root = parse(optimizedSvg.data);
      const svg = root.querySelector('svg');

      if (!svg) throw new Error(`No SVG element found in ${file}`);

      svg.tagName = 'symbol';
      svg.setAttribute('id', convertString(fileName));
      return svg.toString().trim();
    })
  );

  p.note(iconList.join(', \n'), 'Generated Icons');

  await writeIfChanged(
    path.join(outputDir, iconConstantFileName),
    generateIconList(iconList)
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">',
    '<defs>',
    ...symbols,
    '</defs>',
    '</svg>',
  ].join('\n');
}

function generateIconList(iconList: string[]) {
  return [
    '/****************************************',
    '/*       THIS FILE IS AUTO-GENERATED    *',
    '****************************************/',
    '',
    'export const iconList = [',
    ...iconList.map((iconName) => `  '${iconName}',`),
    '] as const;',
    '',
    'export type IconName = typeof iconList[number]',
  ].join('\n');
}

async function writeIfChanged(
  filepath: string,
  newContent: string,
  isSprite = false
) {
  const dir = path.dirname(filepath);
  await fsPromises.mkdir(dir, { recursive: true });

  let currentContent;
  try {
    currentContent = await fsPromises.readFile(filepath, 'utf8');
  } catch (error) {
    console.error('An error occurred', error);
    onCancel();
  }

  if (currentContent !== newContent) {
    const formattedContent = await prettier.format(newContent, {
      parser: isSprite ? 'html' : 'typescript',
      singleQuote: !isSprite,
    });
    await fsPromises.writeFile(filepath, formattedContent, 'utf8');
  } else {
    console.log('NOTHING CHANGED');
  }
}

async function handleRemoveIcon(outputDir: string): Promise<void> {
  const spritePath = path.join(outputDir, 'sprite.svg');
  const spriteContent = await fsPromises.readFile(spritePath, 'utf8');
  const root = parse(spriteContent);

  const selectedIcon = await p.select({
    message: 'Select an icon to remove:',
    options: iconList.map((val) => {
      return {
        value: val,
        label: val,
      };
    }),
    maxItems: 6,
  });

  if (p.isCancel(selectedIcon)) {
    onCancel();
  }

  const symbolToRemove = root.querySelector(`symbol[id="${selectedIcon}"]`);
  if (symbolToRemove && typeof selectedIcon === 'string') {
    symbolToRemove.remove();
    await updateSpriteFile(spritePath, root.toString());
    await removeIconFromTypeScriptFiles(selectedIcon);
    p.note(
      `"${chalk.green(selectedIcon)}" icon has been removed successfully.`,
      'Icon Removed'
    );
  } else {
    console.error(`Icon "${selectedIcon}" not found in the sprite.`);
    onCancel();
  }
}

async function updateSpriteFile(spritePath: string, newContent: string) {
  const formattedContent = await prettier.format(newContent, {
    parser: 'html',
  });
  await fsPromises.writeFile(spritePath, formattedContent, 'utf8');
}

async function removeIconFromTypeScriptFiles(iconName: string) {
  const project = new Project();
  const iconListFilePath = path.join(__dirname, `../${iconConstantFileName}`);
  const sourceFile = project.addSourceFileAtPath(iconListFilePath);
  const exportConst = sourceFile.getVariableDeclaration('iconList');

  if (!exportConst) {
    throw new Error('iconList variable not found');
  }

  const initializer = exportConst
    .getInitializerIfKindOrThrow(SyntaxKind.AsExpression)
    .getExpressionIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
  const elementIndex = iconList.findIndex((elem) => elem === iconName);
  initializer.removeElement(elementIndex);

  await formatAndSaveSourceFile(sourceFile, project);
}

generateSvgIcons();
