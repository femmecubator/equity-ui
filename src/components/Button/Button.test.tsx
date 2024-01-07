import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button>Hello!</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
