import styled from '@emotion/styled';
import { variantMapping } from '../../shared/constants';
import { TypographyProps } from '../../shared/types';
import { transformValueToUnit } from '../../shared/utils';

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
      return {
        ...typography.heading.h1,
        ...transformValueToUnit(typography.heading.h1),
        color,
      };
    case 'h2':
      return {
        ...typography.heading.h2,
        ...transformValueToUnit(typography.heading.h2),
        color,
      };
    case 'h3':
      return {
        ...typography.heading.h3,
        ...transformValueToUnit(typography.heading.h3),
        color,
      };
    case 'h4':
      return {
        ...typography.heading.h4,
        ...transformValueToUnit(typography.heading.h4),
        color,
      };
    case 'h5':
      return {
        ...typography.heading.h5,
        ...transformValueToUnit(typography.heading.h5),
        color,
      };
    case 'h6':
      return {
        ...typography.heading.h6,
        ...transformValueToUnit(typography.heading.h6),
        color,
      };
    case 'body1':
      return {
        ...typography.body.large,
        ...transformValueToUnit(typography.body.large),
        color,
      };
    case 'body3':
      return {
        ...typography.body.small,
        ...transformValueToUnit(typography.body.small),
        color,
      };
    case 'title1':
      return {
        ...typography.title.large,
        ...transformValueToUnit(typography.title.large),
        color,
      };
    case 'title2':
      return {
        ...typography.title.default,
        ...transformValueToUnit(typography.title.default),
        color,
      };
    case 'title3':
      return {
        ...typography.title.small,
        ...transformValueToUnit(typography.title.small),
        color,
      };
    case 'label1':
      return {
        ...typography.label.large,
        ...transformValueToUnit(typography.label.large),
        color,
      };
    case 'label2':
      return {
        ...typography.label.default,
        ...transformValueToUnit(typography.label.default),
        color,
      };
    case 'label3':
      return {
        ...typography.label.small,
        ...transformValueToUnit(typography.label.small),
        color,
      };
    case 'link1':
      return {
        ...typography.link.large,
        ...transformValueToUnit(typography.link.large),
        color,
      };
    case 'link2':
      return {
        ...typography.link.default,
        ...transformValueToUnit(typography.link.default),
        color,
      };
    case 'link3':
      return {
        ...typography.link.small,
        ...transformValueToUnit(typography.link.small),
        color,
      };
    case 'body2':
    default:
      return {
        ...typography.body.default,
        ...transformValueToUnit(typography.body.default),
        color,
      };
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
