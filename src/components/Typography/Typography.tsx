import styled from '@emotion/styled';
import {
  variantElementMapping,
  typographySizeMapping,
} from '../../shared/constants';
import { TypographyProps } from '../../shared/types';
import { transformValueToUnit } from '../../shared/utils';
import { linkVariantAdditionalState } from '../../shared/utils';

const StyledTypography = styled.div<TypographyProps>((props) => {
  const { variant = 'body', size = 2, theme, color: colorOverride } = props;
  const { typography } = theme;

  // Get the design tokens from prima-semantic
  const tokens = typography['prima-semantic'] as any;

  let color: string = theme.prima.color.content.default;

  // Set color for link variants
  if (variant === 'link') {
    color = theme.prima.color.content['link-default'];
  }

  // Override with custom color if provided
  if (colorOverride) {
    color = colorOverride;
  }

  // Get the token path for this variant + size combination
  const tokenPath = typographySizeMapping[variant][size];

  // Map API variant to token variant (headline -> heading)
  const tokenVariant = variant === 'headline' ? 'heading' : variant;

  if (!tokenPath || !tokens[tokenVariant] || !tokens[tokenVariant][tokenPath]) {
    console.warn(
      `Typography: Invalid variant "${variant}" with size "${size}"`
    );
    // Fallback to body default
    const fallbackToken = tokens.body.default;
    return {
      ...fallbackToken,
      ...transformValueToUnit(fallbackToken),
      color,
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    };
  }

  const selectedToken = tokens[tokenVariant][tokenPath];

  const baseStyles = {
    ...selectedToken,
    ...transformValueToUnit(selectedToken),
    color,
  };

  // Force proper font family based on variant
  if (variant === 'display' || variant === 'headline') {
    baseStyles.fontFamily =
      "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
  } else {
    baseStyles.fontFamily =
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
  }

  if (variant === 'meta') {
    baseStyles.textTransform = 'uppercase';
  }

  // Add link-specific styles
  if (variant === 'link') {
    return {
      ...baseStyles,
      ...linkVariantAdditionalState(theme),
    };
  }

  return baseStyles;
});

const Typography = ({
  children,
  color,
  variant = 'body',
  size = 2,
  css,
  ...props
}: TypographyProps) => {
  // Get the appropriate HTML element for this variant
  const elementType = variantElementMapping[variant];

  return (
    <StyledTypography
      color={color}
      variant={variant}
      size={size}
      css={css}
      as={elementType as any}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export { Typography };
