import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Button } from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Button component', () => {
  it('Button should render correctly', () => {
    contextRender(<Button>Hello!</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
