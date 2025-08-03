import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as CheckboxComponent, CheckboxProps } from '../Checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
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
    indeterminate: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

// 1. Default
export const Default: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
  },
};

// 2. Normal variants (selected, disabled, error, indeterminate)
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
        <CheckboxComponent />
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
        <CheckboxComponent disabled />
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
        <CheckboxComponent error />
        <span style={{ fontSize: '12px' }}>Error</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <CheckboxComponent indeterminate />
        <span style={{ fontSize: '12px' }}>Indeterminate</span>
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
      <CheckboxComponent label="Default Label" />
      <CheckboxComponent label="Label with Info" info />
      <CheckboxComponent label="Label with Required" required />
      <CheckboxComponent label="Label with Info + Required" info required />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 4. Group types
export const Groups: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string[]>([
      'option1',
    ]);
    const [horizontalValue, setHorizontalValue] = React.useState<string[]>([
      'option1',
    ]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h4>Vertical Group</h4>
          <CheckboxComponent.Group
            label="Label"
            value={verticalValue}
            onChange={setVerticalValue}
            orientation="vertical"
          >
            <CheckboxComponent value="option1" label="Option 1" />
            <CheckboxComponent value="option2" label="Option 2" />
            <CheckboxComponent value="option3" label="Option 3" />
            <CheckboxComponent value="option4" label="Option 4" />
          </CheckboxComponent.Group>
        </div>

        <div>
          <h4>Horizontal Group</h4>
          <CheckboxComponent.Group
            label="Label"
            value={horizontalValue}
            onChange={setHorizontalValue}
            orientation="horizontal"
          >
            <CheckboxComponent value="option1" label="Option 1" />
            <CheckboxComponent value="option2" label="Option 2" />
            <CheckboxComponent value="option3" label="Option 3" />
            <CheckboxComponent value="option4" label="Option 4" />
          </CheckboxComponent.Group>
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
    label: 'Option 1',
    defaultChecked: true,
    checked: true,
    required: false,
    info: false,
    disabled: false,
    error: false,
    indeterminate: false,
  },
};
