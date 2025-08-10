import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagProps } from '../Tag';

const meta: Meta<TagProps> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Tag component is used to display labels, categories, or metadata in a compact format. 
It comes in two variants (with or without removable button) and three sizes (tiny, small, medium).

## Features
- Optional removable button (with close icon)
- Three sizes: tiny, small, medium
- Four states: default, hover, active, disabled
- Keyboard navigation support
- Accessible with proper ARIA attributes
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium'],
      description: 'Size of the tag',
    },
    withRemovableButton: {
      control: 'boolean',
      description: 'Whether to show a removable button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled',
    },
    active: {
      control: 'boolean',
      description: 'Whether the tag is in active state',
    },
    children: {
      control: 'text',
      description: 'The content of the tag',
    },
  },
  args: {
    children: 'Sample Tag',
    size: 'small',
    withRemovableButton: false,
    disabled: false,
    active: false,
  },
};

export default meta;
type Story = StoryObj<TagProps>;

// Default story
export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag size="tiny">Tiny Tag</Tag>
      <Tag size="small">Small Tag</Tag>
      <Tag size="medium">Medium Tag</Tag>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Tag component in different sizes: tiny, small (default), and medium.',
      },
    },
  },
};

// With and without remove button
export const RemoveButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag withRemovableButton={false}>Without Remove</Tag>
      <Tag
        withRemovableButton={true}
        onRemove={() => console.log('Tag removed')}
      >
        With Remove
      </Tag>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Tag component with and without removable button.',
      },
    },
  },
};

// All combinations
export const AllCombinations: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, minmax(0, max-content))',
        gap: '16px',
        padding: '20px',
        justifyContent: 'center',
      }}
    >
      {/* Tiny without remove button */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Tiny
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Tag size="tiny">Default</Tag>
          <Tag size="tiny" active>
            Active
          </Tag>
          <Tag size="tiny" disabled>
            Disabled
          </Tag>
        </div>
      </div>

      {/* Tiny with remove button */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Tiny + Remove
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Tag
            size="tiny"
            withRemovableButton
            onRemove={() => console.log('Removed')}
          >
            Default
          </Tag>
          <Tag
            size="tiny"
            withRemovableButton
            active
            onRemove={() => console.log('Removed')}
          >
            Active
          </Tag>
          <Tag
            size="tiny"
            withRemovableButton
            disabled
            onRemove={() => console.log('Removed')}
          >
            Disabled
          </Tag>
        </div>
      </div>

      {/* Small without remove button */}
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
          <Tag size="small">Default</Tag>
          <Tag size="small" active>
            Active
          </Tag>
          <Tag size="small" disabled>
            Disabled
          </Tag>
        </div>
      </div>

      {/* Small with remove button */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Small + Remove
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Tag
            size="small"
            withRemovableButton
            onRemove={() => console.log('Removed')}
          >
            Default
          </Tag>
          <Tag
            size="small"
            withRemovableButton
            active
            onRemove={() => console.log('Removed')}
          >
            Active
          </Tag>
          <Tag
            size="small"
            withRemovableButton
            disabled
            onRemove={() => console.log('Removed')}
          >
            Disabled
          </Tag>
        </div>
      </div>

      {/* Medium without remove button */}
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
          <Tag size="medium">Default</Tag>
          <Tag size="medium" active>
            Active
          </Tag>
          <Tag size="medium" disabled>
            Disabled
          </Tag>
        </div>
      </div>

      {/* Medium with remove button */}
      <div>
        <h4
          style={{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Medium + Remove
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Tag
            size="medium"
            withRemovableButton
            onRemove={() => console.log('Removed')}
          >
            Default
          </Tag>
          <Tag
            size="medium"
            withRemovableButton
            active
            onRemove={() => console.log('Removed')}
          >
            Active
          </Tag>
          <Tag
            size="medium"
            withRemovableButton
            disabled
            onRemove={() => console.log('Removed')}
          >
            Disabled
          </Tag>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Complete matrix showing all possible combinations of sizes, states, and remove button variants.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Playground Tag',
    size: 'small',
    withRemovableButton: true,
    disabled: false,
    active: false,
    onClick: () => console.log('Tag clicked'),
    onRemove: () => console.log('Tag removed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different tag configurations.',
      },
    },
  },
};
