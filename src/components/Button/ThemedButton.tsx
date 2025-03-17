import React from 'react';
import Button, { ButtonProps } from './Button';
import { ThemeProvider } from '../Theme/ThemeProvider';

/**
 * A theme-aware Button component that uses the ThemeProvider
 */
export const ThemedButton: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider>
      <Button {...props} />
    </ThemeProvider>
  );
};

export default ThemedButton; 