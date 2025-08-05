import { describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import Radio from '.';

describe('Radio Component', () => {
  it('should render radio component', () => {
    const { getByRole } = contextRender(<Radio name="test" />);
    const radio = getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('should render with label', () => {
    const { getByRole, getByText } = contextRender(
      <Radio name="test" label="Test Radio" />
    );
    const radio = getByRole('radio');
    const label = getByText('Test Radio');

    expect(radio).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should render as checked when checked prop is true', () => {
    const { getByRole } = contextRender(<Radio name="test" checked={true} />);
    const radio = getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('should render as disabled when disabled prop is true', () => {
    const { getByRole } = contextRender(<Radio name="test" disabled={true} />);
    const radio = getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('should call onChange when clicked', () => {
    const handleChange = vi.fn();
    const { getByRole } = contextRender(
      <Radio name="test" onChange={handleChange} />
    );
    const radio = getByRole('radio');

    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should not call onChange when disabled', () => {
    const handleChange = vi.fn();
    const { getByRole } = contextRender(
      <Radio name="test" disabled={true} onChange={handleChange} />
    );
    const radio = getByRole('radio');

    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should show required indicator when required is true', () => {
    const { container } = contextRender(
      <Radio name="test" label="Required Radio" required={true} />
    );
    const requiredIndicator = container.querySelector(
      '[data-testid="required-indicator"]'
    );
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('should show empty space when required is false', () => {
    const { container } = contextRender(
      <Radio name="test" label="Radio without required" required={false} />
    );
    const requiredSpace = container.querySelector(
      '[data-testid="required-space"]'
    );
    expect(requiredSpace).toBeInTheDocument();
  });

  it('should render error state styling', () => {
    const { getByRole } = contextRender(<Radio name="test" error={true} />);
    const radio = getByRole('radio');
    expect(radio).toBeInTheDocument();
  });
});

describe('Radio.Group Component', () => {
  it('should render radio group without label', () => {
    const { container } = contextRender(
      <Radio.Group name="test-group">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const radios = container.querySelectorAll('input[type="radio"]');
    expect(radios).toHaveLength(2);
  });

  it('should render radio group with label', () => {
    const { getByText } = contextRender(
      <Radio.Group name="test-group" label="Choose Option">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    expect(getByText('Choose Option')).toBeInTheDocument();
  });

  it('should select the correct radio based on value prop', () => {
    const { container } = contextRender(
      <Radio.Group name="test-group" value="option2">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const radios = container.querySelectorAll('input[type="radio"]');
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toBeChecked();
  });

  it('should call onChange when radio selection changes', () => {
    const handleChange = vi.fn();
    const { container } = contextRender(
      <Radio.Group name="test-group" onChange={handleChange}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const firstRadio = container.querySelector('input[value="option1"]');
    fireEvent.click(firstRadio!);

    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  it('should disable all radios when disabled prop is true', () => {
    const { container } = contextRender(
      <Radio.Group name="test-group" disabled={true}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const radios = container.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  it('should show required indicator when required is true', () => {
    const { container } = contextRender(
      <Radio.Group name="test-group" label="Required Group" required={true}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const requiredIndicator = container.querySelector(
      '[data-testid="required-indicator"]'
    );
    expect(requiredIndicator).toBeInTheDocument();
  });

  it('should show empty space when required is false', () => {
    const { container } = contextRender(
      <Radio.Group name="test-group" label="Optional Group" required={false}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </Radio.Group>
    );

    const requiredSpace = container.querySelector(
      '[data-testid="required-space"]'
    );
    expect(requiredSpace).toBeInTheDocument();
  });
});
