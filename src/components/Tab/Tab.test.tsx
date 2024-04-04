import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import TabGroup, { TabItemProps } from './Tab';

describe('Tab component', () => {
  it('TabGroup should render without errors', () => {
    const tabItems: TabItemProps[] = [
      { tabItemId: 1, label: 'one', isActive: true },
      { tabItemId: 2, label: 'two', isActive: false },
      { tabItemId: 3, label: 'three', isActive: false },
    ];

    const handleChange = () => {};

    contextRender(
      <TabGroup tabItems={tabItems} onChange={handleChange}>
        {({ tabItems, onChange }) =>
          tabItems.map((tabItem) => (
            <div
              role="tab"
              key={tabItem.tabItemId}
              onClick={() => onChange(tabItem.tabItemId)}
            >
              {tabItem.label}
            </div>
          ))
        }
      </TabGroup>
    );
    const tabGroupContainer = screen.getByTestId('tab-group-container');
    expect(tabGroupContainer).toBeInTheDocument();

    const tabList = screen.getByRole('tablist');
    expect(tabList).toBeInTheDocument();
    expect(tabList).toHaveAttribute('role', 'tablist');

    const tabLabels = screen.getAllByRole('tab');
    expect(tabLabels).toHaveLength(3);
    expect(tabLabels[0]).toHaveTextContent('one');
    expect(tabLabels[1]).toHaveTextContent('two');
    expect(tabLabels[2]).toHaveTextContent('three');
  });

  it('matches snapshot', () => {
    const tabItems: TabItemProps[] = [
      { tabItemId: 1, label: 'one', isActive: true },
      { tabItemId: 2, label: 'two', isActive: false },
      { tabItemId: 3, label: 'three', isActive: false },
    ];

    const handleChange = () => {};

    const { asFragment } = contextRender(
      <TabGroup tabItems={tabItems} onChange={handleChange}>
        {({ tabItems, onChange }) =>
          tabItems.map((tabItem) => (
            <div
              role="tab"
              key={tabItem.tabItemId}
              onClick={() => onChange(tabItem.tabItemId)}
            >
              {tabItem.label}
            </div>
          ))
        }
      </TabGroup>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
