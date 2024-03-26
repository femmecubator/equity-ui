import React from 'react';
import type { Meta } from '@storybook/react';
import Tab from '../Tab';

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Basic = (args) => <Tab {...args}></Tab>;
