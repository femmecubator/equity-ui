import React from 'react';
import styled from '@emotion/styled';
import Icon, { DefaultIconSizes } from '../Icon/Icon';
import type { IconName } from '../../icons/icon-constant';
import { EquityTheme } from '../../theme';

//Adjust StyledButton to accept disabled as a prop and apply styles conditionally
const StyledButton = styled.button<{ disabled?: boolean }>`
  ${({ theme, disabled }) => {
    //Destructuring theme properties for easier access
    const { spacing, border, color } = theme.base;
    const { spacing4, spacing8 } = spacing;
    const { radius4 } = border.radius;
    const { gray60, gray90, gray30, blue50 } = color;

    return `
      background-color: transparent; /* Set background to transparent */
      cursor: pointer;
      border: none;
      display: flex;
      width: 100%; /* Adjusted to 100% */
      padding: ${spacing4};
      align-items: flex-start;
      gap: ${spacing8};
      border-radius: ${radius4};
      color: ${disabled ? gray60 : gray90};
      /* body/small */
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      
      /* Hover state */
      &:hover {
        background-color: transparent; /* Set background to transparent */
        color: ${disabled ? gray30 : blue50};
      }
      
      /* Focus state */
      &:focus {
        color: ${disabled ? gray30 : gray90};
        outline: ${disabled ? 'none' : `1px solid ${gray90}`};
      }
      
      /* Disabled state */
      &:disabled {
        cursor: not-allowed;
      }
    `;
  }}
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
