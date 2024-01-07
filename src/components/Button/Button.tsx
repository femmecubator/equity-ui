import React, {
  forwardRef,
  MouseEventHandler,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
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
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  background-color: ${(props) => (props.primary ? '#55ff63' : '#f4c4c4')};
`;

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = ({ primary, disabled, children, onClick, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default forwardRef(Button);
