import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    controls: {
      disable: true,
    },
    docs: {
      description: {
        component: `
The Toggle component is a switch control that allows users to turn an option on or off.
It supports labels, required indicators, and info icons.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is checked/on',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the toggle',
    },
    required: {
      control: 'boolean',
      description: 'Whether the toggle is required (shows * indicator)',
    },
    info: {
      control: 'boolean',
      description: 'Whether to show info icon',
    },
    size: {
      control: 'select',
      options: ['small', 'tiny'],
      description: 'Size of the toggle switch',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories that need state management
const InteractiveToggle = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <Toggle
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

// 1. Default
export const Default: Story = {
  render: InteractiveToggle,
  args: {
    checked: false,
  },
};

// 2. Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InteractiveToggle checked={false} label="Default" />
      <Toggle checked={false} disabled label="Disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle component in different states: default and disabled.',
      },
    },
  },
};

// 3. Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InteractiveToggle size="small" label="Small" />
      <InteractiveToggle size="tiny" label="Tiny" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle component in different sizes: small and tiny.',
      },
    },
  },
};

// 4. With Labels
export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InteractiveToggle label="Default label" />
      <InteractiveToggle label="Label with info" info />
      <InteractiveToggle label="Label with required" required />
      <InteractiveToggle label="Label with info + required" info required />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Toggle component with different label configurations: default, with info icon, with required indicator, and both.',
      },
    },
  },
};

// 5. Playground
export const Playground: Story = {
  render: InteractiveToggle,
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    required: false,
    info: false,
    size: 'small',
  },
  parameters: {
    controls: {
      disable: false,
      exclude: ['error', 'onError'],
    },
    docs: {
      description: {
        story:
          'Interactive playground to test all Toggle component properties.',
      },
    },
  },
};
