import React from 'react';
import type { Meta } from '@storybook/react';

import { Checkbox as CheckboxComponent, CheckboxProps } from '../Checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: ['disabled'],
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic = {
  args: { label: 'Checkbox' },
  render: (args: CheckboxProps) => <CheckboxComponent {...args} />,
};
