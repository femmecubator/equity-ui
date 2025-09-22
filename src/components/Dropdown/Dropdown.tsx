import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon';
import { useTheme } from '@emotion/react';

export type DropdownOption = {
  value: string;
  label: string;
};

export type DropdownProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  options?: DropdownOption[];
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  warning?: boolean;
  warningInline?: string;
  error?: boolean;
  errorInline?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  variant?: 'native' | 'single';
};

const InlineMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-top: ${({ theme }) => theme.prima.spacing.global['space-8']}px;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DropdownLabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 8px;
`;

const RequiredIndicator = styled.div`
  display: inline-flex;
  align-items: flex-start;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.prima.color.content['brand-02']};
    mask: url('data:image/svg+xml,${encodeURIComponent(
      '<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.80902 7L1 6.39704L2.74007 3.94021L0 3.02615L0.309998 2.05163L3 2.94845V0H4V2.97598L6.69 2.05163L7 3.02723L4.28118 3.96124L6 6.39704L5.19 7L3.50269 4.60869L1.80902 7Z" fill="currentColor"/></svg>'
    )}');
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask: url('data:image/svg+xml,${encodeURIComponent(
      '<svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.80902 7L1 6.39704L2.74007 3.94021L0 3.02615L0.309998 2.05163L3 2.94845V0H4V2.97598L6.69 2.05163L7 3.02723L4.28118 3.96124L6 6.39704L5.19 7L3.50269 4.60869L1.80902 7Z" fill="currentColor"/></svg>'
    )}');
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSelect = styled.select<{
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
  hasIcon?: boolean;
}>`
  width: 100%;
  padding: 6px 9px 6px 12px;
  padding-right: ${({ hasIcon }) => (hasIcon ? '48px' : '32px')};
  border-style: solid;
  border-radius: ${({ theme }) => theme.prima.radius.global['radius-8']}px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition:
    border-color 0.2s,
    border-width 0.2s,
    background-color 0.2s;
  cursor: pointer;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.prima.color.bg.disabled : theme.prima.color.bg.default};
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.prima.color.content.disabled
      : theme.prima.color.content.default};

  border-width: ${({ error, required }) =>
    required ? '2px' : error ? '1px' : '1px'};
  border-color: ${({ theme, disabled, error, required }) => {
    if (disabled) return theme.prima.color.border.disabled;
    if (error) return theme.prima.color.border.error;
    if (required) return theme.prima.color.border['brand-01'];
    return theme.prima.color.border.default;
  }};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    border-color: ${({ theme, error, required }) => {
      if (error) return theme.prima.color.border.error;
      if (required) return theme.prima.color.border['brand-01'];
      return theme.prima.color.border.default;
    }};
  }

  &:focus {
    z-index: 1;
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    border-width: 2px;
    border-color: ${({ theme, error, required }) => {
      if (error) return theme.prima.color.border.error;
      if (required) return theme.prima.color.border['brand-01'];
      return theme.prima.color.border['brand-02-strong'];
    }} !important;
  }

  &:disabled {
    cursor: not-allowed;
  }

  /* Hide default arrow for custom styling */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Style the dropdown options */
  option {
    padding: 8px 12px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.prima.color.content.default};
    background-color: white;
  }

  option:checked,
  option:selected {
    background-color: ${({ theme }) => theme.prima.color.bg['brand-02-subtle']};
    color: ${({ theme }) => theme.prima.color.content.default};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`;

const StateIconContainer = styled.div`
  position: absolute;
  right: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
`;

const SpinnerIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ChevronIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.prima.color.content.default};
`;

// Custom Dropdown Components
const CustomDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CustomDropdownButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CustomDropdownButton = styled.button<{
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
  hasIcon?: boolean;
  isOpen?: boolean;
  required?: boolean;
}>`
  width: 100%;
  height: 36px;
  padding: 6px 9px 6px 12px;
  padding-right: ${({ hasIcon }) => (hasIcon ? '48px' : '32px')};
  border-style: solid;
  border-radius: ${({ theme }) => theme.prima.radius.global['radius-8']}px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition:
    border-color 0.2s,
    border-width 0.2s,
    background-color 0.2s;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.prima.color.bg.disabled : theme.prima.color.bg.default};
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.prima.color.content.disabled
      : theme.prima.color.content.default};

  border-width: ${({ error }) => (error ? '1px' : '1px')};
  border-color: ${({ theme, disabled, error, required }) => {
    if (disabled) return theme.prima.color.border.disabled;
    if (error) return theme.prima.color.border.error;
    if (required) return theme.prima.color.border['brand-01'];
    return theme.prima.color.border.default;
  }};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    border-color: ${({ theme, error, required }) => {
      if (error) return theme.prima.color.border.error;
      if (required) return theme.prima.color.border['brand-01'];
      return theme.prima.color.border.default;
    }};
  }

  &:focus {
    z-index: 1;
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    border-width: 2px;
    border-color: ${({ theme, error, required }) => {
      if (error) return theme.prima.color.border.error;
      if (required) return theme.prima.color.border['brand-01'];
      return theme.prima.color.border['brand-02-strong'];
    }} !important;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const CustomDropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.prima.color.bg.default};
  border-radius: ${({ theme }) => theme.prima.radius.global['radius-8']}px;
  box-shadow:
    0 0 18px 0 rgba(0, 6, 36, 0.12),
    0 6px 6px 0 rgba(0, 6, 36, 0.06);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  /* Remove max-height/overflow from here */
`;

const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: ${({ theme }) => theme.prima.color.bg.default};
  border-radius: ${({ theme }) => theme.prima.radius.global['radius-8']}px;
  overflow: hidden; /* Prevent any overflow beyond border radius */
  width: calc(100% - 10px);
  padding: 0 5px;

  /* make inner list fill and scroll */
  > div {
    max-height: 180px; /* keep your menu height cap */
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-block: 5px;
    scrollbar-gutter: stable; /* prevents layout shift on focus */

    /* WebKit (Chrome/Edge/Safari) */
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.prima.color.bg.default};
      border-radius: ${({ theme }) => theme.prima.radius.global['radius-4']}px;
    }
    &::-webkit-scrollbar-thumb {
      /* your pill (thumb) */
      background: ${({ theme }) => theme.prima.color.bg.disabled};
      border-radius: ${({ theme }) => theme.prima.radius.global['radius-4']}px;
      min-height: 56px; /* scrollbar thumb height */
    }

    /* Hide scrollbar arrows completely */
    &::-webkit-scrollbar-button {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      background: transparent !important;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
      background: transparent !important;
    }
    &::-webkit-scrollbar-button:start:decrement:hover,
    &::-webkit-scrollbar-button:end:increment:hover {
      display: none !important;
    }
    &::-webkit-scrollbar-button:vertical:start:decrement,
    &::-webkit-scrollbar-button:vertical:end:increment {
      display: none !important;
    }

    /* Firefox */
    scrollbar-width: thick;
    scrollbar-color: ${({ theme }) => theme.prima.color.bg.disabled}
      ${({ theme }) => theme.prima.color.bg.default};

    /* Additional Firefox styling attempts */
    scrollbar-gutter: stable;

    /* Try to force wider scrollbar in Firefox */
    &::-moz-scrollbar {
      width: 8px;
    }
    &::-moz-scrollbar-thumb {
      background: ${({ theme }) => theme.prima.color.bg.disabled};
      border-radius: ${({ theme }) => theme.prima.radius.global['radius-4']}px;
    }
    &::-moz-scrollbar-track {
      background: ${({ theme }) => theme.prima.color.bg.default};
    }
  }
`;

const OptionsList = styled.div``;

