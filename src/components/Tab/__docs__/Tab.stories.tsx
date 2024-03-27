import React from 'react';
import type { Meta } from '@storybook/react';
import TabGroup from '../Tab';

const meta: Meta<typeof TabGroup> = {
  title: 'TabGroup',
  component: TabGroup,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Basic = (args) => <TabGroup {...args}></TabGroup>;
