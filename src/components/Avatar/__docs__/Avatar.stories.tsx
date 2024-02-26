import React from 'react';
import type { Meta } from '@storybook/react';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Basic = (args) => (
  <Avatar {...args} src="images/femmecubator-logo.png" alt="Femmecubator" />
);

export const Fallback = (args) => (
  <Avatar {...args} src="invalid-src" alt="Femmecubator" />
);
