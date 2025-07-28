import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useTheme } from '@emotion/react';
import { Icon } from '../Icon';
import type { IconName } from '../../icons/icon-constant';

export type BadgeProps = {
  children: ReactNode;
  status?: 'error' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium';
  icon?: boolean;
};

// Map status to available icons
const getStatusIcon = (status: BadgeProps['status']): IconName => {
  const iconMap: Record<NonNullable<BadgeProps['status']>, IconName> = {
    error: 'error-triangle',
    success: 'success-circle',
    warning: 'warning-circle',
    info: 'info-flag',
  };

  return iconMap[status || 'info'];
};

const StyledBadge = styled.div<BadgeProps>`
  /* Common Badge Styling */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  white-space: nowrap;

  /* Typography */
  font-family: 'Roboto Flex';
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  span {
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    color: inherit;
  }

  /* Fix SVG overflow at bottom side */
  svg {
    margin-bottom: 0.5px;
  }

  /* Text alignment when icon is present */
  ${({ icon }) =>
    icon &&
    `
    span {
      transform: translateY(-0.5px);
    }
  `}

  ${({
    size = 'medium',
    status = 'info',
    icon = false,
    theme: {
      prima: { color },
    },
  }) => {
    const isSmall = size === 'small';

    // Size-specific styling with conditional vertical padding based on icon presence
    const sizeStyles = isSmall
      ? `
        padding: ${icon ? '0px' : '3px'} 6px;
        gap: 4px;
      `
      : `
        padding: ${icon ? '3px' : '6px'} 12px;
        gap: 6px;
      `;

    // Status color mappings
    const statusStyles = {
      error: `
        background-color: ${color.bg['error-subtle']};
        color: ${color.content['error-text']};
      `,
      success: `
        background-color: ${color.bg['success-subtle']};
        color: ${color.content['success-text']};
      `,
      warning: `
        background-color: ${color.bg['warning-subtle']};
        color: ${color.content['warning-text']};
      `,
      info: `
        background-color: ${color.bg['info-subtle']};
        color: ${color.content['info-text']};
      `,
    };

    return `
      ${sizeStyles}
      ${statusStyles[status]}
    `;
  }}
`;

export default function Badge({
  status = 'info',
  size = 'medium',
  icon = false,
  children,
}: BadgeProps) {
  const iconSize = 18;
  const theme = useTheme();

  // Get icon colors
  const getIconColor = () => {
    const colorMap = {
      error: theme.prima.color.content['error-icon'],
      success: theme.prima.color.content['success-icon'],
      warning: theme.prima.color.content['warning-icon'],
      info: theme.prima.color.content['info-icon'],
    };
    return colorMap[status || 'info'];
  };

  return (
    <StyledBadge status={status} size={size} icon={icon}>
      {icon && (
        <Icon
          name={getStatusIcon(status)}
          size={iconSize}
          style={{ color: getIconColor() }}
        />
      )}
      {icon ? <span>{children}</span> : <>{children}</>}
    </StyledBadge>
  );
}
