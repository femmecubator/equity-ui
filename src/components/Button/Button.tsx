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
  border: 0;
  display: inline-block;
  padding: 12px 24px; // spacing/spacing-xs spacing/spacing-l
  border-radius: 900px; // border/radius/pill
  background-color: #026fe4;
  color: #fff;
  // add font Montserrat
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = ({ variant = 'primary', disabled, children, onClick, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
