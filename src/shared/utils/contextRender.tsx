import { render, RenderResult } from '@testing-library/react';

import { PrimaDSThemeProvider } from '../../theme';

const contextRender = (ui: React.ReactNode): RenderResult => {
  const result = render(<PrimaDSThemeProvider>{ui}</PrimaDSThemeProvider>);

  // Override rerender to maintain theme context
  const originalRerender = result.rerender;
  result.rerender = (newUi: React.ReactNode) => {
    return originalRerender(
      <PrimaDSThemeProvider>{newUi}</PrimaDSThemeProvider>
    );
  };

  return result;
};

export default contextRender;
