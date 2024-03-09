import React from 'react';
import type { Meta } from '@storybook/react';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
};

export default meta;

export const Default = (args) => {
  return (
    <Avatar {...args} />
  );
};

