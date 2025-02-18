import React from 'react';
import type { Meta } from '@storybook/react';
import Link, { LinkProps } from '../Link';
import { iconList } from '../../../icons/icon-constant';
import { TEST_EXTERNAL_LINK } from '../mocks';

// type linkIconList = iconList & {icon: }

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
      options: iconList.map((icon) => icon).push(''),
      control: { type: 'select' },
    },
  },
};

export default meta;

// type Story = StoryObj<typeof Link>;

// export const Basic: Story = {
//   args: {
//     children: 'Link text here',
//     href: TEST_EXTERNAL_LINK,
//     target: '_blank',
//     icon: '', // No icon by default
//     disabled: false,
//   },
// };

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
    <Link {...args} href={TEST_EXTERNAL_LINK} icon={''}>
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
