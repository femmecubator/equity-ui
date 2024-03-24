import { Typography } from './Typography';
import { describe, expect, it } from 'vitest';
import contextRender from '../../shared/utils/contextRender';
import type { TypographyProps } from '../../shared/types';

describe('Typography Component', () => {
  const renderComponent = (props: TypographyProps) => {
    return contextRender(<Typography {...props} />);
  };

  it('renders with default variant and content', () => {
    const { getByText } = renderComponent({ children: 'Hello, World!' });

    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders with specified variant and color', () => {
    const { getByText } = renderComponent({
      variant: 'h2',
      color: 'blue',
      children: 'Heading 2',
    });

    const typographyElement = getByText('Heading 2');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveStyle({ color: '#0000FF' });
  });

  it('applies custom styles via css prop', () => {
    const { getByText } = renderComponent({
      css: { fontSize: '20px' },
      children: 'Custom Style',
    });

    const typographyElement = getByText('Custom Style');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveStyle({ fontSize: '20px' });
  });
});
