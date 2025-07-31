// Shared constants go here

// Shared constants go here

import { TypographyVariant, TypographySize } from '../types';

// Maps variants to their appropriate HTML elements
export const variantElementMapping: Record<TypographyVariant, string> = {
  display: 'h1',
  headline: 'h2',
  label: 'p',
  body: 'p',
  meta: 'p',
  link: 'a',
} as const;

// Maps variant + size combinations to design token paths
export const typographySizeMapping: Record<
  TypographyVariant,
  Record<TypographySize, string | null>
> = {
  display: {
    1: 'large', // display large
    2: 'large-mobile', // display large-mobile
    3: 'default', // display default
    4: 'default-mobile', // display default-mobile
    5: 'small', // display small
    6: 'small-mobile', // display small-mobile
    7: null,
    8: null,
  },
  headline: {
    1: 'h1', // headline h1
    2: 'h1-mobile', // headline h1-mobile
    3: 'h2', // headline h2
    4: 'h2-mobile', // headline h2-mobile
    5: 'h3', // headline h3
    6: 'h3-mobile', // headline h3-mobile
    7: 'h4', // headline h4
    8: 'h4-mobile', // headline h4-mobile
  },
  body: {
    1: 'large', // body large
    2: 'default', // body default
    3: 'small', // body small
    4: 'tiny', // body tiny
    5: null, // not available
    6: null, // not available
    7: null, // not available
    8: null, // not available
  },
  label: {
    1: 'large', // label large
    2: 'default', // label default
    3: 'small', // label small
    4: 'tiny', // label tiny
    5: null, // not available
    6: null, // not available
    7: null, // not available
    8: null, // not available
  },
  meta: {
    1: 'large', // meta large
    2: 'default', // meta default
    3: 'small', // meta small
    4: 'small-sentence-case', // meta small-sentence-case
    5: null, // not available
    6: null, // not available
    7: null, // not available
    8: null, // not available
  },
  link: {
    1: 'large', // link large
    2: 'default', // link default
    3: 'small', // link small
    4: 'tiny', // link tiny
    5: null, // not available
    6: null, // not available
    7: null, // not available
    8: null, // not available
  },
} as const;
