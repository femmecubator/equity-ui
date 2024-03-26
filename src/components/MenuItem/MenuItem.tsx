import React from 'react';
import styled from '@emotion/styled';

//Adjust StyledButton to accept disabled as a prop and apply styles conditionally
const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: transparent; /* Set background to transparent */
  cursor: pointer;
  border: none;
  display: flex;
  width: 191px;
  padding: var(--spacing-spacing-3xs, 4px);
  align-items: flex-start;
  gap: var(--spacing-spacing-2xs, 8px);
  border-radius: var(--border-radius-small, 4px);
  color: ${({ disabled }) =>
    disabled
      ? `var(--color-content-disabled, #9c9c9c)`
      : `var(--color-content-default, #333)`};
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
    color: ${({ disabled }) =>
      disabled
        ? `var(--color-content-disabled, #9c9c9c)`
        : `var(--color-content-brand, #026fe4)`};
  }

  /* Focus state */
  &:focus {
    color: ${({ disabled }) =>
      disabled ? `var(--color-content-disabled, #9c9c9c)` : `#333333`};
    outline: ${({ disabled }) => (disabled ? `none` : `1px solid #333333`)};
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }
`;

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element; //Using JSX.Element to represent an icon
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      {...props}
      // Add event handlers for hover and focus
      onMouseEnter={() => console.log('hover')}
      onFocus={() => console.log('focus')}
    >
      {icon ? icon : <span>🔗</span>} {text}
      {/* Default to link icon if none is provided */}
    </StyledButton>
  );
};

export default MenuItem;
