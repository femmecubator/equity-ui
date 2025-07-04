import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from '../../src/components/Theme/ThemeProvider';
import { useEffect } from 'react';
import { ThemeMode } from '../../tokens';

// Add theme switching to Storybook's toolbar
export const withTheme: Decorator = (Story, context) => {
  const { theme: selectedTheme } = context.globals;

  useEffect(() => {
    // Update the document class to match the selected theme
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${selectedTheme}-theme`);
  }, [selectedTheme]);

  return (
    <ThemeProvider defaultMode={selectedTheme as ThemeMode}>
      <Story />
    </ThemeProvider>
  );
}; 