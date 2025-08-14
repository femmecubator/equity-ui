import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { Button } from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Button component', () => {
  it('should render correctly', () => {
    contextRender(<Button>Hello!</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hello!');
  });

  it('should render with different variants', () => {
    const { rerender } = contextRender(
      <Button variant="primary">Primary</Button>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button variant="tertiary">Tertiary</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with different colors', () => {
    const { rerender } = contextRender(<Button color="purple">Purple</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button color="blue">Blue</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with different shapes', () => {
    const { rerender } = contextRender(<Button shape="pill">Pill</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button shape="square">Square</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with different sizes', () => {
    const { rerender } = contextRender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<Button size="tiny">Tiny</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with start icon only', () => {
    contextRender(<Button iconStart="statistics">With Start Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelectorAll('svg')).toHaveLength(1);
  });

  it('should render with end icon only', () => {
    contextRender(<Button iconEnd="complete">With End Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelectorAll('svg')).toHaveLength(1);
  });

  it('should render with start and end icons', () => {
    contextRender(
      <Button iconStart="statistics" iconEnd="complete">
        With Icons
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Icons are rendered as SVG elements
    expect(button.querySelectorAll('svg')).toHaveLength(2);
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    contextRender(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger click when disabled', () => {
    const handleClick = vi.fn();
    contextRender(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('should support different button types', () => {
    contextRender(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should apply custom className', () => {
    contextRender(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render with combined props', () => {
    contextRender(
      <Button
        variant="secondary"
        color="blue"
        size="small"
        shape="square"
        iconStart="money"
        className="test-button"
      >
        Complex Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Complex Button');
    expect(button).toHaveClass('test-button');
    expect(button.querySelectorAll('svg')).toHaveLength(1);
  });

  it('should handle button without children', () => {
    contextRender(<Button iconStart="statistics" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelectorAll('svg')).toHaveLength(1);
  });

  it('should support default button type', () => {
    contextRender(<Button>Default Type</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('matches snapshot', () => {
    const { asFragment } = contextRender(<Button>Hello!</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot with all props', () => {
    const { asFragment } = contextRender(
      <Button
        variant="primary"
        color="purple"
        size="medium"
        shape="pill"
        iconStart="statistics"
        iconEnd="complete"
        disabled={false}
      >
        Full Props Button
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
