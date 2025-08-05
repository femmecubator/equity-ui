import { Typography } from './Typography';
import { describe, expect, it } from 'vitest';
import contextRender from '../../shared/utils/contextRender';
import type { TypographyProps } from '../../shared/types';

describe('Typography Component', () => {
  const renderComponent = (props: TypographyProps) => {
    return contextRender(<Typography {...props} />);
  };

  it('renders with default variant and content', () => {
    const { getByText } = renderComponent({
      variant: 'body',
      size: 2,
      children: 'Hello world!',
    });

    expect(getByText('Hello world!')).toBeInTheDocument();
  });

  it('renders display variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'display',
      size: 1,
      children: 'Display Text',
    });

    const typographyElement = getByText('Display Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders headline variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'headline',
      size: 3,
      children: 'Headline Text',
    });

    const typographyElement = getByText('Headline Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders label variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'label',
      size: 2,
      children: 'Label Text',
    });

    const typographyElement = getByText('Label Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders body variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'body',
      size: 1,
      children: 'Body Text',
    });

    const typographyElement = getByText('Body Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders meta variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'meta',
      size: 1,
      children: 'Meta Text',
    });

    const typographyElement = getByText('Meta Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders link variant with different sizes', () => {
    const { getByText } = renderComponent({
      variant: 'link',
      size: 2,
      children: 'Link Text',
    });

    const typographyElement = getByText('Link Text');
    expect(typographyElement).toBeInTheDocument();
  });

  it('applies custom styles via css prop', () => {
    const { getByText } = renderComponent({
      variant: 'body',
      size: 2,
      css: { fontSize: '20px' },
      children: 'Custom Style',
    });

    const typographyElement = getByText('Custom Style');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveStyle({ fontSize: '20px' });
  });
});
