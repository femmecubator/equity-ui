import React from 'react';
import styled from '@emotion/styled';
import Icon, { DefaultIconSizes } from '../Icon/Icon';
import type { IconName } from '../../icons/icon-constant';
import { EquityTheme } from '../../theme';

const StyledButton = styled.button<{ disabled?: boolean }>`
  ${({ theme, disabled }) => {
    const { spacing, border, color } = theme.base;
    const { spacing4 } = spacing;
    const { radius4 } = border.radius;
    const { gray60, gray90, gray30, blue50 } = color;

    return `
      background-color: transparent; /* Set background to transparent */
      cursor: pointer;
      border: none;
      display: flex;
      width: 100%; /* Adjusted to 100% */
      max-width: fit-content;
      padding: ${spacing4};
      align-items: flex-start;
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
        padding-right: 95px;
      }
      
      /* Disabled state */
      &:disabled {
        cursor: not-allowed;
      }
    `;
  }}
`;

const IconWrapper = styled.div<IconWrapperProps>`
  flex-shrink: 0;
  display: inline-flex
  min-width: ${({ size }) => (size === 'large' ? '24px' : '18px')};
`;

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconName?: IconName;
  iconSize?: DefaultIconSizes;
  iconColor?: keyof EquityTheme['semantic']['color']['content'];
}

interface IconWrapperProps {
  size: DefaultIconSizes;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  iconName,
  iconSize = 'large',
  iconColor = 'default',
  disabled = false,
  onMouseEnter = () => console.log('hover'),
  onFocus = () => console.log('focus'),
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      {...props}
    >
      {iconName && (
        <IconWrapper size={iconSize}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </IconWrapper>
      )}
      <span
        style={{
          marginLeft: iconName ? '8px' : '0',
          flex: 1,
          minWidth: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </span>
    </StyledButton>
  );
};

export default MenuItem;
