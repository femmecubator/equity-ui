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
      background-color: transparent;
      cursor: pointer;
      border: none;
      display: flex;
      width: 100%; 
      max-width: fit-content;
      padding: ${spacing4};
      align-items: flex-start;
      border-radius: ${radius4};
      color: ${disabled ? gray60 : gray90};

      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px; /* 157.143% */

      &:hover {
        background-color: transparent; 
        color: ${disabled ? gray30 : blue50};
      }

      &:focus {
        color: ${disabled ? gray30 : gray90};
        outline: ${disabled ? 'none' : `1px solid ${gray90}`};
      }
      
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
  noIcon?: boolean;
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
  noIcon = false,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} role="menuitem" {...props}>
      {!noIcon && iconName && (
        <IconWrapper size={iconSize}>
          <Icon name={iconName} size={iconSize} color={iconColor} />
        </IconWrapper>
      )}
      <span
        style={{
          marginLeft: !noIcon && iconName ? '8px' : '0',
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
