import { render, RenderResult } from '@testing-library/react';

import { EquityThemeProvider } from '../../theme';

const contextRender = (ui: React.ReactNode): RenderResult => {
  const result = render(<EquityThemeProvider>{ui}</EquityThemeProvider>);

  // Override rerender to maintain theme context
  const originalRerender = result.rerender;
  result.rerender = (newUi: React.ReactNode) => {
    return originalRerender(<EquityThemeProvider>{newUi}</EquityThemeProvider>);
  };

  return result;
};

export default contextRender;
