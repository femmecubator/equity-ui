import StyleDictionary, { Config } from 'style-dictionary';
import * as Transformers from './transformers';
import * as Formatters from './formatters';

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

const config: Config = {
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transforms: [
        'attribute/cti',
        'name/camel',
        'fix/hexColor',
        'px/number',
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
  },
};

StyleDictionary.extend(config).buildAllPlatforms();
