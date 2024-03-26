import React from 'react';
import type { Meta } from '@storybook/react';
import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {

  },
};

export default meta;

export const Basic = (args) => <Badge {...args}></Badge>;
