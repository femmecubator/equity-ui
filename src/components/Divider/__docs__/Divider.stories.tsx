import type { Meta, StoryObj } from '@storybook/react';
import Divider, { DividerProps } from '../Divider';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryObj<DividerProps> = {};
