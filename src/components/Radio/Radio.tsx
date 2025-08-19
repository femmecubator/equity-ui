import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import { useTheme } from '@emotion/react';

// Define the context and types here to avoid circular imports
export interface RadioGroupContextValue {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  name: string;
}

export const RadioGroupContext =
  React.createContext<RadioGroupContextValue | null>(null);

export const useRadioGroup = () => {
  return React.useContext(RadioGroupContext);
};

const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const RadioLabelGroup = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const StyledRadio = styled.input<RadioProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  cursor: inherit;
  margin: 0;
  width: 16px;
  height: 16px;
  position: relative;

  ${({ theme, error, disabled }) => {
    const getStateStyles = () => {
      if (disabled) {
        return {
          cursor: 'not-allowed',
        };
      }

      if (error) {
        return {
          '&:hover': {},
        };
      }

      return {
        '&:hover': {},
        '&:focus': {
          outline: 'none',
        },
      };
    };

    return {
      ...getStateStyles(),

      background: 'transparent',
      border: 'none',

      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '16px',
        height: '16px',
        backgroundImage: disabled
          ? `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="${theme.prima.color.bg.disabled}" stroke="${theme.prima.color.border.disabled}"/>
              </svg>
            `)}")`
          : error
            ? `url("data:image/svg+xml,${encodeURIComponent(`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border.error}"/>
                </svg>
              `)}")`
            : `url("data:image/svg+xml,${encodeURIComponent(
                `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border['brand-02']}"/></svg>`
              )}")`,
        backgroundSize: '16px 16px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },

      '&:checked::before': {
        backgroundImage: disabled
          ? `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="${theme.prima.color.bg.disabled}" stroke="${theme.prima.color.border.disabled}"/>
                <rect x="3" y="3" width="10" height="10" rx="5" fill="${theme.prima.color.content.disabled}"/>
              </svg>
            `)}")`
          : error
            ? `url("data:image/svg+xml,${encodeURIComponent(`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border.error}"/>
                  <rect x="3" y="3" width="10" height="10" rx="5" fill="${theme.prima.color.bg['error-strong']}"/>
                </svg>
              `)}")`
            : `url("data:image/svg+xml,${encodeURIComponent(`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border['brand-02']}"/>
                  <rect x="3" y="3" width="10" height="10" rx="5" fill="${theme.prima.color.border['brand-02']}"/>
                </svg>
              `)}")`,
      },

      ...(disabled || error
        ? {}
        : {
            '&:hover::before': {
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border['brand-02']}"/></svg>`
              )}")`,
            },
            '&:checked:hover::before': {
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" stroke="${theme.prima.color.border['brand-02']}"/><rect x="3" y="3" width="10" height="10" rx="5" fill="${theme.prima.color.border['brand-02']}"/></svg>`
              )}")`,
            },
          }),
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

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'role'
> & {
  error?: boolean;
  label?: string;
  info?: boolean;
  required?: boolean;
  value?: string;
  className?: string;
};

export const BaseRadio = ({
  error = false,
  label,
  info = false,
  required = false,
  disabled = false,
  value,
  checked,
  onChange,
  name,
  className,
  ...props
}: RadioProps) => {
  const theme = useTheme();
  const groupContext = useRadioGroup();

  const isInGroup = !!groupContext && !!value;

  const effectiveDisabled = isInGroup
    ? groupContext.disabled || disabled
    : disabled;
  const effectiveError = isInGroup ? groupContext.error || error : error;
  const effectiveChecked = isInGroup ? groupContext.value === value : checked;
  const effectiveName = isInGroup ? groupContext.name : name;

  const getTextColor = () => {
    return theme.prima.color.content.default;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (effectiveDisabled) return;

    if (isInGroup && value) {
      groupContext.onChange?.(value);
    } else {
      onChange?.(e);
    }
  };

  const handleLabelClick = () => {
    if (!effectiveDisabled) {
      const syntheticEvent = {
        target: { value, checked: true },
        currentTarget: { value, checked: true },
      } as React.ChangeEvent<HTMLInputElement>;

      handleChange(syntheticEvent);
    }
  };

  if (!label) {
    return (
      <RadioContainer className={className}>
        <StyledRadio
          role="radio"
          type="radio"
          name={effectiveName}
          error={effectiveError}
          disabled={effectiveDisabled}
          checked={effectiveChecked}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </RadioContainer>
    );
  }

  return (
    <RadioContainer className={className}>
      <RadioLabelGroup disabled={effectiveDisabled}>
        <StyledRadio
          role="radio"
          type="radio"
          name={effectiveName}
          error={effectiveError}
          disabled={effectiveDisabled}
          checked={effectiveChecked}
          value={value}
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
            data-testid={required ? 'required-indicator' : 'required-space'}
          >
            {required && <RequiredIndicator />}
          </div>
        </LabelContainer>
      </RadioLabelGroup>
      {info && <Icon name="info-circle" size={18} color="brand-02" />}
    </RadioContainer>
  );
};

const Radio = BaseRadio as typeof BaseRadio & {
  Group: React.ComponentType<any>;
};

export { Radio };
export default Radio;
