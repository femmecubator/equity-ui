import { base, semantic, typography } from '../../tokens';
import { primaTheme } from '../../tokens/prima-theme';

export const theme = {
  base,
  semantic,
  typography,
  prima: primaTheme,
};

export type EquityTheme = typeof theme;
