import React from 'react';
import type { Meta } from '@storybook/react';

import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    error: {
      options: ['error'],
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic = (args) => <Checkbox {...args} />;

export const Fallback = (args) => <Checkbox {...args} />;
