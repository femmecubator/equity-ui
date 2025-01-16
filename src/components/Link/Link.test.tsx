import { describe, expect, it } from 'vitest';

import { Link } from './';
import contextRender from '../../shared/utils/contextRender';
import { LinkProps } from './Link';
import { theme } from '../../theme';

const SAMPLE_TEXT = 'Femmecubator';

describe('Link Component', () => {
  const renderComponent = ({ children, ...props }: LinkProps) => {
    return contextRender(<Link {...props}>{children}</Link>);
  };

  it('should render', () => {
    const { getByRole } = renderComponent({
      href: 'https://www.femmecubator.com/',
      children: SAMPLE_TEXT,
    });
    const linkComponent = getByRole('link');
    expect(linkComponent).toBeInTheDocument();
  });

  it('should render with children', () => {
    const { getByText } = renderComponent({
      href: 'https://www.femmecubator.com/',
      children: SAMPLE_TEXT,
    });
    const linkComponent = getByText(SAMPLE_TEXT);
    expect(linkComponent).toBeInTheDocument();
  });

  it('should render disabled', () => {
    const { getByRole } = renderComponent({
      disabled: true,
      href: 'https://www.femmecubator.com/',
      children: SAMPLE_TEXT,
    });
    const linkComponent = getByRole('link');
    expect(linkComponent).toHaveStyle({
      pointerEvents: 'none',
      cursor: 'not-allowed',
      color: theme.semantic.color.content.disabled,
    });
  });
});
