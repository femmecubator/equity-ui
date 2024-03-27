import React from 'react';
import type { Meta } from '@storybook/react';
import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    children: {},
  },
};

export default meta;

export const Basic = {
  args: {
    children: 'Badge text',
  },
  render: (args) => <Badge {...args}></Badge>,
};
