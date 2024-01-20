import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from '.';

describe('Icon component', () => {
  it('Icon should render correctly', () => {
    render(<Icon name="arrow-down" />);
  });
});
