import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: transparent; /* Set background to transparent */
  color: #000; /* Default text color */
  border: none; /* No border */
  padding: 8px 16px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  /* Hover state */
  &:hover {
    background-color: transparent; /* Set background to transparent */
    color: #026fe4;
  }

  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(51, 51, 51, 0.25); /* Change focus border color to #333333 */
  }

  /* Disabled state */
  &:disabled {
    background-color: #f0f0f0; /* Different background for disabled state */
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

export interface MenuItemProps {
  text: string;
  icon?: JSX.Element; //Using JSX.Element to represent an icon
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  disabled = false,
}) => {
  return (
    <StyledButton
      className={`menu-item ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      // Add event handlers for hover and focus
      onMouseEnter={() => console.log('hover')}
      onFocus={() => console.log('focus')}
    >
      {icon ? icon : <span>🔗</span>}{' '}
      {/* Default to link icon if none is provided */}
      {text}
    </StyledButton>
  );
};

export default MenuItem;
