import { describe, it } from 'vitest';
import { Icon } from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Icon component', () => {
  it('Icon should render correctly', () => {
    contextRender(<Icon name="arrow-down" />);
  });
});
