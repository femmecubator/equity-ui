import React from 'react';
import type { Meta } from '@storybook/react';
import Button from '../Button';
import Icon from '../../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary'],
      control: { type: 'radio' },
    },
  },
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
export const WithIcon = (args) => (
  <Button {...args} containsIcon>
    <Icon name="share" size="small" />
  </Button>
);
