import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { ComponentSize } from '../../shared/types';

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
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
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
        ? '9px 30px 11px'
        : '14px 30px 16px'};
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
