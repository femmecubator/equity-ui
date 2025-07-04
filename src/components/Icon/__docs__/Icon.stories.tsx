import React from 'react';
import type { Meta } from '@storybook/react';
import styled from '@emotion/styled';

import Icon, { defaultIconSizes, DefaultIconSizes } from '../Icon';
import { iconList } from '../../../icons/icon-constant';
import { ThemeProvider } from '../../Theme/ThemeProvider';

const iconOptions = [...iconList].sort();
const sizeOptions = Object.keys(defaultIconSizes);

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};

export default meta;

export const Basic = (args) => <Icon {...args} />;
Basic.args = { name: iconOptions[0] };
Basic.argTypes = {
  name: {
    options: iconOptions,
    control: { type: 'select' },
  },
  size: {
    options: sizeOptions,
    control: { type: 'radio' },
  },
  color: {
    options: ['light', 'dark'],
    control: { type: 'select' },
  },
};


const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  margin: 24px;
`;

const SizeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px;
  gap: 6px;
`;

export const Labels = () => (
  <ThemeProvider>
    {iconOptions.map((name) => (
      <IconContainer key={name}>
        <SizeOptionsContainer>
          {sizeOptions.map((option) => {
            const sizeOption = option as DefaultIconSizes;
            return <Icon key={option} name={name} size={sizeOption} />;
          })}
        </SizeOptionsContainer>
        <span>{name}</span>
      </IconContainer>
    ))}
  </ThemeProvider>
);

export const NoLabels = () => (
  <ThemeProvider>
    {iconOptions.map((name) => (
      <IconContainer key={name}>
        <SizeOptionsContainer>
          {sizeOptions.map((option) => {
            const sizeOption = option as DefaultIconSizes;
            return <Icon key={option} name={name} size={sizeOption} />;
          })}
        </SizeOptionsContainer>
      </IconContainer>
    ))}
  </ThemeProvider>
);
