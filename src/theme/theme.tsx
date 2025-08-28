import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { typography } from '../../tokens';
import { primaTheme } from '../../tokens/prima-theme';

export const theme = {
  typography,
  prima: primaTheme,
};

export type PrimaDSTheme = typeof theme;

type PrimaDSThemeProviderProps = {
  children: React.ReactNode;
};

export const PrimaDSThemeProvider = ({
  children,
}: PrimaDSThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
