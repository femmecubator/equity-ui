import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Avatar from './Avatar';

import contextRender from '../../shared/test/contextRender';

describe('Avatar component', () => {
  it('should render image if valid src is passed', () => {
    contextRender(
      <Avatar alt="avatar" src="https://via.placeholder.com/150" size="small" />
    );
    const imgElem = screen.getByRole('img');
    expect(imgElem).toBeInTheDocument();
  });
});
