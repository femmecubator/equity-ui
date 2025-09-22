import React from 'react';
import type { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';
import { EquityThemeProvider } from '../src/theme';
import '../src/styles/global.css';

const MaxWidthDocsContainer = ({
  children,
  context,
}: {
  children: React.ReactNode;
  context: any;
}) => (
  <DocsContainer context={context}>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
      {children}
    </div>
  </DocsContainer>
);

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
    docs: {
      container: MaxWidthDocsContainer,
    },
    options: {
      storySort: {
        order: [
          'Overview',
          ['Welcome', 'Getting Started', 'Versioning', 'Release Notes'],
          'Foundations',
          'Components',
          'Unsupported',
          '*',
        ],
      },
    },
  },
};

export default preview;
