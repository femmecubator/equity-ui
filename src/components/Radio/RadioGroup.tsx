import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import { RadioGroupContext, RadioGroupContextValue } from './Radio';

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadiosContainer = styled.div<{
  orientation: 'vertical' | 'horizontal';
}>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
  gap: ${({ orientation }) => (orientation === 'horizontal' ? '16px' : '8px')};
`;

const GroupLabelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
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

const InfoIconContainer = styled.div`
  cursor: pointer;
`;

export interface RadioGroupProps {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  info?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (selectedValue: string) => void;
  disabled?: boolean;
  error?: boolean;
  orientation?: 'vertical' | 'horizontal';
  name: string; // Required for radio groups
}

export const RadioGroup = ({
  children,
  label,
  required = false,
  info = false,
  value,
  defaultValue = '',
  onChange,
  disabled = false,
  error = false,
  orientation = 'vertical',
  name,
}: RadioGroupProps) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState<string>(
    value ?? defaultValue
  );

  // Update internal state when controlled value changes
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleRadioChange = (optionValue: string) => {
    // Only update internal state if not controlled
    if (value === undefined) {
      setSelectedValue(optionValue);
    }

    onChange?.(optionValue);
  };

  const getGroupLabelColor = () => {
    return theme.prima.color.content.strong;
  };

  const contextValue: RadioGroupContextValue = {
    value: selectedValue,
    onChange: handleRadioChange,
    disabled,
    error,
    name,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <GroupContainer>
        {label && (
          <GroupLabelContainer>
            <Typography
              variant="body"
              size={3}
              color={getGroupLabelColor()}
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
              data-testid={required ? 'required-indicator' : 'required-space'}
            >
              {required && <RequiredIndicator />}
            </div>
            {info && (
              <InfoIconContainer>
                <Icon name="info-circle" size={18} color="brand-02" />
              </InfoIconContainer>
            )}
          </GroupLabelContainer>
        )}

        <RadiosContainer orientation={orientation}>{children}</RadiosContainer>
      </GroupContainer>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
