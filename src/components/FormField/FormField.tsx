import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon';
import { useTheme } from '@emotion/react';

export type FormFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  warning?: boolean;
  warningInline?: string;
  error?: boolean;
  errorInline?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  name?: string;
};
const InlineMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-top: ${({ theme }) => theme.prima.spacing.global['space-8']}px;
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormFieldLabelContainer = styled.div`
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

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
  hasIcon?: boolean;
}>`
  width: 100%;
  padding: 6px 9px 6px 12px;
  padding-right: ${({ hasIcon }) => (hasIcon ? '48px' : '9px')};
  border-style: solid;
  border-radius: ${({ theme }) => theme.prima.radius.global['radius-8']}px;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.2s,
    border-width 0.2s,
    background-color 0.2s;

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
    if (error) return theme.prima.color.border.default;
    if (required) return theme.prima.color.border['brand-01'];
    return theme.prima.color.border.default;
  }};

  &::placeholder {
    color: ${({ theme }) => theme.prima.color.content.subtle};
    font-size: 16px;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    border-color: ${({ theme, error, required }) => {
      if (error) return theme.prima.color.border.default;
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

const IconContainer = styled.div`
  position: absolute;
  right: 9px;
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

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  required = false,
  disabled = false,
  loading = false,
  warning = false,
  warningInline,
  error = false,
  errorInline,
  onChange,
  className,
  id,
  name,
  ...rest
}) => {
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

  const renderIcon = () => {
    if (loading) {
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
    if (error) {
      return (
        <Icon
          name="alert-filled-medium"
          size={24}
          style={{ color: theme.prima.color.bg['error-strong'] }}
        />
      );
    }
    if (warning) {
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

  return (
    <FormFieldContainer className={className}>
      {label && (
        <FormFieldLabelContainer>
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
        </FormFieldLabelContainer>
      )}

      <InputContainer>
        <StyledInput
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          error={isError}
          warning={state.warning}
          hasIcon={hasIcon && !state.warningInline && !state.errorInline}
          style={
            state.warningInline || state.errorInline
              ? { paddingRight: '9px' }
              : undefined
          }
          onChange={onChange}
          {...rest}
        />
        {hasIcon && !state.warningInline && !state.errorInline && (
          <IconContainer>{renderIcon()}</IconContainer>
        )}
      </InputContainer>

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
    </FormFieldContainer>
  );
};

export default FormField;
