import React from 'react';
import type { Meta } from '@storybook/react';
import Link from '../Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    children: {},
  },
};

export default meta;

export const Basic = {
  args: {
    children: 'Link text',
  },
  render: (args) => <Link {...args}></Link>,
};
