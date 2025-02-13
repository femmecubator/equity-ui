import React from 'react';
import type { Meta } from '@storybook/react';
import Link, { LinkProps } from '../Link';
import { iconList } from '../../../icons/icon-constant';
import { TEST_EXTERNAL_LINK } from '../mocks';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      options: 'disabled',
      control: 'boolean',
    },
    icon: {
      options: iconList.map((icon) => icon),
      control: { type: 'select' },
    },
  },
};

export default meta;

export const Basic = {
  render: ({ ...args }: LinkProps) => (
    <Link {...args} href={TEST_EXTERNAL_LINK} target="_blank">
      {'Link text here'}
    </Link>
  ),
};

export const Preview = (args: LinkProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'space-around',
      paddingBottom: '2rem',
    }}
  >
    <Link {...args} href={TEST_EXTERNAL_LINK}>
      {/* this can later be updated with a share circle icon */}
      Label
    </Link>
    <Link {...args} href={'google.com'} icon={'help'}>
      Help Link
    </Link>
    <Link {...args} href={TEST_EXTERNAL_LINK} disabled>
      Disabled link
    </Link>
  </div>
);
