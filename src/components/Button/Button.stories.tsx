import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    containsIcon: {
      control: 'boolean',
      description: 'Whether the button contains only an icon',
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    containsIcon: true,
    children: '🔍',
  },
};

// Story that shows all button variants side by side
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button containsIcon>🔍</Button>
    </div>
  ),
}; 