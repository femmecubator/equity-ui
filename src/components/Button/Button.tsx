import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: #fff;
  background-color: '#55ff63';
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = ({ disabled, children, onClick, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
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
