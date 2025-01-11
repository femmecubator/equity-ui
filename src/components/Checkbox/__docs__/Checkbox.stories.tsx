import React from 'react';
import type { Meta } from '@storybook/react';

import { Checkbox as CheckboxComponent, CheckboxProps } from '../Checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Checkbox',
  component: CheckboxComponent,
  argTypes: {
    label: {
      control: 'text',
    },
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

export const Preview = () => (
  <>
    <CheckboxComponent label={'Label Selected'} />
    <CheckboxComponent label={'Label Selected'} error />
    <CheckboxComponent label={'Label Selected'} disabled />
    <CheckboxComponent label={'Label Selected'} checked />
  </>
);

export const Checkbox = (args: CheckboxProps) => (
  <CheckboxComponent {...args} />
);
