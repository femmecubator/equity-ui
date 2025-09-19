import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';

import Icon, { defaultIconSizes, DefaultIconSizes } from '../Icon';
import { iconList } from '../../../icons/icon-constant';
import { theme } from '../../../theme';

const iconOptions = [...iconList].sort();
const sizeOptions = Object.keys(defaultIconSizes) as DefaultIconSizes[];
const colorOptions = Object.keys(theme.prima.color.content);

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icons are visual elements used to convey meaning and enhance user interface clarity.',
      },
    },
  },
  argTypes: {
    name: {
      options: iconOptions,
      control: { type: 'select' },
      description: 'The name of the icon to display',
    },
    size: {
      options: [...sizeOptions, 32],
      control: { type: 'select' },
      description:
        'Size of the icon (predefined sizes: small=18px, large=24px, or custom number)',
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
      description: 'Color of the icon from theme colors',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Icon name="settings" />
      <span style={{ fontSize: '12px', color: '#828282' }}>
        name='settings'
      </span>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" size="small" />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          size='small' (18px)
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" size="large" />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          size='large' (24px)
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" size={32} />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          size=32 (custom value in px)
        </span>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons support predefined sizes: small (18px), large (24px), and custom numeric sizes.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" color="default" />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          color='default'
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" color="brand-01" />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          color='brand-01'
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon name="settings" color="brand-02" />
        <span style={{ fontSize: '12px', color: '#828282' }}>
          name='settings'
        </span>
        <span style={{ fontSize: '12px', color: '#828282' }}>
          color='brand-02'
        </span>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons can use theme colors for consistent styling across different states and contexts.',
      },
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  text-align: center;
  gap: 8px;
`;

const IconLabel = styled.span`
  font-size: 12px;
  color: #828282;
  word-break: break-word;
`;

export const AllIcons: Story = {
  render: () => (
    <Wrapper>
      {iconOptions.map((name) => (
        <IconContainer key={name}>
          <Icon name={name} />
          <IconLabel>{name}</IconLabel>
        </IconContainer>
      ))}
    </Wrapper>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Complete list of all available icons.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    name: 'settings',
    size: 'large',
    color: 'default',
  },
  argTypes: {
    name: {
      options: iconOptions,
      control: { type: 'select' },
    },
    size: {
      options: [...sizeOptions],
      control: { type: 'select' },
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different icon configurations.',
      },
    },
  },
};
