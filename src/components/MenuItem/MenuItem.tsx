import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: transparent; /* Set background to transparent */
  cursor: pointer;
  border: none;

  display: flex;
  width: 191px;
  padding: var(--spacing-spacing-3xs, 4px);
  align-items: flex-start;
  gap: var(--spacing-spacing-2xs, 8px);

  border-radius: var(--border-radius-small, 4px);

  color: var(--color-content-default, #333);
  font-feature-settings:
    'clig' off,
    'liga' off;
  /* body/small */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */

  /* Hover state */
  &:hover {
    background-color: transparent; /* Set background to transparent */
    color: var(--color-content-brand, #026fe4);
    font-feature-settings:
      'clig' off,
      'liga' off;
    /* body/small */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  /* Focus state */
  &:focus {
    color: #333333;
    outline: 1px solid #333333; /* Custom outline color */

    font-feature-settings:
      'clig' off,
      'liga' off;
    /* body/small */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
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
