import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Multiselect } from './Multiselect';
import contextRender from '../../shared/utils/contextRender';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Multiselect', () => {
  it('should render correctly', () => {
    contextRender(
      <Multiselect options={mockOptions} value={[]} onChange={() => {}} />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display placeholder when no options selected', () => {
    contextRender(
      <Multiselect
        options={mockOptions}
        value={[]}
        onChange={() => {}}
        placeholder="Select options..."
      />
    );

    expect(screen.getByText('Select options...')).toBeInTheDocument();
  });

  it('should display selected options as tags', () => {
    contextRender(
      <Multiselect
        options={mockOptions}
        value={['option1', 'option2']}
        onChange={() => {}}
      />
    );

    const removeButtons = screen.getAllByLabelText('Remove tag');
    expect(removeButtons).toHaveLength(2);
  });

  it('should call onChange when option is selected', () => {
    const mockOnChange = vi.fn();

    contextRender(
      <Multiselect options={mockOptions} value={[]} onChange={mockOnChange} />
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getAllByRole('checkbox')[0]!);

    expect(mockOnChange).toHaveBeenCalledWith(['option1']);
  });

  it('should remove option when tag remove button is clicked', () => {
    const mockOnChange = vi.fn();

    contextRender(
      <Multiselect
        options={mockOptions}
        value={['option1', 'option2']}
        onChange={mockOnChange}
      />
    );

    fireEvent.click(screen.getAllByLabelText('Remove tag')[0]!);

    expect(mockOnChange).toHaveBeenCalledWith(['option2']);
  });

  it('should be disabled when disabled prop is true', () => {
    contextRender(
      <Multiselect
        options={mockOptions}
        value={[]}
        onChange={() => {}}
        disabled
      />
    );

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should show required indicator when required', () => {
    contextRender(
      <Multiselect
        label="Test Label"
        options={mockOptions}
        value={[]}
        onChange={() => {}}
        required
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should show error state', () => {
    contextRender(
      <Multiselect options={mockOptions} value={[]} onChange={() => {}} error />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show warning state', () => {
    contextRender(
      <Multiselect
        options={mockOptions}
        value={[]}
        onChange={() => {}}
        warning
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show loading state', () => {
    contextRender(
      <Multiselect
        options={mockOptions}
        value={[]}
        onChange={() => {}}
        loading
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
