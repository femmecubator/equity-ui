import React from 'react';
import type { Meta } from '@storybook/react';

import Icon, { defaultIconSizes } from '../Icon';
import { iconList } from '../../../icons/icon-constant';

const sortedIconList = [...iconList].sort();

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: sortedIconList,
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(defaultIconSizes),
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Basic = (args) => <Icon {...args} />;
Basic.args = { name: sortedIconList[0] };
