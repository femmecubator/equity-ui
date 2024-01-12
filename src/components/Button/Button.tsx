import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

// TODO Anh replace hard-coded vars with design tokens when available
const StyledButton = styled.button<ButtonProps>`
  position: relative;
  border: none;
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  padding: 12px 24px; // spacing/spacing-xs spacing/spacing-l
  border-radius: 900px; // border/radius/pill
  background-color: #026fe4;
  color: #fff;
  // add default font
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  &:hover {
    background-color: #012144;
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
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid #333333;
    border-radius: 900px; // border/radius/pill
    left: 0;
    top: 0;
  }

  ${(props) =>
    props.disabled &&
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
      }
    `}
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = ({ variant = 'primary', disabled, children, onClick, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
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
