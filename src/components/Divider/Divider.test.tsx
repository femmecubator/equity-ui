import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Divider from '.';
import { theme } from '../../theme';

const contextRender = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('Divider component', () => {
  it('should render correctly', () => {
    contextRender(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });
});
