import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' },
  { value: 'option8', label: 'Option 8' },
  { value: 'option9', label: 'Option 9' },
  { value: 'option10', label: 'Option 10' },
];

export const Default: Story = {
  args: {
    label: 'Default Dropdown',
    placeholder: 'Select an option',
    options: sampleOptions,
    variant: 'single',
  },
  render: (args) => {
    const [value, setValue] = React.useState<string>('');
    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [nativeValue, setNativeValue] = React.useState<string>('');
    const [singleValue, setSingleValue] = React.useState<string>('');
    const [multiselectValue, setMultiselectValue] = React.useState<string[]>(
      []
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          width: '300px',
        }}
      >
        <Dropdown
          label="Native Dropdown"
          placeholder="Select an option"
          options={sampleOptions}
          variant="native"
          value={nativeValue}
          onChange={(e) => setNativeValue(e.target.value as string)}
        />
        <Dropdown
          label="Single Select Dropdown"
          placeholder="Select an option"
          options={sampleOptions}
          variant="single"
          value={singleValue}
          onChange={(e) => setSingleValue(e.target.value as string)}
        />
        <Dropdown
          label="Multiselect Dropdown"
          placeholder="Select multiple options"
          options={sampleOptions}
          variant="multiselect"
          value={multiselectValue}
          onChange={(e) => {
            const value = e.target.value;
            if (Array.isArray(value)) {
              setMultiselectValue(value);
            }
          }}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '300px',
      }}
    >
      <Dropdown
        label="Default"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
      />
      <Dropdown
        label="Required"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        required
      />
      <Dropdown
        label="Disabled"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        disabled
      />
      <Dropdown
        label="Loading"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        loading
      />
      <Dropdown
        label="Warning"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        warning
      />
      <Dropdown
        label="Warning Inline"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        warningInline="This is a warning message"
      />
      <Dropdown
        label="Error"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        error
      />
      <Dropdown
        label="Error Inline"
        placeholder="Select an option"
        options={sampleOptions}
        variant="single"
        errorInline="This is an error message"
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Dropdown Label',
    placeholder: 'Select an option',
    options: sampleOptions,
    variant: 'single',
    required: false,
    disabled: false,
    loading: false,
    warning: false,
    warningInline: '',
    error: false,
    errorInline: '',
    value: '',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['native', 'single', 'multiselect'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    warning: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    warningInline: {
      control: { type: 'text' },
    },
    errorInline: {
      control: { type: 'text' },
    },
  },
  render: (args) => {
    const [value, setValue] = React.useState<string | string[]>(
      args.variant === 'multiselect' ? [] : ''
    );

    React.useEffect(() => {
      setValue(args.variant === 'multiselect' ? [] : '');
    }, [args.variant]);

    return (
      <div style={{ width: '300px' }}>
        <Dropdown
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};
