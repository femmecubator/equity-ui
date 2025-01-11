import React from 'react';
import type { Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../Checkbox';

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

export const Basic = (args: CheckboxProps) => <Checkbox {...args} />;

export const LabeledCheckbox = (args: CheckboxProps) => (
  <div style={{ border: 'solid 2px pink' }}>
    <Checkbox label={'Label Selected'} id="example" {...args} />
  </div>
);
