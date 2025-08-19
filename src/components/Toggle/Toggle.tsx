import React from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import { useTheme } from '@emotion/react';

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'onChange'
> & {
  label?: string;
  info?: boolean;
  required?: boolean;
  checked?: boolean;
  size?: 'small' | 'tiny';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ToggleLabelGroup = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

interface InternalToggleProps {
  disabled?: boolean;
  checked?: boolean;
  toggleSize?: 'small' | 'tiny';
}

const StyledToggle = styled.input<InternalToggleProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  cursor: inherit;
  margin: 0;
  flex-shrink: 0;
  width: ${({ toggleSize = 'small' }) =>
    toggleSize === 'tiny' ? '30px' : '36px'};
  height: ${({ toggleSize = 'small' }) =>
    toggleSize === 'tiny' ? '16px' : '20px'};
  position: relative;
  border-radius: ${({ toggleSize = 'small' }) =>
    toggleSize === 'tiny' ? '8px' : '10px'};
  transition: all 0.2s ease;
  overflow: visible;
  background: ${({ theme, checked, disabled }) => {
    if (disabled) return theme.prima.color.bg.strong;
    return checked
      ? theme.prima.color.bg['info-strong']
      : theme.prima.color.bg['info-subtle'];
  }};

  /* Toggle circle */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ checked, toggleSize = 'small' }) => {
      if (toggleSize === 'tiny') {
        return checked ? '15px' : '1px';
      }
      return checked ? '17px' : '1px';
    }};
    width: ${({ toggleSize = 'small' }) =>
      toggleSize === 'tiny' ? '14px' : '18px'};
    height: ${({ toggleSize = 'small' }) =>
      toggleSize === 'tiny' ? '14px' : '18px'};
    border-radius: 50%;
    background: ${({ theme, disabled }) =>
      disabled ? theme.prima.color.bg.default : theme.prima.color.bg.default};
    box-shadow:
      0 0 3px 0 rgba(0, 6, 36, 0.12),
      0 2px 1px 0 rgba(0, 6, 36, 0.48);
    transition: all 0.2s ease;
  }

  /* Toggle circle icon (only for small/medium size) */
  &::before {
    ${({ toggleSize = 'small', checked, disabled, theme }: any) => {
      if (toggleSize === 'tiny') return '';

      const circleLeft = checked ? '17px' : '1px';
      const circleSize = '18px';
      const iconSize = '18px';
      const iconLeft = `calc(${circleLeft} + (${circleSize} - ${iconSize}) / 2)`;

      return `
        content: '';
        position: absolute;
        top: 50%;
        left: ${iconLeft};
        transform: translateY(-50%);
        width: ${iconSize};
        height: ${iconSize};
        background: ${
          checked
            ? disabled
              ? theme.prima.color.content.disabled
              : theme.prima.color.bg['info-strong']
            : disabled
              ? theme.prima.color.content.disabled
              : theme.prima.color.bg['info-subtle']
        };
        mask: ${
          checked
            ? `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2 10L6.2 8L5 9.2L8.2 12.5L13.5 7.2L12.2 6L8.2 10Z" fill="currentColor"/></svg>'
              )}")`
            : `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 8H13V10H5V8Z" fill="currentColor"/></svg>'
              )}")`
        };
        -webkit-mask: ${
          checked
            ? `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2 10L6.2 8L5 9.2L8.2 12.5L13.5 7.2L12.2 6L8.2 10Z" fill="currentColor"/></svg>'
              )}")`
            : `url("data:image/svg+xml,${encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 8H13V10H5V8Z" fill="currentColor"/></svg>'
              )}")`
        };
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
        -webkit-mask-size: contain;
        transition: all 0.2s ease;
        z-index: 1;
      `;
    }}
  }

  ${({ disabled }: any) => {
    return disabled ? { cursor: 'not-allowed' } : {};
  }};
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

const RequiredIndicator = styled.div`
  display: inline-flex;
  align-items: flex-start;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.prima.color.content['info-icon']};
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

export const BaseToggle = ({
  label,
  info = false,
  required = false,
  disabled = false,
  checked = false,
  size = 'small',
  onChange,
  className,
  ...props
}: ToggleProps) => {
  const theme = useTheme();

  const getTextColor = () => {
    return theme.prima.color.content.default;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(e);
  };

  const handleLabelClick = () => {
    if (!disabled) {
      const syntheticEvent = {
        target: { checked: !checked },
        currentTarget: { checked: !checked },
      } as React.ChangeEvent<HTMLInputElement>;

      handleChange(syntheticEvent);
    }
  };

  const styledProps = {
    disabled,
    checked,
    toggleSize: size,
  };

  const htmlProps = {
    role: 'switch' as const,
    type: 'checkbox' as const,
    onChange: handleChange,
    'aria-checked': checked,
    ...props,
  };

  if (!label) {
    return (
      <ToggleContainer className={className}>
        <StyledToggle {...styledProps} {...htmlProps} />
      </ToggleContainer>
    );
  }

  return (
    <ToggleContainer className={className}>
      <ToggleLabelGroup disabled={disabled}>
        <StyledToggle {...styledProps} {...htmlProps} />
        <LabelContainer onClick={handleLabelClick}>
          <Typography
            variant="body"
            size={3}
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
      </ToggleLabelGroup>
      {info && <Icon name="info-circle" size={18} color="info-icon" />}
    </ToggleContainer>
  );
};

const Toggle = BaseToggle;

export { Toggle };
export default Toggle;
