import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { base, semantic, typography } from '../../tokens';

export const theme = {
  base,
  semantic,
  typography,
};

export type EquityTheme = typeof theme;

type EquityThemeProviderProps = {
  children: React.ReactNode;
};

export const EquityThemeProvider = ({ children }: EquityThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
