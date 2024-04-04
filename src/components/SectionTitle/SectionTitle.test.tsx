import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import SectionTitle from '.';
import { theme } from '../../theme';

const contextRender = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('SectionTitle component', () => {
  it('should render correctly', () => {
    contextRender(<SectionTitle>Section Title</SectionTitle>);
    const sectionTitle = screen.getByRole('heading', { name: 'Section Title' });
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle).toHaveTextContent('Section Title');
  });
});
