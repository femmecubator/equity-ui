import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Badge } from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Badge component', () => {
  test('Badge should render correctly', () => {
    contextRender(
      <Badge severity={'error'} isStrong={false}>
        Error
      </Badge>
    );
    const badge = screen.getByText('Error');
    expect(badge).toBeInTheDocument();
  });

  test('Badge isStrong should change', () => {
    contextRender(
      <Badge severity={'error'} isStrong={true}>
        Error
      </Badge>
    );
    const badge = screen.getByText('Error');
    expect(badge).toBeInTheDocument();
    screen.debug(badge);
  });
});
