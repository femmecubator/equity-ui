import React from 'react';
import Icon, { SemanticColorName } from './Icon';
import { ThemeProvider } from '../Theme/ThemeProvider';
import { IconName } from '../../icons/icon-constant';

// Define the props type for the ThemedIcon component
type ThemedIconProps = {
  name: IconName;
  size?: 'small' | 'large' | number;
  color?: SemanticColorName | string;
  className?: string;
};

/**
 * A theme-aware Icon component that uses the ThemeProvider
 * 
 * This component automatically applies the current theme to icons
 * using CSS variables defined in our theme system.
 * 
 * @example
 * // Using semantic colors
 * <ThemedIcon name="arrow-down" color="primary" />
 * 
 * // Using custom colors
 * <ThemedIcon name="arrow-down" color="#FF0000" />
 */
export const ThemedIcon: React.FC<ThemedIconProps> = (props) => {
  return (
    <ThemeProvider>
      <Icon {...props} />
    </ThemeProvider>
  );
};

export default ThemedIcon; 