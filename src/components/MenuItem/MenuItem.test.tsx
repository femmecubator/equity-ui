import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import MenuItem from '.';
import contextRender from '../../shared/utils/contextRender';

describe('MenuItem component', () => {
  it('should render correctly', () => {
    contextRender(<MenuItem text="Menu Item" />);
    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent('Menu Item');
  });

  it('if disabled is true, should not respond to click events', () => {
    const handleClick = vi.fn();
    contextRender(
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
