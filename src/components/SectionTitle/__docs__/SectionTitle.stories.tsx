import React from 'react';
import type { Meta } from '@storybook/react';

import SectionTitle from '../SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Unsupported/SectionTitle',
  component: SectionTitle,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Basic = {
  args: {
    children: 'Section Title',
  },
  render: (args) => <SectionTitle {...args} />,
};
