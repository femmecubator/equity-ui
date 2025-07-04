import { type SVGProps, useMemo } from 'react';
import spriteHref from '../../icons/sprite.svg';
import type { IconName } from '../../icons/icon-constant';

export const defaultIconSizes = {
  small: 18,
  large: 24,
};

export type DefaultIconSizes = keyof typeof defaultIconSizes;

// Define semantic color names
export type SemanticColorName = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

// Map of semantic color names to CSS variables
const colorMap: Record<SemanticColorName, string> = {
  default: 'var(--text-color)',
  primary: 'var(--primary-color)',
  success: 'var(--success-color)',
  error: 'var(--error-color)',
  warning: 'var(--warning-color)',
  info: 'var(--info-color)',
};

const Icon = ({
  name,
  size = 'large',
  color = 'default',
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: DefaultIconSizes | number;
  color?: string;
}) => {
  const actualSize = useMemo(() => {
    return typeof size === 'string' ? defaultIconSizes[size] : size;
  }, [size]);

  // Use CSS variables for theming
  const actualColor = useMemo(() => {
    // If the color is already a CSS variable or direct color value, use it directly
    if (color.startsWith('var(--') || color.startsWith('#') || color.includes('rgb')) {
      return color;
    }
    
    // Check if it's a semantic color name
    if (color in colorMap) {
      return colorMap[color as SemanticColorName];
    }
    
    // Fallback to the color value itself
    return color;
  }, [color]);

  return (
    <svg width={actualSize} height={actualSize} color={actualColor} {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
};

export default Icon;
