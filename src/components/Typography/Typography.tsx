import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { Theme } from '@emotion/react';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title1: 'h3',
  title2: 'h4',
  title3: 'h5',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  label1: 'p',
  label2: 'p',
  label3: 'p',
  link1: 'a',
  link2: 'a',
  link3: 'a',
} as const;

type TypographyVariant = keyof typeof variantMapping;

export type TypographyProps = ComponentPropsWithoutRef<'p'> & {
  variant?: TypographyVariant;
  theme?: Theme;
  color?: CSSProperties['color'];
  css?: CSSObject;
  children?: string;
};

const StyledTypography = styled.div<TypographyProps>((props) => {
  const { variant, theme, color: colorOverride } = props;
  const { typography } = theme;
  let color = theme.semantic.color.content.default;

  if (variant && ['link1', 'link2', 'link3'].includes(variant)) {
    color = theme.semantic.color.content.link;
  }

  if (colorOverride) {
    color = colorOverride;
  }

  switch (variant) {
    case 'h1':
      return { ...typography.heading.h1, color };
    case 'h2':
      return { ...typography.heading.h2, color };
    case 'h3':
      return { ...typography.heading.h3, color };
    case 'h4':
      return { ...typography.heading.h4, color };
    case 'h5':
      return { ...typography.heading.h5, color };
    case 'h6':
      return { ...typography.heading.h6, color };
    case 'body1':
      return { ...typography.body.large, color };
    case 'body3':
      return { ...typography.body.small, color };
    case 'title1':
      return { ...typography.title.large, color };
    case 'title2':
      return { ...typography.title.default, color };
    case 'title3':
      return { ...typography.title.small, color };
    case 'label1':
      return { ...typography.label.large, color };
    case 'label2':
      return { ...typography.label.default, color };
    case 'label3':
      return { ...typography.label.small, color };
    case 'link1':
      return { ...typography.link.large, color };
    case 'link2':
      return { ...typography.link.default, color };
    case 'link3':
      return {
        ...typography.link.small,
        color,
      };
    case 'body2':
    default:
      return { ...typography.body.default, color };
  }
});

const Typography = ({
  children,
  color,
  variant = 'body2',
  css,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography
      color={color}
      variant={variant}
      css={css}
      as={variantMapping[variant]}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export { Typography };
