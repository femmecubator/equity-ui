import React, { useCallback, useState } from 'react';
import type { Meta } from '@storybook/react';
import TabGroup, { TabGroupProps, TabItem, TabItemProps } from '../Tab';

const meta: Meta<TabGroupProps> = {
  title: 'TabGroup',
  component: TabGroup,
};

export default meta;

const itemsInitial: TabItemProps[] = [
  {
    isActive: true,
    label: 'one',
    children: <div>test one</div>,
    tabItemId: 1,
  },
  {
    isActive: false,
    label: 'two',
    children: <div>test two</div>,
    tabItemId: 2,
  },
  {
    isActive: false,
    label: 'three',
    children: <div>test three</div>,
    tabItemId: 3,
  },
];

const Template = () => {
  const [items, setItems] = useState<TabItemProps[]>(itemsInitial);

  const handleChange = useCallback((activeKey: number) => {
    setItems((prev) => {
      prev.forEach((tabItem) => {
        if (tabItem.tabItemId === activeKey) {
          tabItem.isActive = true;
        }

        if (tabItem.isActive && tabItem.tabItemId !== activeKey) {
          tabItem.isActive = false;
        }
      });
      return [...prev];
    });
  }, []);

  return (
    <TabGroup tabItems={items} onChange={handleChange}>
      {({ onChange, tabItems }) =>
        tabItems.map(({ isActive, tabItemId, label, ...props }) => {
          return (
            <TabItem
              {...props}
              key={tabItemId}
              isActive={isActive}
              tabItemId={tabItemId}
              onClick={() => onChange(tabItemId)}
              label={label}
            />
          );
        })
      }
    </TabGroup>
  );
};

export const Tabs = Template.bind({});