const CustomDropdownOption = styled.div<{
  isSelected: boolean;
  isHovered: boolean;
}>`
  padding: 6px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;

  background-color: ${({ theme, isSelected, isHovered }) => {
    if (isSelected) return theme.prima.color.bg['brand-02-subtle'];
    if (isHovered) return theme.prima.color.bg['brand-02-xsubtle'];
    return theme.prima.color.bg.default;
  }};

  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.prima.color.content.knockout
      : theme.prima.color.content.default};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  value,
  options = [],
  required = false,
  disabled = false,
  loading = false,
  warning = false,
  warningInline,
  error = false,
  errorInline,
  onChange,
  className,
  variant = 'single',
  ...rest
}) => {
  // State for custom dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prioritize states: error > errorInline > warning > warningInline > loading
  let state = {
    error: false,
    errorInline: '',
    warning: false,
    warningInline: '',
    loading: false,
  };
  if (error) {
    state.error = true;
  } else if (errorInline) {
    state.errorInline = errorInline;
  } else if (warning) {
    state.warning = true;
  } else if (warningInline) {
    state.warningInline = warningInline;
  } else if (loading) {
    state.loading = true;
  }

  const isError = state.error || !!state.errorInline;
  const hasIcon = state.loading || state.warning || isError;
  const theme = useTheme();

  // Custom dropdown handlers
  const handleCustomDropdownToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleCustomOptionClick = (optionValue: string) => {
    // Handle single select logic
    if (onChange) {
      onChange({ target: { value: optionValue } } as any);
    }
    setIsOpen(false);
  };

  const handleCustomOptionHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCustomOptionLeave = () => {
    setHoveredIndex(null);
  };

  // Helper functions for single select
  const isOptionSelected = (optionValue: string) => {
    return value === optionValue;
  };

  const selectedOption = options.find((option) => option.value === value);

  const displayText = selectedOption ? selectedOption.label : placeholder || '';

  const renderStateIcon = () => {
    if (state.loading) {
      return (
        <SpinnerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clipPath="url(#clip0_25499_424)">
              <path
                d="M14.98 9.48973C15.2504 6.18708 12.7924 3.29048 9.48974 3.02C6.18709 2.74951 3.29049 5.20756 3.02 8.51021C2.95238 9.33588 2.22823 9.95039 1.40257 9.88277C0.576908 9.81515 -0.0376064 9.091 0.0300155 8.26533C0.435746 3.31136 4.78065 -0.375723 9.73462 0.0300076C14.6886 0.435739 18.3757 4.78064 17.9699 9.73462C17.9023 10.5603 17.1782 11.1748 16.3525 11.1072C15.5269 11.0395 14.9123 10.3154 14.98 9.48973Z"
                fill="#E7E9FF"
              />
              <path
                d="M5.65634 13.982C8.40781 15.8286 12.1353 15.0951 13.9819 12.3436C15.8286 9.59213 15.095 5.86463 12.3436 4.018C11.6557 3.55634 11.4723 2.62447 11.934 1.9366C12.3956 1.24873 13.3275 1.06535 14.0154 1.527C18.1426 4.29694 19.2429 9.88819 16.4729 14.0154C13.703 18.1426 8.11175 19.2429 3.98453 16.473C3.29666 16.0113 3.11328 15.0795 3.57493 14.3916C4.03659 13.7037 4.96847 13.5203 5.65634 13.982Z"
                fill="#3B51FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_25499_424">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </SpinnerIcon>
      );
    }
    if (state.error) {
      return (
        <Icon
          name="alert-filled-medium"
          size={24}
          style={{ color: theme.prima.color.bg['error-strong'] }}
        />
      );
    }
    if (state.warning) {
      return (
        <Icon
          name="warning-filled-medium"
          size={24}
          style={{ color: theme.prima.color.bg['warning-strong'] }}
        />
      );
    }
    return null;
  };

  const renderChevronIcon = () => {
    return (
      <ChevronIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13.4401L8.03995 9.6001L7.19995 10.5601L12 15.3601L16.8 10.5601L15.84 9.6001L12 13.4401Z"
            fill="#3B51FF"
          />
        </svg>
      </ChevronIcon>
    );
  };

  return (
    <DropdownContainer className={className}>
      {label && (
        <DropdownLabelContainer>
          <Typography
            variant="body"
            size={3}
            color="strong"
            css={{ margin: 0 }}
          >
            {label}
          </Typography>
          <div
            style={{
              width: '7px',
              height: '7px',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            {required && <RequiredIndicator />}
          </div>
        </DropdownLabelContainer>
      )}

      {variant === 'native' ? (
        // Native Select Implementation
        <SelectContainer>
          <StyledSelect
            value={value}
            disabled={disabled}
            error={isError}
            warning={state.warning}
            hasIcon={hasIcon && !state.warningInline && !state.errorInline}
            style={{
              ...(state.warningInline || state.errorInline
                ? { paddingRight: '32px' }
                : hasIcon
                  ? { paddingRight: '60px' } // More space for state icon + chevron
                  : { paddingRight: '32px' }), // Just chevron
            }}
            onChange={onChange as any}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>

          {/* State icons (warning, error, loading) - left of chevron */}
          {hasIcon && !state.warningInline && !state.errorInline && (
            <StateIconContainer>{renderStateIcon()}</StateIconContainer>
          )}

          {/* Chevron icon - always on the right */}
          <IconContainer>{renderChevronIcon()}</IconContainer>
        </SelectContainer>
      ) : (
        // Custom Dropdown Implementation
        <CustomDropdownContainer ref={dropdownRef}>
          <CustomDropdownButtonContainer>
            <CustomDropdownButton
              type="button"
              disabled={disabled}
              error={isError}
              warning={state.warning}
              hasIcon={hasIcon && !state.warningInline && !state.errorInline}
              isOpen={isOpen}
              required={required}
              onClick={handleCustomDropdownToggle}
              style={{
                ...(state.warningInline || state.errorInline
                  ? { paddingRight: '32px' }
                  : hasIcon
                    ? { paddingRight: '60px' } // More space for state icon + chevron
                    : { paddingRight: '32px' }), // Just chevron
              }}
            >
              {displayText || placeholder || 'Select option...'}
            </CustomDropdownButton>

            {/* State icons (warning, error, loading) - left of chevron */}
            {hasIcon && !state.warningInline && !state.errorInline && (
              <StateIconContainer>{renderStateIcon()}</StateIconContainer>
            )}

            {/* Chevron icon - always on the right */}
            <IconContainer>{renderChevronIcon()}</IconContainer>
          </CustomDropdownButtonContainer>

          {/* Custom Dropdown Menu */}
          <CustomDropdownMenu isOpen={isOpen}>
            <ScrollArea>
              <OptionsList>
                {options.map((option, index) => (
                  <CustomDropdownOption
                    key={option.value}
                    isSelected={isOptionSelected(option.value)}
                    isHovered={hoveredIndex === index}
                    onClick={() => handleCustomOptionClick(option.value)}
                    onMouseEnter={() => handleCustomOptionHover(index)}
                    onMouseLeave={handleCustomOptionLeave}
                  >
                    {option.label}
                  </CustomDropdownOption>
                ))}
              </OptionsList>
            </ScrollArea>
          </CustomDropdownMenu>
        </CustomDropdownContainer>
      )}

      {/* Inline warning message */}
      {state.warningInline && (
        <InlineMessageContainer>
          <Icon
            name="warning-filled-small"
            size={18}
            style={{ color: theme.prima.color.bg['warning-strong'] }}
          />
          <Typography
            variant="body"
            size={3}
            color="default"
            style={{ color: theme.prima.color.content.default, margin: 0 }}
          >
            {state.warningInline}
          </Typography>
        </InlineMessageContainer>
      )}

      {/* Inline error message */}
      {state.errorInline && (
        <InlineMessageContainer>
          <Icon
            name="alert-filled-small"
            size={18}
            style={{ color: theme.prima.color.bg['error-strong'] }}
          />
          <Typography
            variant="body"
            size={3}
            color="default"
            style={{ color: theme.prima.color.bg['error-strong'], margin: 0 }}
          >
            {state.errorInline}
          </Typography>
        </InlineMessageContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
