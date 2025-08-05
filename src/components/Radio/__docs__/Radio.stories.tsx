import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio as RadioComponent, RadioProps } from '../index';

const meta: Meta<typeof RadioComponent> = {
  title: 'Components/Radio',
  component: RadioComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    info: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioComponent>;

// 1. Default
export const Default: Story = {
  args: {
    name: 'default-radio',
    value: 'default',
  },
  parameters: {
    controls: { disable: true },
  },
};

// 2. Normal variants (selected, disabled, error)
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <RadioComponent name="variants-default" value="default" />
        <span style={{ fontSize: '12px' }}>Default</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <RadioComponent
          name="variants-disabled"
          value="disabled"
          disabled
          defaultChecked={true}
        />
        <span style={{ fontSize: '12px' }}>Disabled</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <RadioComponent name="variants-error" value="error" error />
        <span style={{ fontSize: '12px' }}>Error</span>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 3. Label with info/required/both
export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioComponent
        name="labels-default"
        value="default"
        label="Default Label"
      />
      <RadioComponent
        name="labels-info"
        value="info"
        label="Label with Info"
        info
      />
      <RadioComponent
        name="labels-required"
        value="required"
        label="Label with Required"
        required
      />
      <RadioComponent
        name="labels-both"
        value="both"
        label="Label with Info + Required"
        info
        required
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 4. Group types
export const Groups: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string>('option1');
    const [horizontalValue, setHorizontalValue] =
      React.useState<string>('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h4>Vertical Group</h4>
          <RadioComponent.Group
            label="Label"
            name="vertical-group"
            value={verticalValue}
            onChange={setVerticalValue}
            orientation="vertical"
          >
            <RadioComponent value="option1" label="Option 1" />
            <RadioComponent value="option2" label="Option 2" />
            <RadioComponent value="option3" label="Option 3" />
            <RadioComponent value="option4" label="Option 4" />
          </RadioComponent.Group>
        </div>

        <div>
          <h4>Horizontal Group</h4>
          <RadioComponent.Group
            label="Label"
            name="horizontal-group"
            value={horizontalValue}
            onChange={setHorizontalValue}
            orientation="horizontal"
          >
            <RadioComponent value="option1" label="Option 1" />
            <RadioComponent value="option2" label="Option 2" />
            <RadioComponent value="option3" label="Option 3" />
            <RadioComponent value="option4" label="Option 4" />
          </RadioComponent.Group>
        </div>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};

// 5. Playground
export const Playground: Story = {
  args: {
    name: 'playground-radio',
    value: 'playground',
    label: 'Option 1',
    checked: true,
    required: false,
    info: false,
    disabled: false,
    error: false,
  },
};
