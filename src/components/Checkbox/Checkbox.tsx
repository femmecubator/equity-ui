import React from 'react';
import styled from '@emotion/styled';
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
          WebkitMask: error
            ? `url("data:image/svg+xml,${encodeURIComponent(
                '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-4.3 -4.75) scale(1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12.2L6.2 10L5 11.2L8.5 14.8L15 8.2L13.8 7L8.5 12.2Z" fill="white"/></g></svg>'
              )}")`
            : `url("data:image/svg+xml,${encodeURIComponent(
                '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-4.2, -4.75) scale(1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12.2L6.2 10L5 11.2L8.5 14.8L15 8.2L13.8 7L8.5 12.2Z" fill="white"/></g></svg>'
              )}")`,
          mask: error
            ? `url("data:image/svg+xml,${encodeURIComponent(
                '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-4.3 -4.75) scale(1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12.2L6.2 10L5 11.2L8.5 14.8L15 8.2L13.8 7L8.5 12.2Z" fill="white"/></g></svg>'
              )}")`
            : `url("data:image/svg+xml,${encodeURIComponent(
                '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-4.2 -4.75) scale(1)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12.2L6.2 10L5 11.2L8.5 14.8L15 8.2L13.8 7L8.5 12.2Z" fill="white"/></g></svg>'
              )}")`,
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
          WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(
            '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="8" height="2" fill="white"/></svg>'
          )}")`,
          mask: `url("data:image/svg+xml,${encodeURIComponent(
            '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="5" width="8" height="2" fill="white"/></svg>'
          )}")`,
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
    mask: url('data:image/svg+xml,${encodeURIComponent(
      '<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.80902 7L1 6.39704L2.74007 3.94021L0 3.02615L0.309998 2.05163L3 2.94845V0H4V2.97598L6.69 2.05163L7 3.02723L4.28118 3.96124L6 6.39704L5.19 7L3.50269 4.60869L1.80902 7Z" fill="currentColor"/></svg>'
    )}');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask: url('data:image/svg+xml,${encodeURIComponent(
      '<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.80902 7L1 6.39704L2.74007 3.94021L0 3.02615L0.309998 2.05163L3 2.94845V0H4V2.97598L6.69 2.05163L7 3.02723L4.28118 3.96124L6 6.39704L5.19 7L3.50269 4.60869L1.80902 7Z" fill="currentColor"/></svg>'
    )}');
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
  className?: string;
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
  className,
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
      <CheckboxContainer className={className}>
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
      </CheckboxContainer>
    );
  }

  return (
    <CheckboxContainer className={className}>
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
