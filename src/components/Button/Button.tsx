import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';
export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  containsIcon?: boolean;
};
const PRIMARY = 'primary';
// TODO Anh replace hard-coded vars with design tokens when available
const StyledButton = styled.button<ButtonProps>`
  position: relative;
  border: none;
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  ${({
    variant,
    theme: {
      semantic: { border, spacing, color },
    },
  }) =>
    ` 
      border-radius: ${border.radius.pill}; 
      padding: ${spacing.spacingXs} ${spacing.spacingL};
      background-color: ${
        variant === PRIMARY ? color.bg.brand : color.bg.transparent
      };
      color: ${variant === PRIMARY ? color.bg.transparent : color.bg.active};
      box-shadow: ${variant === PRIMARY ? 'none' : '0px 1px 3px 0px #33333333'};
      &:hover {
        background-color:${
          variant === PRIMARY ? color.bg.brandStrong : color.bg.transparent
        } ;
        box-shadow: ${variant === PRIMARY ? 'none' : '0px 0px 0px 2px #81B7F2'};
      }
      &:active {
        background-color: ${color.bg.brand};
      }
      :active::before,
      :focus::before, {
        opacity: 1;
      }
      &::before {
        opacity: 0;
        position: absolute;
        transition: opacity 0.2s ease-in-out;
        content: '';
        width: calc(100% - ${spacing.spacing3Xs});
        height: calc(100% - ${spacing.spacing3Xs});
        border: 2px solid ${color.bg.active};
        border-radius: ${border.radius.pill};
        left: 0;
        top: 0;
      }
`}
  ${({ disabled }) =>
    disabled &&
    `
      background-color: #E0E0E0;
      color: #9C9C9C;
      cursor: not-allowed;
      &::before {
        opacity: 1;
        position: absolute;
        content: '';
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border: 1px solid #9C9C9C;
      }
      &:hover {
        background-color: #E0E0E0;
        box-shadow: none;
      }
    `}
  ${({
    variant,
    containsIcon,
    theme: {
      semantic: { spacing, color },
    },
  }) =>
    containsIcon &&
    `
      padding: 0px;
      borderRadius: 50%;
      height: ${spacing.spacingXl};
      width: ${spacing.spacingXl};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${variant === PRIMARY ? color.bg.transparent : color.bg.active};
      }
    `}
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = (
  {
    variant = PRIMARY,
    disabled,
    containsIcon = false,
    children,
    onClick,
    ...props
  },
  ref
) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      containsIcon={containsIcon}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
export default forwardRef(Button);
