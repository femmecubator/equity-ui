import {
  describe,
  expect,
  it
} from 'vitest';
import {
  screen,
  // waitFor, 
  // fireEvent 
} from '@testing-library/react';

import Avatar from './Avatar';

import contextRender from '../../shared/test/contextRender';

describe('Avatar component', () => {
  it('should ...', () => {
    contextRender(
      <Avatar />
    );
    expect(screen.getByText('Avatar')).toBeTruthy()
  });
});
