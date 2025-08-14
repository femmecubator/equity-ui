import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a versatile interactive element that supports multiple variants, sizes, and states.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant of the button',
    },
    color: {
      control: { type: 'select' },
      options: ['purple', 'blue'],
      description: 'Brand color theme to apply',
    },
    shape: {
      control: { type: 'select' },
      options: ['pill', 'square'],
      description: 'Border radius style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'tiny'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    iconStart: {
      control: { type: 'select' },
      options: [
        undefined,
        'statistics',
        'money',
        'globe',
        'article',
        'complete',
        'add',
      ],
      description: 'Icon to display at the start of the button',
    },
    iconEnd: {
      control: { type: 'select' },
      options: [
        undefined,
        'statistics',
        'money',
        'globe',
        'article',
        'complete',
        'add',
      ],
      description: 'Icon to display at the end of the button',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    color: 'purple',
    shape: 'pill',
    size: 'medium',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 1. Default
export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

// 2. Variants with disabled states
export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p
          style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 'bold' }}
        >
          Default
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
      <div>
        <p
          style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 'bold' }}
        >
          Disabled
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="tertiary" disabled>
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
};

// 3. Sizes
export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
      <Button size="tiny">Tiny</Button>
    </div>
  ),
};

// 4. Shapes
export const Shapes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button shape="pill">Pill</Button>
      <Button shape="square">Square</Button>
    </div>
  ),
};

// 5. Colors
export const Colors: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button color="purple">Purple Color</Button>
        <Button color="blue">Blue Color</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="secondary" color="purple">
          Purple Color
        </Button>
        <Button variant="secondary" color="blue">
          Blue Color
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="tertiary" color="purple">
          Purple Color
        </Button>
        <Button variant="tertiary" color="blue">
          Blue Color
        </Button>
      </div>
    </div>
  ),
};

// 6. With Icons
export const WithIcons: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button iconStart="statistics">Left Icon</Button>
      <Button iconEnd="complete">Right Icon</Button>
      <Button iconStart="money" iconEnd="globe">
        Both Icons
      </Button>
    </div>
  ),
};

// 7. Playground (Interactive)
export const Playground: Story = {
  // Uses the default args from meta
};
