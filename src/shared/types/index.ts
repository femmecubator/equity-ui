// SHared types go here

import { Theme, CSSObject } from '@emotion/react';
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

export type TypographyVariant =
  | 'display'
  | 'headline'
  | 'label'
  | 'body'
  | 'meta'
  | 'link';

export type TypographySize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

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
  size?: TypographySize;
  theme?: Theme;
  color?: CSSProperties['color'];
  css?: CSSObject;
  children?: ReactNode;
};
