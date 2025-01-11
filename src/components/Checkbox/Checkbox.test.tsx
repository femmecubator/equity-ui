import { describe, expect, it } from 'vitest';
import Checkbox from '.';
import contextRender from '../../shared/utils/contextRender';
import { CheckboxProps } from './Checkbox';
import { theme } from '../../theme';

describe('Checkbox Component', () => {
  const renderComponent = (props: CheckboxProps) => {
    return contextRender(<Checkbox {...props} />);
  };

  it('should render without label', () => {
    const { getByRole, queryByRole } = renderComponent({});
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(queryByRole('label')).toBeNull();
  });

  it('should render WITH label', () => {
    const { getByLabelText } = renderComponent({
      label: 'Checkbox Component',
    });
    const checkbox = getByLabelText('Checkbox Component');

    expect(checkbox).toBeInTheDocument();
  });

  it('should render thematic error color', () => {
    const { getByRole } = renderComponent({
      error: true,
    });
    const checkbox = getByRole('checkbox');
    expect(checkbox).toHaveStyle({
      borderColor: theme.semantic.color.border.error,
    });
  });

  it('should render disabled checkbox', () => {
    const { getByRole } = renderComponent({
      disabled: true,
    });
    const checkbox = getByRole('checkbox');
    expect(checkbox).toHaveStyle({
      borderColor: theme.semantic.color.border.default,
      background: theme.semantic.color.bg.disabled,
    });
    expect(checkbox).toBeDisabled();
  });

  it('should render checked state', () => {
    const { getByRole } = renderComponent({ checked: true });
    const checkbox = getByRole('checkbox');

    expect(checkbox).toHaveStyle({
      background: theme.semantic.color.bg.brand,
      borderColor: theme.semantic.color.border.default,
    });
  });
});
