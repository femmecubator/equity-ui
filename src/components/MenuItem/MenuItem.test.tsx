import { describe, expect, it, vi } from 'vitest';
import {
  screen,
  render,
  fireEvent,
  RenderOptions,
} from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import MenuItem from '.';
import { theme } from '../../theme';

const customRender = (
  ui: React.ReactElement,
  renderOptions: RenderOptions = {}
) => {
  return render(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    renderOptions
  );
};

describe('MenuItem component', () => {
  it('should render correctly', () => {
    customRender(<MenuItem text="Menu Item" />);
    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent('Menu Item');
  });

  it('if disabled is true, should not respond to click events', () => {
    const handleClick = vi.fn();
    customRender(
      <MenuItem
        text="Disabled Menu Item"
        disabled={true}
        onClick={handleClick}
      />
    );
    const menuItem = screen.getByRole('menuitem');
    fireEvent.click(menuItem);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
