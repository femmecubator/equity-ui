import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { base, semantic } from '../../tokens';

export const theme = {
  base,
  semantic,
};

export type EquityTheme = typeof theme;

type EquityThemeProviderProps = {
  children: React.ReactNode;
};

export const EquityThemeProvider = ({ children }: EquityThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
