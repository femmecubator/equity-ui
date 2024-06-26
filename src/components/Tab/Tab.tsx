/* eslint-disable react/prop-types */
import { ComponentPropsWithoutRef, ReactElement } from 'react';
import styled from '@emotion/styled';

export interface TabItemProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  isActive: boolean;
  tabItemId: number;
  label: string;
}

const StyledTabItem = styled.div<Omit<TabItemProps, 'label'>>`
  ${({ theme, isActive }) => `
    display: inline-flex;
    text-align: center;
    font-size: ${theme.typography.body.default.fontSize}px;
    font-style: normal;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 44px;
    padding-bottom: 9px;
    padding-top: 9px;
    padding-left: 16px;
    padding-right: 16px;;
    gap: 10px;
    font-weight: ${
      isActive === true ? '600' : `${theme.typography.body.default.fontWeight}`
    };
    line-height: ${
      isActive === true ? '22px' : `${theme.typography.body.default.lineHeight}`
    }; 
    border-bottom: ${isActive == true ? '2px solid #026FE4' : undefined}
`}
`;

export const TabItem: React.FC<TabItemProps> = ({
  label,
  tabItemId,
  ...props
}) => {
  return (
    <StyledTabItem {...props} tabItemId={tabItemId}>
      {label}
    </StyledTabItem>
  );
};

export interface TabGroupProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange' | 'children'> {
  tabItems: TabItemProps[];
  onChange: (activeKey: number) => void;
  children: (props: {
    tabItems: TabItemProps[];
    onChange: (activeKey: number) => void;
  }) => ReactElement[];
}

function TabGroupRoot({ children, className, ...props }: TabGroupProps) {
  return (
    <div data-testid="tab-group-container">
      <div role="tablist">{children(props)}</div>
      <div className={className}>
        {props.tabItems.find((item) => item.isActive)?.children}
      </div>
    </div>
  );
}

const TabGroup = styled(TabGroupRoot)`
  padding-top: 15px;
`;

export default TabGroup;
