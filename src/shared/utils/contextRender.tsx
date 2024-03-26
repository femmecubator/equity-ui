import { render, RenderResult } from '@testing-library/react';

import { EquityThemeProvider } from '../../theme';

const contextRender = (ui: React.ReactNode): RenderResult => {
  return render(<EquityThemeProvider>{ui}</EquityThemeProvider>);
};

export default contextRender;
