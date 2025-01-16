import React from 'react';
import type { Meta } from '@storybook/react';
import Button from '../Button';
import Icon from '../../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Basic = (args) => (
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
