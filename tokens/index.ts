import { theme as lightTheme } from './theme';
import { darkTheme } from './darkTheme';
import { semantic } from './semantic';
import { base } from './base';

export type Theme = typeof lightTheme;
export type ThemeMode = 'light' | 'dark';

// Export both themes
export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export { base };
// Export the semantic tokens
export { semantic };
 
export { typography } from './typography';
// Export individual theme objects
export { lightTheme, darkTheme };

// Helper to get the current theme object
export const getTheme = (mode: ThemeMode): Theme => {
  return themes[mode];
};

// Export types
export type SemanticTokens = typeof semantic;
export type ThemeTokens = typeof lightTheme;
