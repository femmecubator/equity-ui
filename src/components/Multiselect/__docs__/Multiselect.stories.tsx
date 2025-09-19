import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Multiselect } from '../Multiselect';

const meta: Meta<typeof Multiselect> = {
  title: 'Components/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
    label: 'Default Multiselect',
    placeholder: 'Select options...',
    options: sampleOptions,
    value: [],
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => {
    const [value, setValue] = React.useState<string[]>(args.value || []);
    return (
      <div style={{ width: '300px' }}>
        <Multiselect
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [defaultValue, setDefaultValue] = React.useState<string[]>([]);
    const [requiredValue, setRequiredValue] = React.useState<string[]>([]);
    const [disabledValue, setDisabledValue] = React.useState<string[]>([]);
    const [loadingValue, setLoadingValue] = React.useState<string[]>([]);
    const [warningValue, setWarningValue] = React.useState<string[]>([]);
    const [warningInlineValue, setWarningInlineValue] = React.useState<
      string[]
    >([]);
    const [errorValue, setErrorValue] = React.useState<string[]>([]);
    const [errorInlineValue, setErrorInlineValue] = React.useState<string[]>(
      []
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '300px',
        }}
      >
        <Multiselect
          label="Default"
          placeholder="Select options..."
          options={sampleOptions}
          value={defaultValue}
          onChange={setDefaultValue}
        />
        <Multiselect
          label="Required"
          placeholder="Select options..."
          options={sampleOptions}
          value={requiredValue}
          onChange={setRequiredValue}
          required
        />
        <Multiselect
          label="Disabled"
          placeholder="Select options..."
          options={sampleOptions}
          value={disabledValue}
          onChange={setDisabledValue}
          disabled
        />
        <Multiselect
          label="Loading"
          placeholder="Select options..."
          options={sampleOptions}
          value={loadingValue}
          onChange={setLoadingValue}
          loading
        />
        <Multiselect
          label="Warning"
          placeholder="Select options..."
          options={sampleOptions}
          value={warningValue}
          onChange={setWarningValue}
          warning
        />
        <Multiselect
          label="Warning Inline"
          placeholder="Select options..."
          options={sampleOptions}
          value={warningInlineValue}
          onChange={setWarningInlineValue}
          warning
          warningInline="This is a warning message"
        />
        <Multiselect
          label="Error"
          placeholder="Select options..."
          options={sampleOptions}
          value={errorValue}
          onChange={setErrorValue}
          error
        />
        <Multiselect
          label="Error Inline"
          placeholder="Select options..."
          options={sampleOptions}
          value={errorInlineValue}
          onChange={setErrorInlineValue}
          error
          errorInline="This is an error message"
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    label: 'Playground Multiselect',
    placeholder: 'Select options...',
    options: sampleOptions,
    required: false,
    disabled: false,
    loading: false,
    warning: false,
    warningInline: '',
    error: false,
    errorInline: '',
    value: [],
  },
  argTypes: {
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
    const [value, setValue] = React.useState<string[]>(args.value || []);

    // Update value when args.value changes
    React.useEffect(() => {
      setValue(args.value || []);
    }, [args.value]);

    return (
      <div style={{ width: '300px' }}>
        <Multiselect
          {...args}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
    );
  },
};
