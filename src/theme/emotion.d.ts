import '@emotion/react';
import type { PrimaDSTheme } from '.';

declare module '@emotion/react' {
  export interface Theme extends PrimaDSTheme {}
}
