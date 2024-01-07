import React from 'react';
import type {
  Meta,
  // StoryObj
} from '@storybook/react';
import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
// type Story = StoryObj<typeof Button>;

export const Secondary = (args) => <Button {...args}>Hello</Button>;
// Basic.args = { children: 'Label' }

// export const Secondary = (args) => <Button {...args} />;
// export const Primary: Story = {
//   args: {
//     children: 'Button',
//     primary: true,
//     disabled: false,
//     size: 'small',
//     onClick: () => console.log('Button'),
//   },
// };
// export const Secondary: Story = {
//   args: {
//     children: 'Button',
//     primary: false,
//     disabled: false,
//     size: 'small',
//     onClick: () => console.log('Button'),
//   },
// };
