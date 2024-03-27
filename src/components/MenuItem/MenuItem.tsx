import React from 'react';
import styled from '@emotion/styled';
import Icon, { DefaultIconSizes } from '../Icon/Icon';
import type { IconName } from '../../icons/icon-constant';
import { EquityTheme } from '../../theme';

//Adjust StyledButton to accept disabled as a prop and apply styles conditionally
const StyledButton = styled.button<{ disabled?: boolean }>`
  ${({ theme, disabled }) => `
  background-color: transparent; /* Set background to transparent */
  cursor: pointer;
  border: none;
  display: flex;
  width: 100%; /* Adjusted to 100% */
  padding: ${theme.base.spacing.spacing4};
  align-items: flex-start;
  gap: ${theme.base.spacing.spacing8};
  border-radius: ${theme.base.border.radius.radius4};
  color: ${disabled ? theme.base.color.gray60 : theme.base.color.gray90};
  /* body/small */
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px; /* 157.143% */

  /* Hover state */
  &:hover {
    background-color: transparent; /* Set background to transparent */
    color: ${disabled ? theme.base.color.gray30 : theme.base.color.blue50};
  }

  /* Focus state */
  &:focus {
    color: ${disabled ? theme.base.color.gray30 : theme.base.color.gray90};
    outline: ${disabled ? 'none' : `1px solid ${theme.base.color.gray90}`};
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }
`}
`;

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconName?: IconName;
  iconSize?: DefaultIconSizes | number;
  iconColor?: keyof EquityTheme['semantic']['color']['content'];
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  iconName,
  iconSize = 'large', //default icon size
  iconColor = 'default', //default icon color
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
      {iconName ? (
        <Icon name={iconName} size={iconSize} color={iconColor} />
      ) : (
        <span>🔗</span>
      )}{' '}
      {text}
    </StyledButton>
  );
};

export default MenuItem;
