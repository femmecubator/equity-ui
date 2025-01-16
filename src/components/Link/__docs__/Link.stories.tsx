import React from 'react';
import type { Meta } from '@storybook/react';
import Link, { LinkProps } from '../Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      options: 'disabled',
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic = {
  render: ({ ...args }: LinkProps) => (
    <Link {...args} href="https://unsplash.com/s/photos/puppy" target="_blank">
      {'Link text here'}
    </Link>
  ),
};

export const Preview = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-around',
      paddingBottom: '2rem',
    }}
  >
    <Link {...args} href="google.com">
      Links to Google
    </Link>
    <Link {...args} href="google.com" disabled>
      Disabled link
    </Link>
  </div>
);
