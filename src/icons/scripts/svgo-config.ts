import { type Config } from 'svgo';

export const configuration: Config = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUnusedNS',
    'cleanupIds',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    'removeXMLNS',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
