// SHared types go here

import { Theme, CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { variantMapping } from '../constants';

export type TypographyVariant = keyof typeof variantMapping;

export type TransformValToUnit = {
  fontSize: number;
  textDecoration: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontStretch: string;
  letterSpacing: number;
  lineHeight: number;
  paragraphIndent: number;
  paragraphSpacing: number;
  textCase: string;
};

export type TypographyProps = ComponentPropsWithoutRef<'p'> & {
  variant?: TypographyVariant;
  theme?: Theme;
  color?: CSSProperties['color'];
  css?: CSSObject;
  children?: string;
};
