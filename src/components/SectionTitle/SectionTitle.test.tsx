import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import SectionTitle from '.';
import contextRender from '../../shared/utils/contextRender';

describe('SectionTitle component', () => {
  it('should render correctly', () => {
    contextRender(<SectionTitle>Section Title</SectionTitle>);
    const sectionTitle = screen.getByRole('heading', { name: 'Section Title' });
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle).toHaveTextContent('Section Title');
  });
});
