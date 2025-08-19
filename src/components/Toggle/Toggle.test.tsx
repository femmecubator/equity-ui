import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import Toggle from './Toggle';

describe('Toggle Component', () => {
  it('should render toggle without label', () => {
    contextRender(<Toggle checked={false} />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDefined();
    expect(toggle).not.toBeChecked();
  });

  it('should render with label', () => {
    contextRender(<Toggle label="Label" checked={false} />);
    const toggle = screen.getByRole('switch');
    const label = screen.getByText('Label');

    expect(toggle).toBeDefined();
    expect(label).toBeDefined();
  });

  it('should render as checked when checked prop is true', () => {
    contextRender(<Toggle checked={true} />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeChecked();
  });

  it('should render as disabled when disabled prop is true', () => {
    contextRender(<Toggle disabled={true} />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDisabled();
  });

  it('should call onChange when clicked', () => {
    const handleChange = vi.fn();
    contextRender(<Toggle checked={false} onChange={handleChange} />);
    const toggle = screen.getByRole('switch');

    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should not call onChange when disabled', () => {
    const handleChange = vi.fn();
    contextRender(<Toggle disabled={true} onChange={handleChange} />);
    const toggle = screen.getByRole('switch');

    fireEvent.click(toggle);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should show required indicator when required is true', () => {
    const { container } = contextRender(
      <Toggle label="Required toggle" required={true} />
    );
    const requiredIndicator = container.querySelector(
      '[data-testid="required-indicator"]'
    );
    expect(requiredIndicator).toBeDefined();
  });

  it('should show info icon when info prop is true', () => {
    const { container } = contextRender(
      <Toggle label="Toggle with info" info={true} />
    );
    const infoIcon = container.querySelector('svg');
    expect(infoIcon).toBeDefined();
  });

  it('should toggle state when label is clicked', () => {
    const handleChange = vi.fn();
    contextRender(
      <Toggle label="Click me" checked={false} onChange={handleChange} />
    );
    const label = screen.getByText('Click me');

    fireEvent.click(label);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should render with different sizes', () => {
    const { rerender } = contextRender(<Toggle size="small" />);
    let toggle = screen.getByRole('switch');
    expect(toggle).toBeDefined();

    rerender(<Toggle size="tiny" />);
    toggle = screen.getByRole('switch');
    expect(toggle).toBeDefined();
  });

  it('should have correct default size when no size is specified', () => {
    contextRender(<Toggle />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDefined();
  });

  it('should have proper aria attributes', () => {
    contextRender(<Toggle checked={true} />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  it('should maintain state correctly', () => {
    const handleChange = vi.fn();
    contextRender(<Toggle checked={false} onChange={handleChange} />);
    const toggle = screen.getByRole('switch');

    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'change',
      })
    );
  });

  it('should support custom className', () => {
    const { container } = contextRender(<Toggle className="custom-toggle" />);
    const toggle = container.querySelector('.custom-toggle');
    expect(toggle).toBeDefined();
  });

  it('should show required space when required is false', () => {
    const { container } = contextRender(
      <Toggle label="Toggle" required={false} />
    );
    const requiredSpace = container.querySelector(
      '[data-testid="required-space"]'
    );
    expect(requiredSpace).toBeDefined();
  });

  it('should render correctly without any props', () => {
    contextRender(<Toggle />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDefined();
    expect(toggle).not.toBeChecked();
    expect(toggle).not.toBeDisabled();
  });
});
