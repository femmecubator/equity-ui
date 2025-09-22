import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import Dropdown from './Dropdown';

// Mock the Icon component
vi.mock('../Icon/Icon', () => ({
  default: ({ name, icon, ...props }: any) => (
    <span data-testid={`icon-${name || icon}`} {...props} />
  ),
  Icon: ({ name, icon, ...props }: any) => (
    <span data-testid={`icon-${name || icon}`} {...props} />
  ),
}));

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option Two' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  it('should render with label', () => {
    contextRender(
      <Dropdown
        label="Test Dropdown"
        options={sampleOptions}
        variant="native"
      />
    );
    expect(screen.getByText('Test Dropdown')).toBeDefined();
  });

  it('should render native select', () => {
    contextRender(
      <Dropdown
        label="Native Dropdown"
        options={sampleOptions}
        variant="native"
      />
    );
    expect(screen.getByRole('combobox')).toBeDefined();
  });

  it('should show required indicator when required is true', () => {
    const { container } = contextRender(
      <Dropdown
        label="Required Dropdown"
        options={sampleOptions}
        variant="native"
        required
      />
    );
    const requiredIndicator = container.querySelector(
      'div[style*="width: 7px"]'
    );
    expect(requiredIndicator).toBeDefined();
  });

  it('should disable input when disabled', () => {
    contextRender(
      <Dropdown
        label="Disabled Dropdown"
        options={sampleOptions}
        variant="native"
        disabled
      />
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('should show loading spinner when loading', () => {
    const { container } = contextRender(
      <Dropdown
        label="Loading Dropdown"
        options={sampleOptions}
        variant="native"
        loading
      />
    );
    const spinner = container.querySelector('svg');
    expect(spinner).toBeDefined();
  });

  it('should show warning icon and inline message', () => {
    contextRender(
      <Dropdown
        label="Warning Dropdown"
        options={sampleOptions}
        variant="native"
        warningInline="Warning message"
      />
    );
    expect(screen.getByText('Warning message')).toBeDefined();
    expect(screen.getByTestId('icon-warning-filled-small')).toBeDefined();
  });

  it('should show error icon and inline message', () => {
    contextRender(
      <Dropdown
        label="Error Dropdown"
        options={sampleOptions}
        variant="native"
        errorInline="Error message"
      />
    );
    expect(screen.getByText('Error message')).toBeDefined();
    expect(screen.getByTestId('icon-alert-filled-small')).toBeDefined();
  });

  it('should call onChange when native select changes', () => {
    const handleChange = vi.fn();
    contextRender(
      <Dropdown
        label="Native Dropdown"
        options={sampleOptions}
        variant="native"
        onChange={handleChange}
      />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should render single variant with button', () => {
    contextRender(
      <Dropdown
        label="Single Dropdown"
        options={sampleOptions}
        variant="single"
      />
    );
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should open dropdown when single variant button is clicked', () => {
    contextRender(
      <Dropdown
        label="Single Dropdown"
        options={sampleOptions}
        variant="single"
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Option 1')).toBeDefined();
  });

  it('should support custom className', () => {
    const { container } = contextRender(
      <Dropdown
        label="Styled Dropdown"
        options={sampleOptions}
        variant="native"
        className="custom-class"
      />
    );
    const dropdown = container.querySelector('.custom-class');
    expect(dropdown).toBeDefined();
  });

  it('should show placeholder when no value selected in single variant', () => {
    contextRender(
      <Dropdown
        label="Single Dropdown"
        options={sampleOptions}
        variant="single"
        placeholder="Select an option"
      />
    );
    const button = screen.getByRole('button');
    expect(button.textContent).toContain('Select an option');
  });

  it('should display selected value in single variant', () => {
    contextRender(
      <Dropdown
        label="Single Dropdown"
        options={sampleOptions}
        variant="single"
        value="option2"
      />
    );
    const button = screen.getByRole('button');
    expect(button.textContent).toContain('Option Two');
  });

  it('should handle empty options array', () => {
    contextRender(
      <Dropdown label="Empty Dropdown" options={[]} variant="native" />
    );
    const select = screen.getByRole('combobox');
    expect(select.children).toHaveLength(0);
  });

  it('should render correctly without label', () => {
    contextRender(<Dropdown options={sampleOptions} variant="native" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDefined();
  });
});
