import type { Meta, StoryObj } from '@storybook/react';
import MenuItem, { MenuItemProps } from '../MenuItem';
import { DefaultIconSizes, defaultIconSizes } from '../../Icon/Icon';
import type { IconName } from '../../../icons/icon-constant';
import { EquityTheme } from '../../../theme';

type IconColor = keyof EquityTheme['semantic']['color']['content'];

const menuItemArgs = {
  text: 'Menu Item',
  iconName: 'link' as IconName,
  iconSize: 'small' as DefaultIconSizes,
  iconColor: 'default' as IconColor,
  disabled: false,
};

const meta: Meta<typeof MenuItem> = {
  title: 'Unsupported/MenuItem',
  component: MenuItem,
  argTypes: {
    iconSize: {
      control: 'select',
      options: Object.keys(defaultIconSizes),
    },
  },
};

export default meta;

export const Default: StoryObj<MenuItemProps> = {
  args: {
    ...menuItemArgs,
  },
};

export const Disabled: StoryObj<MenuItemProps> = {
  args: {
    ...menuItemArgs,
    disabled: true,
  },
};

export const Hover: StoryObj<MenuItemProps> = {
  args: {
    ...menuItemArgs,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: StoryObj<MenuItemProps> = {
  args: {
    ...menuItemArgs,
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const NoIcon: StoryObj<MenuItemProps> = {
  args: {
    ...menuItemArgs,
    noIcon: true,
  },
};
