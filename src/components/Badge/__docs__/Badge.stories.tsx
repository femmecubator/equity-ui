import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge, { type BadgeProps } from '../Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile badge component for displaying status indicators with optional icons and different sizes.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the badge',
    },
    status: {
      control: 'select',
      options: ['error', 'success', 'warning', 'info'],
      description: 'The status variant that determines color scheme',
      defaultValue: 'info',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Size variant of the badge',
      defaultValue: 'medium',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to display a status icon',
      defaultValue: false,
    },
  },
  args: {
    children: 'Badge Text',
    status: 'info',
    size: 'medium',
    icon: false,
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

// Default story
export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

// Status variants
export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge status="info">Info</Badge>
      <Badge status="success">Success</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="error">Error</Badge>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Different status variants with their respective color schemes and icons.',
      },
    },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge size="medium" status="info">
        Medium Badge
      </Badge>
      <Badge size="small" status="info">
        Small Badge
      </Badge>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Badge component in different sizes: medium (default) and small.',
      },
    },
  },
};

// With and without icons
export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge icon={true} status="success">
        With Icon
      </Badge>
      <Badge icon={false} status="success">
        Without Icon
      </Badge>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Badge component with and without status icons.',
      },
    },
  },
};

// Complete matrix - all combinations
export const AllCombinations: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, max-content))',
        gap: '16px',
        padding: '20px',
        justifyContent: 'center',
      }}
    >
      {/* Medium size without icons */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Medium
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Badge status="info" size="medium" icon={false}>
            Info
          </Badge>
          <Badge status="success" size="medium" icon={false}>
            Success
          </Badge>
          <Badge status="warning" size="medium" icon={false}>
            Warning
          </Badge>
          <Badge status="error" size="medium" icon={false}>
            Error
          </Badge>
        </div>
      </div>

      {/* Medium size with icons */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Medium + Icons
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Badge status="info" size="medium" icon={true}>
            Info
          </Badge>
          <Badge status="success" size="medium" icon={true}>
            Success
          </Badge>
          <Badge status="warning" size="medium" icon={true}>
            Warning
          </Badge>
          <Badge status="error" size="medium" icon={true}>
            Error
          </Badge>
        </div>
      </div>

      {/* Small size without icons */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Small
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Badge status="info" size="small" icon={false}>
            Info
          </Badge>
          <Badge status="success" size="small" icon={false}>
            Success
          </Badge>
          <Badge status="warning" size="small" icon={false}>
            Warning
          </Badge>
          <Badge status="error" size="small" icon={false}>
            Error
          </Badge>
        </div>
      </div>

      {/* Small size with icons */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Small + Icons
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Badge status="info" size="small" icon={true}>
            Info
          </Badge>
          <Badge status="success" size="small" icon={true}>
            Success
          </Badge>
          <Badge status="warning" size="small" icon={true}>
            Warning
          </Badge>
          <Badge status="error" size="small" icon={true}>
            Error
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Complete matrix showing all possible combinations of status, size, and icon variants.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Customizable Badge',
    status: 'info',
    size: 'medium',
    icon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different badge configurations.',
      },
    },
  },
};
