import React from 'react';
import type { Meta } from '@storybook/react';
import Link, { LinkProps } from '../Link';
import { TEST_EXTERNAL_LINK } from '../mocks';
import { iconList } from '../../../icons/icon-constant';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: [undefined, ...iconList],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const Basic = {
  args: { children: 'Label' },
  render: (args): LinkProps => {
    console.log(args);
    return <Link {...args} href={TEST_EXTERNAL_LINK} target="_blank" />;
  },
};
