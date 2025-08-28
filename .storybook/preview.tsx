import React from 'react';
import type { Preview } from '@storybook/react';
import { PrimaDSThemeProvider } from '../src/theme';
import '../src/styles/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <PrimaDSThemeProvider>
        <Story />
      </PrimaDSThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Foundations', 'Components', '*'],
      },
    },
  },
};

export default preview;
