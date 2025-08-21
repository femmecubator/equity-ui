import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormField from '../FormField';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

// Default story
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value ?? '');
    return (
      <FormField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    value: 'Value',
  },
  parameters: {
    controls: { disable: true },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '300px',
      }}
    >
      <FormField label="Default" placeholder="Default state" />
      <FormField label="Required" placeholder="Required field" required />
      <FormField label="Loading" placeholder="Loading state" loading />
      <FormField label="Disabled" placeholder="Disabled state" disabled />
      <FormField label="Warning" placeholder="Warning state" warning />
      <FormField
        label="Warning Inline"
        placeholder="Warning inline variant"
        warningInline="This is a warning message."
      />
      <FormField label="Error" placeholder="Error state" error />
      <FormField
        label="Error Inline"
        placeholder="Error inline variant"
        errorInline="This is an error message."
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Playground story
export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: false,
    disabled: false,
    loading: false,
    warning: false,
    warningInline: '',
    error: false,
    errorInline: '',
    value: 'Value',
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value ?? '');
    React.useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);
    return (
      <FormField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
