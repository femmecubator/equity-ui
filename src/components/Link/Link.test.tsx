import { describe, expect, it } from 'vitest';

import { Link } from './';
import contextRender from '../../shared/utils/contextRender';
import { LinkProps } from './Link';
import { theme } from '../../theme';
import { SAMPLE_TEXT, TEST_EXTERNAL_LINK } from './mocks';

describe('Link Component', () => {
  const renderComponent = ({ children, ...props }: LinkProps) => {
    return contextRender(<Link {...props}>{children}</Link>);
  };

  it('should render', () => {
    const { getByRole } = renderComponent({
      href: TEST_EXTERNAL_LINK,
      children: SAMPLE_TEXT,
    });
    const linkComponent = getByRole('link');
    expect(linkComponent).toBeInTheDocument();
  });

  it('should render with children', () => {
    const { getByText } = renderComponent({
      href: TEST_EXTERNAL_LINK,
      children: SAMPLE_TEXT,
    });
    const linkComponent = getByText(SAMPLE_TEXT);
    expect(linkComponent).toBeInTheDocument();
  });

  it('should render disabled', () => {
    const { getByRole } = renderComponent({
      disabled: true,
      href: TEST_EXTERNAL_LINK,
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
