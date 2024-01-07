import { FC } from 'react';
import Button, { ButtonProps } from '../Button';
import React from 'react';

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = 'small',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button
        size={size}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      >
        Hello!
      </Button>
    </div>
  );
};

export default Example;
