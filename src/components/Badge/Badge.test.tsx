import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Badge } from '.';
import contextRender from '../../shared/test/contextRender';

describe('Badge component', () => {
    // it or test ('title of the test')
    // can be nested inside describe or not
    test('Badge should render correctly', () => {
        contextRender(<Badge emphasis={'default'}>Error</Badge>);
        const badge = screen.getByText('Error');
        expect(badge).toBeInTheDocument();
    })
} )