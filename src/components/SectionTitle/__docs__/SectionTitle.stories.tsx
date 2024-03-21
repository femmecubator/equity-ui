import React from 'react';
import type { Meta } from '@storybook/react';

import SectionTitle from '../SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'SectionTitle',
  component: SectionTitle,
  // argTypes: {
  //   variant: {
  //     options: ['primary', 'secondary'],
  //     control: { type: 'radio' },
  //   },
  // },
};

export default meta;

export const Basic = (args) => {
  return <SectionTitle {...args}>Section Title</SectionTitle>;
};
