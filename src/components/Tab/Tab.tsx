import React, {
  createContext,
  useContext,
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
  Children,
  isValidElement,
} from 'react';
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { Typography } from '../Typography/Typography';
import type { IconName } from '../../icons/icon-constant';

// Context for Tab Group
interface TabContextType {
  selectedValue?: string;
  onChange?: (value: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const useTabContext = () => {
  const context = useContext(TabContext);
  return context;
};

// Individual Tab Component Props
export interface TabProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'value' | 'onSelect'> {
  value: string;
  label: string;
  icon?: IconName;
  children: ReactNode;
  isSelected?: boolean;
  onTabSelect?: (value: string) => void;
  className?: string;
}

// Styled Components
const StyledTabButton = styled.button<{
  isSelected: boolean;
  isInGroup?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  background: transparent;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 'normal')};
  cursor: pointer;
  transition: all 0.1s ease;
  min-height: 44px;
  position: relative;

  /* Full-width border under each tab - only for groups */
  ${({ isInGroup, theme }) =>
    isInGroup &&
    `
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -9999px;
      right: -9999px;
      height: 2px;
      background-color: ${theme.prima.color.border.default};
      z-index: 0;
    }
  `}

  /* Individual tab border - only for standalone tabs */
  ${({ isInGroup, theme }) =>
    !isInGroup &&
    `
    border-bottom: 2px solid ${theme.prima.color.border.default};
  `}

  /* Selected state indicator */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.prima.color.border['brand-02-strong'] : 'transparent'};
    transition: background-color 0.1s ease;
    z-index: 1;
  }

  /* Default colors */
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.prima.color.content.default
      : theme.prima.color.content.default};

  &:hover {
    color: ${({ theme }) => theme.prima.color.content['brand-02-strong']};
    background-color: ${({ theme }) =>
      theme.prima.color.bg['brand-02-xsubtle']};
    font-weight: 600;

    &::after {
      background-color: ${({ theme }) =>
        theme.prima.color.border['brand-02-strong']};
    }

    /* Hover border for individual tabs */
    ${({ isInGroup, theme }) =>
      !isInGroup &&
      `
      border-bottom-color: ${theme.prima.color.border['brand-02-strong']};
    `}
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledTabContent = styled.div`
  padding-top: 16px;
`;

const StyledTabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden; /* Hide the extended borders that go beyond container */
`;

// Individual Tab Component
export const Tab: React.FC<TabProps> = ({
  value,
  label,
  icon,
  children,
  onClick,
  isSelected,
  onTabSelect,
  className,
  ...props
}) => {
  const context = useTabContext();

  const isActiveTab = context
    ? context.selectedValue === value
    : isSelected || false;
  const handleChange = context ? context.onChange : onTabSelect;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleChange?.(value);
    onClick?.(event);
  };

  return (
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <StyledTabButton
        {...props}
        className={className}
        isSelected={isActiveTab}
        isInGroup={!!context}
        onClick={handleClick}
        role="tab"
        aria-selected={isActiveTab}
        aria-controls={`tabpanel-${value}`}
        id={`tab-${value}`}
      >
        {icon && <Icon name={icon} size={18} />}
        <Typography
          variant="body"
          size={2}
          color="currentColor"
          css={{
            margin: 0,
            fontWeight: 'inherit',
            fontSize: 'inherit',
          }}
        >
          {label}
        </Typography>
      </StyledTabButton>

      {!context && isActiveTab && (
        <StyledTabContent>
          <div
            role="tabpanel"
            id={`tabpanel-${value}`}
            aria-labelledby={`tab-${value}`}
          >
            {children}
          </div>
        </StyledTabContent>
      )}
    </div>
  );
};

// Tab Group Component Props
export interface TabGroupProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

// Tab Group Component
const TabGroupComponent: React.FC<TabGroupProps> = ({
  value,
  defaultValue,
  onChange,
  children,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const selectedValue = value !== undefined ? value : internalValue;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const tabs: ReactNode[] = [];
  const tabContents: { [key: string]: ReactNode } = {};

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === Tab) {
      const tabProps = child.props as TabProps;
      tabs.push(child);
      tabContents[tabProps.value] = tabProps.children;
    }
  });

  return (
    <TabContext.Provider value={{ selectedValue, onChange: handleChange }}>
      <div {...props} className={className}>
        <StyledTabList role="tablist">{tabs}</StyledTabList>
        <StyledTabContent>
          {selectedValue && tabContents[selectedValue] && (
            <div
              role="tabpanel"
              id={`tabpanel-${selectedValue}`}
              aria-labelledby={`tab-${selectedValue}`}
            >
              {tabContents[selectedValue]}
            </div>
          )}
        </StyledTabContent>
      </div>
    </TabContext.Provider>
  );
};

// Compound component structure
const TabRoot = Object.assign(Tab, {
  Group: TabGroupComponent,
});

export { TabGroupComponent as Group };
export default TabRoot;
