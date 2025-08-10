import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import type { CSSObject } from '@emotion/react';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';

export type TagSize = 'tiny' | 'small' | 'medium';

export interface TagProps {
  /** The text content of the tag */
  children: React.ReactNode;
  /** The size of the tag */
  size?: TagSize;
  /** Whether to show a removable button */
  withRemovableButton?: boolean;
  /** Whether the tag is disabled */
  disabled?: boolean;
  /** Whether the tag is active */
  active?: boolean;
  /** Callback when the tag is clicked */
  onClick?: () => void;
  /** Callback when the remove icon is clicked (only when withRemovableButton is true) */
  onRemove?: () => void;
  /** Additional CSS class names */
  className?: string;
  /** Custom CSS styles to override component styles */
  css?: CSSObject;
  /** Test ID for testing */
  'data-testid'?: string;
}

const getTypographySize = (size: TagSize) => {
  const sizeMap = {
    tiny: 4,
    small: 3,
    medium: 2,
  } as const;

  return sizeMap[size];
};

const getSizeStyles = (size: TagSize, withRemovableButton: boolean) => {
  const sizeMap = {
    tiny: {
      height: '18px',
      padding: withRemovableButton ? '0px 3px 0px 9px' : '0px 9px',
      gap: '4px',
    },
    small: {
      height: '24px',
      padding: withRemovableButton ? '3px 3px 3px 9px' : '3px 12px',
      gap: '4px',
    },
    medium: {
      height: '32px',
      padding: withRemovableButton ? '6px 3px 6px 12px' : '6px 12px',
      gap: '6px',
    },
  };

  return sizeMap[size];
};

const getStateStyles = (disabled: boolean, active: boolean, theme: any) => {
  if (disabled) {
    return {
      backgroundColor: theme.prima.color.bg.disabled,
      borderColor: theme.prima.color.border.disabled,
      color: theme.prima.color.content.disabled,
      cursor: 'not-allowed',
    };
  }

  if (active) {
    return {
      backgroundColor: theme.prima.utility['sky-80'],
      borderColor: theme.prima.utility['sky-80'],
      color: theme.prima.color.content.knockout,
    };
  }

  return {
    backgroundColor: theme.prima.utility['sky-20'],
    borderColor: theme.prima.color.border.default,
    color: theme.prima.color.content.default,

    '&:hover': {
      backgroundColor: theme.prima.utility['sky-40'],
      borderColor: theme.prima.color.border.transparent,
    },
  };
};

const StyledTag = styled.div<{
  size: TagSize;
  disabled: boolean;
  active: boolean;
  clickable: boolean;
  withRemovableButton: boolean;
  customCss?: CSSObject;
}>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) =>
    theme.prima.radius.semantic['radius-round']}px;
  border: 1px solid ${({ theme }) => theme.prima.color.border.default};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  user-select: none;

  ${({ size, withRemovableButton }) => getSizeStyles(size, withRemovableButton)}
  ${({ disabled, active, theme }) => getStateStyles(disabled, active, theme)}
  
  cursor: ${({ clickable, disabled }) => {
    if (disabled) return 'not-allowed';
    if (clickable) return 'pointer';
    return 'default';
  }};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.prima.color.border.focus};
    outline-offset: 2px;
  }

  ${({ customCss }) => customCss}
`;

const TagText = styled(Typography)`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const RemoveButton = styled.button<{ size: TagSize; disabled: boolean }>`
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  ${({ size }) => {
    const buttonSize = size === 'tiny' ? 16 : size === 'small' ? 18 : 20;
    return {
      width: `${buttonSize}px`,
      height: `${buttonSize}px`,
    };
  }}

  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.prima.color.border.focus};
    outline-offset: 1px;
  }
`;

const getIconSize = (size: TagSize) => {
  const sizeMap = {
    tiny: 12,
    small: 14,
    medium: 16,
  };
  return sizeMap[size];
};

const getIconColorVariant = (disabled: boolean, active: boolean) => {
  if (disabled) {
    return 'disabled';
  }
  if (active) {
    return 'knockout';
  }
  return 'default';
};

export const Tag: React.FC<TagProps> = ({
  children,
  size = 'small',
  withRemovableButton = false,
  disabled = false,
  active = false,
  onClick,
  onRemove,
  className,
  css,
  'data-testid': testId,
}) => {
  const theme = useTheme();
  const isClickable = !disabled && !!onClick;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (withRemovableButton && onRemove) {
        e.preventDefault();
        onRemove();
      }
    }
  };

  const getTextColor = () => {
    if (disabled) {
      return theme.prima.color.content.disabled;
    }
    if (active) {
      return theme.prima.color.content.knockout;
    }
    return theme.prima.color.content.default;
  };

  return (
    <StyledTag
      size={size}
      disabled={disabled}
      active={active}
      clickable={isClickable}
      withRemovableButton={withRemovableButton}
      customCss={css}
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-testid={testId}
      tabIndex={isClickable ? 0 : -1}
      role={onClick ? 'button' : 'generic'}
      aria-disabled={disabled}
      aria-pressed={active && onClick ? active : undefined}
    >
      <TagText
        variant="body"
        size={getTypographySize(size)}
        color={getTextColor()}
      >
        {children}
      </TagText>

      {withRemovableButton && (
        <RemoveButton
          size={size}
          disabled={disabled}
          onClick={handleRemove}
          aria-label="Remove tag"
          tabIndex={-1}
          type="button"
        >
          <Icon
            name="dismiss"
            size={getIconSize(size)}
            color={getIconColorVariant(disabled, active)}
          />
        </RemoveButton>
      )}
    </StyledTag>
  );
};

export default Tag;
