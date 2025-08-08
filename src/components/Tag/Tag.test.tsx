import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EquityThemeProvider } from '../../theme';
import { Tag, TagProps } from './Tag';

const renderTag = (props: Partial<TagProps> = {}) => {
  const defaultProps: TagProps = {
    children: 'Test Tag',
    ...props,
  };

  return render(
    <EquityThemeProvider>
      <Tag {...defaultProps} />
    </EquityThemeProvider>
  );
};

describe('Tag Component', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      renderTag();
      expect(screen.getByText('Test Tag')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
      renderTag({ children: 'Custom Tag Content' });
      expect(screen.getByText('Custom Tag Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      renderTag({ className: 'custom-class' });
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveClass('custom-class');
    });

    it('applies data-testid', () => {
      renderTag({ 'data-testid': 'my-tag' });
      expect(screen.getByTestId('my-tag')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('renders tiny size correctly', () => {
      renderTag({ size: 'tiny' });
      const tag = screen.getByText('Test Tag');
      expect(tag).toBeInTheDocument();
    });

    it('renders small size (default) correctly', () => {
      renderTag({ size: 'small' });
      const tag = screen.getByText('Test Tag');
      expect(tag).toBeInTheDocument();
    });

    it('renders medium size correctly', () => {
      renderTag({ size: 'medium' });
      const tag = screen.getByText('Test Tag');
      expect(tag).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders disabled state', () => {
      renderTag({ disabled: true });
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders active state', () => {
      renderTag({ active: true, onClick: vi.fn() });
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('aria-pressed', 'true');
    });

    it('applies correct role when clickable', () => {
      renderTag({ onClick: vi.fn() });
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('role', 'button');
    });

    it('applies generic role when not clickable', () => {
      renderTag();
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('role', 'generic');
    });
  });

  describe('Click Interactions', () => {
    it('calls onClick when clicked', () => {
      const handleClick = vi.fn();
      renderTag({ onClick: handleClick });

      const tag = screen.getByText('Test Tag');
      fireEvent.click(tag);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      renderTag({ onClick: handleClick, disabled: true });

      const tag = screen.getByText('Test Tag');
      fireEvent.click(tag);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('sets correct tabIndex when clickable', () => {
      renderTag({ onClick: vi.fn() });
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('tabindex', '0');
    });

    it('sets correct tabIndex when not clickable', () => {
      renderTag();
      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('Keyboard Interactions', () => {
    it('calls onClick on Enter key press', () => {
      const handleClick = vi.fn();
      renderTag({ onClick: handleClick });

      const tag = screen.getByText('Test Tag');
      fireEvent.keyDown(tag, { key: 'Enter' });

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick on Space key press', () => {
      const handleClick = vi.fn();
      renderTag({ onClick: handleClick });

      const tag = screen.getByText('Test Tag');
      fireEvent.keyDown(tag, { key: ' ' });

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not handle keyboard events when disabled', () => {
      const handleClick = vi.fn();
      renderTag({ onClick: handleClick, disabled: true });

      const tag = screen.getByText('Test Tag');
      fireEvent.keyDown(tag, { key: 'Enter' });

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Removable Button', () => {
    it('shows remove button when withRemovableButton is true', () => {
      renderTag({ withRemovableButton: true, onRemove: vi.fn() });

      const removeButton = screen.getByRole('button', { name: /remove/i });
      expect(removeButton).toBeInTheDocument();
    });

    it('does not show remove button by default', () => {
      renderTag();

      const removeButton = screen.queryByRole('button', { name: /remove/i });
      expect(removeButton).not.toBeInTheDocument();
    });

    it('calls onRemove when remove button is clicked', () => {
      const handleRemove = vi.fn();
      renderTag({ withRemovableButton: true, onRemove: handleRemove });

      const removeButton = screen.getByRole('button', { name: /remove/i });
      fireEvent.click(removeButton);

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('does not call onRemove when disabled', () => {
      const handleRemove = vi.fn();
      renderTag({
        withRemovableButton: true,
        onRemove: handleRemove,
        disabled: true,
      });

      const removeButton = screen.getByRole('button', { name: /remove/i });
      fireEvent.click(removeButton);

      expect(handleRemove).not.toHaveBeenCalled();
    });

    it('calls onRemove on Backspace key', () => {
      const handleRemove = vi.fn();
      renderTag({ withRemovableButton: true, onRemove: handleRemove });

      const tag = screen.getByText('Test Tag');
      fireEvent.keyDown(tag, { key: 'Backspace' });

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('calls onRemove on Delete key', () => {
      const handleRemove = vi.fn();
      renderTag({ withRemovableButton: true, onRemove: handleRemove });

      const tag = screen.getByText('Test Tag');
      fireEvent.keyDown(tag, { key: 'Delete' });

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });
  });

  describe('Event Handling', () => {
    it('stops propagation when tag is clicked', () => {
      const parentClick = vi.fn();
      const tagClick = vi.fn();

      render(
        <EquityThemeProvider>
          <div onClick={parentClick}>
            <Tag onClick={tagClick}>Test Tag</Tag>
          </div>
        </EquityThemeProvider>
      );

      const tag = screen.getByText('Test Tag');
      fireEvent.click(tag);

      expect(tagClick).toHaveBeenCalledTimes(1);
      expect(parentClick).not.toHaveBeenCalled();
    });

    it('stops propagation when remove button is clicked', () => {
      const parentClick = vi.fn();
      const removeClick = vi.fn();

      render(
        <EquityThemeProvider>
          <div onClick={parentClick}>
            <Tag withRemovableButton onRemove={removeClick}>
              Test Tag
            </Tag>
          </div>
        </EquityThemeProvider>
      );

      const removeButton = screen.getByRole('button', { name: /remove/i });
      fireEvent.click(removeButton);

      expect(removeClick).toHaveBeenCalledTimes(1);
      expect(parentClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has correct aria attributes for clickable tag', () => {
      renderTag({ onClick: vi.fn(), active: true });

      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('role', 'button');
      expect(tag).toHaveAttribute('tabindex', '0');
      expect(tag).toHaveAttribute('aria-pressed', 'true');
    });

    it('has correct aria attributes for disabled tag', () => {
      renderTag({ onClick: vi.fn(), disabled: true });

      const tag = screen.getByText('Test Tag').closest('div');
      expect(tag).toHaveAttribute('aria-disabled', 'true');
    });

    it('remove button has correct aria-label', () => {
      renderTag({ withRemovableButton: true, onRemove: vi.fn() });

      const removeButton = screen.getByRole('button', { name: /remove tag/i });
      expect(removeButton).toHaveAttribute('aria-label', 'Remove tag');
    });

    it('remove button has correct tabindex', () => {
      renderTag({ withRemovableButton: true, onRemove: vi.fn() });

      const removeButton = screen.getByRole('button', { name: /remove/i });
      expect(removeButton).toHaveAttribute('tabindex', '-1');
    });
  });
});
