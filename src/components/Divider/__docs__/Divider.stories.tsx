import React from 'react';
import type { Meta } from '@storybook/react';
import Divider from '../Divider';

//Updated Meta type usage for removal of argTypes
const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
};

export default meta;

//Simplified story definition as suggested
export const Default = {
  render: (args) => <Divider {...args} />,
};
