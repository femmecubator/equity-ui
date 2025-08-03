import { describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import Checkbox from '.';
import contextRender from '../../shared/utils/contextRender';
import { CheckboxProps } from './Checkbox';
import { theme } from '../../theme';

describe('Checkbox Component', () => {
  const renderComponent = (props: CheckboxProps) => {
    return contextRender(<Checkbox {...props} />);
  };

  describe('Basic Rendering', () => {
    it('should render without label', () => {
      const { getByRole, queryByText } = renderComponent({});
      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
      expect(queryByText(/./)).toBeNull();
    });

    it('should render with label', () => {
      const { getByRole, getByText } = renderComponent({
        label: 'Checkbox Component',
      });
      const checkbox = getByRole('checkbox');
      const label = getByText('Checkbox Component');

      expect(checkbox).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });

    it('should render required indicator when required', () => {
      const { container } = renderComponent({
        label: 'Required checkbox',
        required: true,
      });

      const requiredIndicator = container.querySelector(
        'div[class*="RequiredIndicator"]'
      );
      expect(
        requiredIndicator || container.innerHTML.includes('RequiredIndicator')
      ).toBeTruthy();
    });

    it('should render info icon when info prop is true', () => {
      const { container } = renderComponent({
        label: 'Checkbox with info',
        info: true,
      });

      const infoIcon =
        container.querySelector('svg[color="#3b51ff"]') ||
        container.querySelector('use[href*="info-circle"]');
      expect(infoIcon).toBeTruthy();
    });
  });

  describe('States and Styling', () => {
    it('should render error state with correct styling', () => {
      const { getByRole } = renderComponent({
        error: true,
      });
      const checkbox = getByRole('checkbox');
      expect(checkbox).toHaveStyle({
        borderColor: theme.prima.color.border.error,
      });
    });

    it('should render disabled state with correct styling and behavior', () => {
      const { getByRole } = renderComponent({
        disabled: true,
      });
      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeDisabled();
      expect(checkbox).toHaveStyle({
        borderColor: theme.prima.color.border.disabled,
        backgroundColor: theme.prima.color.bg.disabled,
      });
    });

    it('should render checked state with correct styling', () => {
      const { getByRole } = renderComponent({
        checked: true,
      });
      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
      expect(checkbox).toHaveStyle({
        backgroundColor: theme.prima.color.bg['brand-02-subtle'],
        borderColor: theme.prima.color.bg['brand-02-subtle'],
      });
    });

    it('should render indeterminate state', () => {
      const { getByRole } = renderComponent({
        indeterminate: true,
      });
      const checkbox = getByRole('checkbox') as HTMLInputElement;

      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe('Interactions', () => {
    it('should call onChange when clicked', () => {
      const handleChange = vi.fn();
      const { getByRole } = renderComponent({
        onChange: handleChange,
      });
      const checkbox = getByRole('checkbox');

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange.mock.calls[0][0].target.checked).toBe(true);
    });

    it('should call onChange when label is clicked', () => {
      const handleChange = vi.fn();
      const { getByText } = renderComponent({
        label: 'Click me',
        onChange: handleChange,
      });
      const label = getByText('Click me');

      fireEvent.click(label);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange.mock.calls[0][0].target.checked).toBe(true);
    });

    it('should not change checked state when disabled (even if onChange fires)', () => {
      const handleChange = vi.fn();
      const { getByRole } = renderComponent({
        disabled: true,
        onChange: handleChange,
        checked: false,
      });
      const checkbox = getByRole('checkbox') as HTMLInputElement;

      expect(checkbox).toBeDisabled();

      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(false);
    });

    it('should toggle between checked and unchecked states', () => {
      const handleChange = vi.fn();
      const { getByRole } = renderComponent({
        checked: false,
        onChange: handleChange,
      });
      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
      const changeEvent = handleChange.mock.calls[0][0];
      expect(changeEvent.type).toBe('change');
    });
  });

  describe('Controlled vs Uncontrolled', () => {
    it('should work as uncontrolled component with defaultChecked', () => {
      const { getByRole } = renderComponent({
        defaultChecked: true,
      });
      const checkbox = getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('should work as controlled component', () => {
      const handleChange = vi.fn();
      const { getByRole } = renderComponent({
        checked: false,
        onChange: handleChange,
      });
      const checkbox = getByRole('checkbox');

      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
      const changeEvent = handleChange.mock.calls[0][0];
      expect(changeEvent.type).toBe('change');
      expect(checkbox).not.toBeChecked();
    });
  });
});

describe('Checkbox.Group Component', () => {
  const renderGroupComponent = (props: any, children: React.ReactNode) => {
    return contextRender(
      <Checkbox.Group {...props}>{children}</Checkbox.Group>
    );
  };

  describe('Basic Group Functionality', () => {
    it('should render group with label', () => {
      const { getByText } = renderGroupComponent(
        { label: 'Select options' },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      expect(getByText('Select options')).toBeInTheDocument();
    });

    it('should render multiple checkboxes in vertical orientation by default', () => {
      const { container } = renderGroupComponent(
        { label: 'Select options' },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes).toHaveLength(2);

      const container_div = container.querySelector(
        'div[class*="CheckboxesContainer"]'
      );
      expect(container_div).toHaveStyle({ flexDirection: 'column' });
    });

    it('should render checkboxes in horizontal orientation when specified', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          orientation: 'horizontal',
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const container_div = container.querySelector(
        'div[class*="CheckboxesContainer"]'
      );
      expect(container_div).toHaveStyle({ flexDirection: 'row' });
    });
  });

  describe('Group State Management', () => {
    it('should handle controlled group state', () => {
      const handleChange = vi.fn();
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          value: ['option1'],
          onChange: handleChange,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      const checkbox1 = checkboxes[0] as HTMLInputElement;
      const checkbox2 = checkboxes[1] as HTMLInputElement;

      expect(checkbox1.checked).toBe(true);
      expect(checkbox2.checked).toBe(false);

      fireEvent.click(checkbox2);
      expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
    });

    it('should handle uncontrolled group state with defaultValue', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          defaultValue: ['option1'],
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      const checkbox1 = checkboxes[0] as HTMLInputElement;
      const checkbox2 = checkboxes[1] as HTMLInputElement;

      expect(checkbox1.checked).toBe(true);
      expect(checkbox2.checked).toBe(false);
    });

    it('should remove item from selection when unchecked', () => {
      const handleChange = vi.fn();
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          value: ['option1', 'option2'],
          onChange: handleChange,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      const checkbox1 = checkboxes[0] as HTMLInputElement;

      fireEvent.click(checkbox1);
      expect(handleChange).toHaveBeenCalledWith(['option2']);
    });
  });

  describe('Group Props', () => {
    it('should disable all checkboxes when group is disabled', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          disabled: true,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      const checkbox1 = checkboxes[0] as HTMLInputElement;
      const checkbox2 = checkboxes[1] as HTMLInputElement;

      expect(checkbox1).toBeDisabled();
      expect(checkbox2).toBeDisabled();
    });

    it('should show error state for all checkboxes when group has error', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          error: true,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
          <Checkbox value="option2" label="Option 2" />
        </>
      );

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        expect(checkbox).toHaveStyle({
          borderColor: theme.prima.color.border.error,
        });
      });
    });

    it('should show required indicator when group is required', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          required: true,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
        </>
      );

      const requiredIndicator =
        container.querySelector('[data-testid="required-indicator"]') ||
        container.querySelector('div[class*="RequiredIndicator"]');
      expect(
        requiredIndicator || container.innerHTML.includes('::before')
      ).toBeTruthy();
    });

    it('should show info icon when group has info prop', () => {
      const { container } = renderGroupComponent(
        {
          label: 'Select options',
          info: true,
        },
        <>
          <Checkbox value="option1" label="Option 1" />
        </>
      );

      const infoIcon =
        container.querySelector('svg[color="#3b51ff"]') ||
        container.querySelector('use[href*="info-circle"]');
      expect(infoIcon).toBeTruthy();
    });
  });
});
