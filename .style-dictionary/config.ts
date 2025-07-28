import StyleDictionary, { Config } from 'style-dictionary';
import * as Transformers from './transformers';
import * as Formatters from './formatters';
import { register } from '@tokens-studio/sd-transforms';
type PredefinedTransformers = 'attribute/cti';
type CustomTransformers =
  (typeof Transformers)[keyof typeof Transformers]['name'];
type Transformers = PredefinedTransformers | CustomTransformers;

Object.values(Transformers).forEach((transform) => {
  StyleDictionary.registerTransform(transform);
});

Object.values(Formatters).forEach((formatter) => {
  StyleDictionary.registerFormat(formatter);
});

register(StyleDictionary, {
  excludeParentKeys: false,
  withSDBuiltins: false,
});

const config: Config = {
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    ts: {
      transforms: [
        'attribute/cti',
        'name/camel',
        'fix/hexColor',
      ] satisfies Transformers[],
      buildPath: './tokens/',
      files: [
        {
          destination: 'base.ts',
          format: Formatters.globalTokenFormatter.name,
          filter: (token) => token?.attributes?.category === 'global tokens',
        },
      ],
    },
    js: {
      transforms: [
        'attribute/cti',
        'name/camel',
        'px/number',
      ] satisfies Transformers[],
      buildPath: './tokens/',
      files: [
        {
          destination: 'semantic.ts',
          format: Formatters.semanticTokenFormatter.name,
          filter: (token) => token?.attributes?.category === 'semantic tokens',
        },
      ],
    },
    typography: {
      buildPath: './tokens/',
      transforms: [
        'attribute/cti',
        'name/camel',
        'px/number',
      ] satisfies Transformers[],
      files: [
        {
          destination: 'typography.ts',
          format: 'typographyTokenFormatter',
          filter: (token) => {
            return (
              [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'small',
                'default',
                'large',
              ].includes(token.name) && token.attributes?.category === 'font'
            );
          },
        },
      ],
    },
  },
};

const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();
