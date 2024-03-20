import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: #f0f0f0; /* Default background color */
  color: #000; /* Default text color */
  border: 1px solid #ccc; /* Default border */
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  /* Hover state */
  &:hover {
    background-color: #e0e0e0;
    color: #026FE4;
  }

  /* Focus state */
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  /* Disabled state */
  &:disabled {
    background-color: #d3d3d3;
    color: #a9a9a9;
    border-color: #a9a9a9;
    cursor: not-allowed;
  }
`;

export interface MenuItemProps {
    text: string;
    icon?: JSX.Element; //Using JSX.Element to represent an icon
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon, disabled = false }) => {
    return (
        <StyledButton
            className={`menu-item ${disabled ? 'disabled' : ''}`}
            disabled={disabled}
            // Add event handlers for hover and focus
            onMouseEnter={() => console.log('hover')}
            onFocus={() => console.log('focus')}
        >
            {icon ? icon : <span>🔗</span>} {/* Default to link icon if none is provided */}
            {text}
        </StyledButton>
    );
};

export default MenuItem;