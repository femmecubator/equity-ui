import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Divider from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Divider component', () => {
  it('should render correctly', () => {
    contextRender(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });
});
