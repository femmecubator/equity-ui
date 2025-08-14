import React from 'react';
import type { Meta } from '@storybook/react';
import Divider from '../Divider';

const meta: Meta<typeof Divider> = {
  title: 'Unsupported/Divider',
  component: Divider,
};

export default meta;

export const Default = {
  render: (args) => <Divider {...args} />,
};
