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
    disabled: {
      options: ['disabled'],
      control: 'boolean',
    },
    autoFocus: {
      options: ['focus'],
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic = (args) => <Checkbox {...args} />;

export const LabeledCheckbox = (args) => (
  <Checkbox id={' Example Label for Checkbox'} {...args} />
);
