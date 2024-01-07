import React from 'react';
import type { Meta } from '@storybook/react';
import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = (args) => (
  <Button {...args} onClick={() => console.log('You clicked me!')}>
    Hello
  </Button>
);
export const Disabled = (args) => (
  <Button {...args} disabled>
    Hello
  </Button>
);
