import React from 'react';
import type { Meta } from '@storybook/react';
import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    children: {
      options: ['Success', 'Error', 'Warning', 'Info'],
      control: { type: 'radio' },
    },
    emphasis: {
      options: ['default', 'strong'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Basic = (args) => <Badge {...args}></Badge>;
