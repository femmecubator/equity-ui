import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
  HTMLAttributes,
} from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import type { IconName } from '../../icons/icon-constant';

export type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: 'purple' | 'blue';
  shape?: 'square' | 'pill';
  size?: 'medium' | 'small' | 'tiny';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconStart?: IconName;
  iconEnd?: IconName;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const StyledButton = styled.button<{
  variant: 'primary' | 'secondary' | 'tertiary';
  color: 'purple' | 'blue';
  shape: 'square' | 'pill';
  size: 'medium' | 'small' | 'tiny';
  disabled?: boolean;
}>`
  position: relative;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: all 0.15s ease;

  /* Size-based padding */
  ${({ size }) => {
    if (size === 'medium' || size === 'small') {
      return 'padding: 6px 12px;';
    }
    if (size === 'tiny') {
      return 'padding: 6px;';
    }
    return 'padding: 6px 12px;';
  }}

  /* Shape variants */
  border-radius: ${({ shape, theme }) =>
    shape === 'pill'
      ? `${theme.prima.border.radius.button.round}px`
      : `${theme.prima.border.radius.semantic.medium}px`};

  /* Variant styles */
  ${({ variant, color, theme }) => {
    const colors = theme.prima.color;

    const textColor = colors.content.knockout;

    const brandColors = {
      purple: {
        strong: colors.bg['brand-01-strong'],
        subtle: colors.bg['brand-01-subtle'],
      },
      blue: {
        strong: colors.bg['brand-02-strong'],
        subtle: colors.bg['brand-02-subtle'],
      },
    };

    const currentBrand = brandColors[color];

    if (variant === 'primary') {
      return `
        background-color: ${
          color === 'purple' ? currentBrand.strong : currentBrand.subtle
        };
        color: ${textColor};
        border: 1px solid ${
          color === 'purple' ? currentBrand.strong : currentBrand.subtle
        };
        
        &:hover:not(:disabled) {
          background-color: ${
            color === 'purple' ? currentBrand.subtle : currentBrand.strong
          };
          border-color: ${
            color === 'purple' ? currentBrand.subtle : currentBrand.strong
          };
        }
        
        &:focus:not(:disabled) {
          background-color: ${
            color === 'purple' ? currentBrand.strong : currentBrand.subtle
          };
          border: 3px solid ${colors.border.focus};
        }
      `;
    }

    if (variant === 'secondary') {
      const bgColor =
        color === 'purple' ? currentBrand.strong : currentBrand.subtle;
      return `
        background-color: transparent;
        color: ${bgColor};
        border: 1px solid ${bgColor};
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: ${
            color === 'purple'
              ? colors.content['brand-01']
              : colors.bg['brand-02-strong']
          };
          border-color: ${
            color === 'purple'
              ? colors.border['brand-01']
              : colors.border['brand-02-strong']
          };
        }
        
        &:focus:not(:disabled) {
          background-color: transparent;
          border: 3px solid ${colors.border.focus};
        }
      `;
    }

    if (variant === 'tertiary') {
      const textColor =
        color === 'purple' ? currentBrand.strong : currentBrand.subtle;
      return `
        background-color: transparent;
        color: ${textColor};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: transparent;
          color: ${
            color === 'purple'
              ? colors.content['brand-01']
              : colors.bg['brand-02-strong']
          };
        }
        
        &:focus:not(:disabled) {
          background-color: transparent;
          border: 3px solid ${colors.border.focus};
        }
      `;
    }
  }}

  /* Disabled state */
  &:disabled {
    background-color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.prima.color.bg.disabled : 'transparent'};
    color: ${({ theme }) => theme.prima.color.content.disabled};
    border-color: ${({ theme, variant }) =>
      variant === 'tertiary'
        ? 'transparent'
        : theme.prima.color.border.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = (
  {
    variant = 'primary',
    color = 'purple',
    shape = 'pill',
    size = 'medium',
    disabled,
    iconStart,
    iconEnd,
    children,
    onClick,
    type = 'button',
    className,
    ...props
  },
  ref
) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      color={color}
      shape={shape}
      size={size}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
      ref={ref}
      {...props}
    >
      {iconStart && (
        <Icon
          name={iconStart}
          size={size === 'medium' ? 24 : 18}
          css={{ color: 'inherit' }}
        />
      )}
      {children && (
        <Typography
          variant="label"
          size={size === 'medium' ? 2 : size === 'small' ? 3 : 4}
          css={{
            margin: 0,
            color: 'inherit',
          }}
        >
          {children}
        </Typography>
      )}
      {iconEnd && (
        <Icon
          name={iconEnd}
          size={size === 'medium' ? 24 : 18}
          css={{ color: 'inherit' }}
        />
      )}
    </StyledButton>
  );
};
export default forwardRef(Button);
