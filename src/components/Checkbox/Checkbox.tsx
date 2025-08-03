import React from 'react';
import styled from '@emotion/styled';
import checkmark from './icons/checkmark.svg';
import indeterminate from './icons/indeterminate.svg';
import asterisk from './icons/asterisk.svg';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import { useTheme } from '@emotion/react';
import {
  CheckboxGroup,
  useCheckboxGroup,
  CheckboxGroupProps,
} from './CheckboxGroup';

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const CheckboxLabelGroup = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const StyledCheckbox = styled.input<CheckboxProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  cursor: inherit;
  margin: 0;

  ${({ theme, error, disabled }) => {
    const getStateStyles = () => {
      if (disabled) {
        return {
          borderColor: theme.prima.color.border.disabled,
          backgroundColor: theme.prima.color.bg.disabled,
          cursor: 'not-allowed',
        };
      }

      if (error) {
        return {
          borderColor: theme.prima.color.border.error,
          backgroundColor: theme.prima.color.bg.default,
          '&:hover': {
            borderColor: theme.prima.color.border.error,
            backgroundColor: theme.prima.color.bg.default,
          },
        };
      }

      return {
        borderColor: theme.prima.color.border['brand-02'],
        backgroundColor: theme.prima.color.bg.default,
        '&:hover': {
          borderColor: theme.prima.color.border['brand-02'],
          backgroundColor: theme.prima.color.bg['brand-02-xsubtle'],
        },
        '&:focus': {
          borderColor: theme.prima.color.border['brand-02'],
          outline: 'none',
        },
      };
    };

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20px',
      width: '20px',
      border: '2px solid',
      borderRadius: theme.prima.radius.semantic['radius-small'],
      ...getStateStyles(),

      // Checked state
      '&:checked': {
        backgroundColor: disabled
          ? theme.prima.color.bg.disabled
          : error
            ? theme.prima.color.bg['error-strong']
            : theme.prima.color.bg['brand-02-subtle'],
        borderColor: disabled
          ? theme.prima.color.border.disabled
          : error
            ? theme.prima.color.border.error
            : theme.prima.color.bg['brand-02-subtle'],

        '&::after': {
          content: "''",
          background: disabled
            ? theme.prima.color.content.disabled
            : theme.prima.color.content.knockout,
          WebkitMask: `url(${checkmark})`,
          mask: `url(${checkmark})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: '16px 16px',
          height: '16px',
          width: '16px',
        },

        ...(disabled || error
          ? {}
          : {
              '&:hover': {
                backgroundColor: theme.prima.color.bg['brand-02-strong'],
                borderColor: theme.prima.color.bg['brand-02-strong'],
              },
            }),
      },

      // Indeterminate state
      '&:indeterminate': {
        backgroundColor: disabled
          ? theme.prima.color.bg.disabled
          : error
            ? theme.prima.color.bg['error-strong']
            : theme.prima.color.bg['brand-02-subtle'],
        borderColor: disabled
          ? theme.prima.color.border.disabled
          : error
            ? theme.prima.color.border.error
            : theme.prima.color.bg['brand-02-subtle'],

        '&::after': {
          content: "''",
          background: disabled
            ? theme.prima.color.content.disabled
            : theme.prima.color.content.knockout,
          WebkitMask: `url(${indeterminate})`,
          mask: `url(${indeterminate})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: '12px 12px',
          height: '12px',
          width: '12px',
        },

        ...(disabled || error
          ? {}
          : {
              '&:hover': {
                backgroundColor: theme.prima.color.bg['brand-02-strong'],
                borderColor: theme.prima.color.bg['brand-02-strong'],
              },
            }),
      },
    };
  }};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

const RequiredIndicator = styled.div`
  display: inline-flex;
  align-items: flex-start;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.prima.color.content['brand-02']};
    mask: url(${asterisk});
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask: url(${asterisk});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
  }
`;

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'role'
> & {
  error?: boolean;
  label?: string;
  info?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  value?: string; // For use in Checkbox.Group
};

export const BaseCheckbox = ({
  error = false,
  label,
  info = false,
  required = false,
  indeterminate = false,
  disabled = false,
  value,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  const theme = useTheme();
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const groupContext = useCheckboxGroup();

  // Determine if this checkbox is part of a group
  const isInGroup = !!groupContext && !!value;

  // When in a group, override some props with group context
  const effectiveDisabled = isInGroup
    ? groupContext.disabled || disabled
    : disabled;
  const effectiveError = isInGroup ? groupContext.error || error : error;
  const effectiveChecked = isInGroup
    ? groupContext.value?.includes(value) || false
    : checked;

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const getTextColor = () => {
    return theme.prima.color.content.default;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isInGroup && value) {
      // When in a group, call the group's onChange
      groupContext.onChange?.(value, e.target.checked);
    } else {
      // When standalone, call the individual onChange
      onChange?.(e);
    }
  };

  const handleLabelClick = () => {
    if (!effectiveDisabled) {
      // Simulate a click on the checkbox
      checkboxRef.current?.click();
    }
  };

  if (!label) {
    return (
      <StyledCheckbox
        ref={checkboxRef}
        role="checkbox"
        type="checkbox"
        error={effectiveError}
        disabled={effectiveDisabled}
        checked={effectiveChecked}
        onChange={handleChange}
        {...props}
      />
    );
  }

  return (
    <CheckboxContainer>
      <CheckboxLabelGroup disabled={effectiveDisabled}>
        <StyledCheckbox
          ref={checkboxRef}
          role="checkbox"
          type="checkbox"
          error={effectiveError}
          disabled={effectiveDisabled}
          checked={effectiveChecked}
          onChange={handleChange}
          {...props}
        />
        <LabelContainer onClick={handleLabelClick}>
          <Typography
            variant="body"
            size={2}
            color={getTextColor()}
            css={{ margin: 0 }}
          >
            {label}
          </Typography>
          <div
            style={{
              width: '7px',
              height: '7px',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            {required && <RequiredIndicator />}
          </div>
        </LabelContainer>
      </CheckboxLabelGroup>
      {info && <Icon name="info-circle" size={18} color="brand-02" />}
    </CheckboxContainer>
  );
};

// Create compound component
const Checkbox = BaseCheckbox as typeof BaseCheckbox & {
  Group: typeof CheckboxGroup;
};

// Attach Group to Checkbox
Checkbox.Group = CheckboxGroup;

export { Checkbox, useCheckboxGroup };
export default Checkbox;
export type { CheckboxGroupProps };
