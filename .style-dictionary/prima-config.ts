import StyleDictionary, { Config } from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import { primaThemeFormatter } from './formatters/prima-theme.js';
import { hexColorTransform, camelCaseTransform } from './transformers.js';

register(StyleDictionary, {
  excludeParentKeys: true,
});

StyleDictionary.registerTransform(hexColorTransform);
StyleDictionary.registerTransform(camelCaseTransform);

StyleDictionary.registerFormat({
  name: 'prima-theme',
  format: primaThemeFormatter,
});

const config: Config = {
  source: [
    'tokens/token_PrimaDS-Globals_Mode1.json',
    'tokens/token_PrimaDS-Semantic_Mode1.json',
  ],

  platforms: {
    ts: {
      transforms: ['attribute/cti', 'name/camel', 'fix/hexColor'],
      buildPath: 'tokens/',
      files: [
        {
          destination: 'prima-theme.ts',
          format: 'prima-theme',
        },
      ],
    },
  },
};

const sd = new StyleDictionary(config);
await sd.buildPlatform('ts');
