import '@emotion/react';
import type { EquityTheme } from '.';

declare module '@emotion/react' {
  export interface Theme extends EquityTheme {}
}
