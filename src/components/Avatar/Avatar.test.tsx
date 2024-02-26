import { describe, expect, it } from 'vitest';
import { screen, waitFor, fireEvent } from '@testing-library/react';
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

  it('if invalid src is passed, should render children fallback', async () => {
    contextRender(
      <Avatar alt="avatar" src="invalid-image-url" size="small">
        X
      </Avatar>
    );
    const imgElem = screen.getByRole('img');

    fireEvent.error(imgElem);
    await waitFor(() => {
      const placeholderElem = screen.getByText('X');
      expect(placeholderElem).toBeInTheDocument();
    });
  });

  it('if invalid src is passed and there is no children, should render first letter of alt', async () => {
    contextRender(<Avatar alt="avatar" src="invalid-image-url" size="small" />);
    const imgElem = screen.getByRole('img');

    fireEvent.error(imgElem);
    await waitFor(() => {
      const placeholderElem = screen.getByText('A');
      expect(placeholderElem).toBeInTheDocument();
    });
  });
});
