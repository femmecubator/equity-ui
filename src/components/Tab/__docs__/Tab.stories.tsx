import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tab from '../Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
    controls: {
      include: ['label', 'isSelected', 'icon', 'css', 'className'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tab
        value="tab"
        label="Tab"
        isSelected={isSelected}
        onTabSelect={() => setIsSelected(!isSelected)}
      >
        <div>
          <p>
            This is the main tab content. You can click to toggle between
            selected and unselected states.
          </p>
        </div>
      </Tab>
    );
  },
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [selectedTab1, setSelectedTab1] = useState(true);
    const [selectedTab2, setSelectedTab2] = useState(true);

    return (
      <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
        {/* Tab without icon */}
        <div>
          <Tab
            value="tab-without-icon"
            label="Tab without icon"
            isSelected={selectedTab1}
            onTabSelect={() => setSelectedTab1(!selectedTab1)}
          >
            <div>
              <p>
                This tab demonstrates the basic tab variant without an icon. It
                shows how tabs look with just text labels.
              </p>
            </div>
          </Tab>
        </div>

        {/* Tab with icon */}
        <div>
          <Tab
            value="tab-with-icon"
            label="Tab with icon"
            icon="complete"
            isSelected={selectedTab2}
            onTabSelect={() => setSelectedTab2(!selectedTab2)}
          >
            <div>
              <p>Content for tab with icon.</p>
            </div>
          </Tab>
        </div>
      </div>
    );
  },
};

export const Group: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Tab.Group defaultValue="overview">
      <Tab value="overview" label="Overview" icon="statistics">
        <div>
          <h3>Overview</h3>
          <p>
            This is the overview tab content. Here you can see general
            information and summary statistics for your dashboard.
          </p>
        </div>
      </Tab>
      <Tab value="optimize" label="Optimize" icon="money">
        <div>
          <h3>Optimize</h3>
          <p>
            Configure optimization settings and review performance metrics to
            improve your results and maximize efficiency.
          </p>
        </div>
      </Tab>
      <Tab value="products" label="Products" icon="globe">
        <div>
          <h3>Producs</h3>
          <p>
            Browse and manage your product catalog. Add new products, update
            existing ones, and track inventory levels.
          </p>
        </div>
      </Tab>
      <Tab value="contracts" label="Contracts" icon="article">
        <div>
          <h3>Contracts</h3>
          <p>
            View and manage all your contracts and agreements. Track contract
            status, renewal dates, and terms.
          </p>
        </div>
      </Tab>
    </Tab.Group>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Tab',
    isSelected: true,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    isSelected: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: [
        undefined,
        'statistics',
        'money',
        'globe',
        'article',
        'complete',
      ],
    },
    className: {
      control: { type: 'text' },
      description: 'CSS class name for styling the tab button',
    },
    value: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    onTabSelect: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: (args) => (
    <Tab
      value="playground-tab"
      label={args.label}
      isSelected={args.isSelected}
      icon="complete"
    >
      <div>
        <p>Content.</p>
      </div>
    </Tab>
  ),
};
