import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
  HTMLAttributes,
} from 'react';
import styled from '@emotion/styled';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  containsIcon?: boolean;
};

const PRIMARY = 'primary';

// Button styled with CSS variables from our theme system
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
  border-radius: 999px; /* pill radius */
  padding: 12px 24px; /* xs and lg spacing */
  
  /* Use theme variables */
  background-color: ${({ variant }) => 
    variant === PRIMARY ? 'var(--primary-color)' : 'transparent'};
  color: ${({ variant }) => 
    variant === PRIMARY ? '#FFFFFF' : 'var(--text-color)'};
  box-shadow: ${({ variant }) => 
    variant === PRIMARY ? 'none' : '0px 1px 3px 0px #33333333'};
  
  &:hover {
    background-color: ${({ variant }) => 
      variant === PRIMARY ? 'var(--primary-strong)' : 'transparent'};
    box-shadow: ${({ variant }) => 
      variant === PRIMARY ? 'none' : '0px 0px 0px 2px #81B7F2'};
  }
  
  &:active {
    background-color: var(--primary-color);
  }
  
  :active::before,
  :focus::before {
    opacity: 1;
  }
  
  &::before {
    opacity: 0;
    position: absolute;
    transition: opacity 0.2s ease-in-out;
    content: '';
    width: calc(100% - 4px); /* xxxs spacing */
    height: calc(100% - 4px); /* xxxs spacing */
    border: 2px solid var(--text-color);
    border-radius: 999px; /* pill radius */
    left: 0;
    top: 0;
  }

  /* Disabled state */
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
  
  /* Icon button */
  ${({ containsIcon }) =>
    containsIcon &&
    `
      padding: 0px;
      border-radius: 50%;
      height: 32px; /* xl spacing */
      width: 32px; /* xl spacing */
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: inherit;
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
