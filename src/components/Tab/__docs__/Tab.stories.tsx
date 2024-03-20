import React from 'react';
import type { Meta } from '@storybook/react';
import Tab from '../Tab';

const meta: Meta<typeof Tab> = {
  title: 'Tab',
  component: Tab,
  argTypes: {
    variant: {
      options: ['default', 'active'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Basic = (args) => <Tab {...args}></Tab>;
