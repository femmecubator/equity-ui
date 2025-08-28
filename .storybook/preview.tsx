import React from 'react';
import type { Preview } from '@storybook/react';
import { EquityThemeProvider } from '../src/theme';
import '../src/styles/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <EquityThemeProvider>
        <Story />
      </EquityThemeProvider>
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
