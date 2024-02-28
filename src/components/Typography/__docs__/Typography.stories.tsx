import React from 'react';
import Typography, { TypographyProps } from '../Typography';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
};

export default meta;

const Template = (args: TypographyProps) => (
  <Typography {...args}>Once upon a time...</Typography>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

export const BodyText = Template.bind({});
BodyText.args = {
  variant: 'body1',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  variant: 'body2',
  color: 'purple',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  variant: 'label3',
  css: {
    fontStyle: 'italic',
    textDecoration: 'underline',
  },
};
