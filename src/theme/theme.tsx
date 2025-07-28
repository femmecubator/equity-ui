import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { base, semantic, typography } from '../../tokens';
import { primaTheme } from '../../tokens/prima-theme';

export const theme = {
  base,
  semantic,
  typography,
  prima: primaTheme,
};

export type EquityTheme = typeof theme;

type EquityThemeProviderProps = {
  children: React.ReactNode;
};

export const EquityThemeProvider = ({ children }: EquityThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
