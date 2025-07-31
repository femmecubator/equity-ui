import StyleDictionary, { Config } from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import { typographyTokenFormatter } from './formatters/typography-tokens.js';
import { hexColorTransform, camelCaseTransform } from './transformers.js';

register(StyleDictionary, {
  excludeParentKeys: true,
});

StyleDictionary.registerTransform(hexColorTransform);
StyleDictionary.registerTransform(camelCaseTransform);

StyleDictionary.registerFormat({
  name: 'typography-tokens',
  format: typographyTokenFormatter.format,
});

const config: Config = {
  source: ['tokens/design-tokens.tokens-new.json'],

  platforms: {
    ts: {
      transforms: ['attribute/cti', 'name/camel', 'fix/hexColor'],
      buildPath: 'tokens/',
      files: [
        {
          destination: 'typography.ts',
          format: 'typography-tokens',
          filter: (token) => {
            return (
              token.type === 'custom-fontStyle' || token.type === 'typography'
            );
          },
        },
      ],
    },
  },
};

const sd = new StyleDictionary(config);
await sd.buildPlatform('ts');
