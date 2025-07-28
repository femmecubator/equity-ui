import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { Badge } from '.';
import contextRender from '../../shared/utils/contextRender';

describe('Badge component', () => {
  test('Badge should render correctly with default props', () => {
    contextRender(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with error status', () => {
    contextRender(<Badge status="error">Error Badge</Badge>);
    const badge = screen.getByText('Error Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with success status', () => {
    contextRender(<Badge status="success">Success Badge</Badge>);
    const badge = screen.getByText('Success Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with warning status', () => {
    contextRender(<Badge status="warning">Warning Badge</Badge>);
    const badge = screen.getByText('Warning Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with info status', () => {
    contextRender(<Badge status="info">Info Badge</Badge>);
    const badge = screen.getByText('Info Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with small size', () => {
    contextRender(<Badge size="small">Small Badge</Badge>);
    const badge = screen.getByText('Small Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with medium size', () => {
    contextRender(<Badge size="medium">Medium Badge</Badge>);
    const badge = screen.getByText('Medium Badge');
    expect(badge).toBeInTheDocument();
  });

  test('Badge should render with icon', () => {
    contextRender(
      <Badge icon={true} status="error">
        Badge with Icon
      </Badge>
    );
    const badge = screen.getByText('Badge with Icon');
    expect(badge).toBeInTheDocument();
    const icon = document.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  test('Badge should render without icon', () => {
    contextRender(
      <Badge icon={false} status="error">
        Badge without Icon
      </Badge>
    );
    const badge = screen.getByText('Badge without Icon');
    expect(badge).toBeInTheDocument();
    const icon = document.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });

  test('Badge should render with combined props', () => {
    contextRender(
      <Badge status="warning" size="small" icon={true}>
        Combined Props Badge
      </Badge>
    );
    const badge = screen.getByText('Combined Props Badge');
    expect(badge).toBeInTheDocument();
  });
});
