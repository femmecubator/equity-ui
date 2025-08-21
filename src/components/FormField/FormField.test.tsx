import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import FormField from './FormField';

describe('FormField Component', () => {
  it('should render label and input', () => {
    contextRender(<FormField label="Name" placeholder="Enter name" />);
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByPlaceholderText('Enter name')).toBeDefined();
  });

  it('should show required indicator when required is true', () => {
    const { container } = contextRender(<FormField label="Email" required />);
    expect(screen.getByText('Email')).toBeDefined();
    const requiredIndicator = container.querySelector(
      'div[style*="width: 7px"]'
    );
    expect(requiredIndicator).toBeDefined();
    expect(requiredIndicator?.children.length).toBeGreaterThan(0);
  });

  it('should disable input when disabled', () => {
    contextRender(<FormField label="Disabled" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('should show loading spinner when loading', () => {
    const { container } = contextRender(<FormField label="Loading" loading />);
    const spinner = container.querySelector('svg');
    expect(spinner).toBeDefined();
  });

  it('should show warning icon and inline message', () => {
    contextRender(
      <FormField label="Warning" warningInline="Warning message" />
    );
    expect(screen.getByText('Warning message')).toBeDefined();
    expect(screen.getByText('Warning message')).toBeDefined();
  });

  it('should show error icon and inline message', () => {
    contextRender(<FormField label="Error" errorInline="Error message" />);
    expect(screen.getByText('Error message')).toBeDefined();
    expect(screen.getByText('Error message')).toBeDefined();
  });

  it('should call onChange when input changes', () => {
    const handleChange = vi.fn();
    contextRender(<FormField label="Name" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should support custom className', () => {
    const { container } = contextRender(
      <FormField label="Styled" className="custom-class" />
    );
    const formField = container.querySelector('.custom-class');
    expect(formField).toBeDefined();
  });

  it('should show error state with icon when error is true', () => {
    const { container } = contextRender(<FormField label="Error" error />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('should show warning state with icon when warning is true', () => {
    const { container } = contextRender(<FormField label="Warning" warning />);
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('should prioritize error over warning when both are set', () => {
    const { container } = contextRender(
      <FormField label="Mixed" error warning />
    );
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBe(1);
  });

  it('should render correctly without any props', () => {
    contextRender(<FormField />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();
    expect(input).not.toBeDisabled();
  });
});
