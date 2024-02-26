import React from 'react';
import type { Meta } from '@storybook/react';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

export const Small = (args) => {
  return (
    <Avatar
      {...args}
      size="small"
      src="https://via.placeholder.com/150"
      alt="large"
    />
  );
};

export const Medium = (args) => {
  return (
    <Avatar
      {...args}
      size="medium"
      src="https://via.placeholder.com/150"
      alt="large"
    />
  );
};

export const Large = (args) => {
  return (
    <Avatar {...args} size="large" src="https://via.xs.com/150" alt="large">
      A
    </Avatar>
  );
};
