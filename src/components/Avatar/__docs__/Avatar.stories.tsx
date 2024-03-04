import React from 'react';
import type { Meta } from '@storybook/react';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

export const Default = (args) => {
  return (
    <Avatar {...args} />
  );
};

