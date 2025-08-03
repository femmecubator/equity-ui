import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import asterisk from './icons/asterisk.svg';

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CheckboxesContainer = styled.div<{
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
  gap: 4px;
`;

const RequiredIndicator = styled.div`
  display: inline-flex;
  align-items: flex-start;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.prima.color.content['brand-02']};
    mask: url(${asterisk});
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask: url(${asterisk});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
  }
`;

const InfoIconContainer = styled.div`
  cursor: pointer;
`;

// Context for sharing group state with individual checkboxes
interface CheckboxGroupContextValue {
  value?: string[];
  onChange?: (value: string, checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
}

const CheckboxGroupContext =
  React.createContext<CheckboxGroupContextValue | null>(null);

// Hook to use the checkbox group context
export const useCheckboxGroup = () => {
  return React.useContext(CheckboxGroupContext);
};

export interface CheckboxGroupProps {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  info?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: (checkedValues: string[]) => void;
  disabled?: boolean;
  error?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

export const CheckboxGroup = ({
  children,
  label,
  required = false,
  info = false,
  value,
  defaultValue = [],
  onChange,
  disabled = false,
  error = false,
  orientation = 'vertical',
}: CheckboxGroupProps) => {
  const theme = useTheme();
  const [checkedValues, setCheckedValues] = React.useState<string[]>(
    value ?? defaultValue
  );

  // Update internal state when controlled value changes
  React.useEffect(() => {
    if (value !== undefined) {
      setCheckedValues(value);
    }
  }, [value]);

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    let newCheckedValues: string[];

    if (checked) {
      newCheckedValues = [...checkedValues, optionValue];
    } else {
      newCheckedValues = checkedValues.filter((val) => val !== optionValue);
    }

    // Only update internal state if not controlled
    if (value === undefined) {
      setCheckedValues(newCheckedValues);
    }

    onChange?.(newCheckedValues);
  };

  const getGroupLabelColor = () => {
    return theme.prima.color.content.strong;
  };

  const contextValue: CheckboxGroupContextValue = {
    value: checkedValues,
    onChange: handleCheckboxChange,
    disabled,
    error,
  };

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
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
            {required && <RequiredIndicator />}
            {info && (
              <InfoIconContainer>
                <Icon name="info-circle" size={18} color="brand-02" />
              </InfoIconContainer>
            )}
          </GroupLabelContainer>
        )}

        <CheckboxesContainer orientation={orientation}>
          {children}
        </CheckboxesContainer>
      </GroupContainer>
    </CheckboxGroupContext.Provider>
  );
};

export default CheckboxGroup;
