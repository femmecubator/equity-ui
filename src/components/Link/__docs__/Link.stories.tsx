import React from 'react';
import type { Meta } from '@storybook/react';
import Link from '../Link';
import Icon from '../../Icon/Icon';

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
    children: 'Link text here',
  },
  render: (args) => <Link {...args}></Link>,
};

export const WithIcon = (args) => (
  <Link {...args} containsIcon>
    Label
    <Icon name="share" size="small" />
  </Link>
);