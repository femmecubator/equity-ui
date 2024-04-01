import type { Meta, StoryObj } from '@storybook/react';
import MenuItem, { MenuItemProps } from '../MenuItem';
import { DefaultIconSizes, defaultIconSizes } from '../../Icon/Icon';
import type { IconName } from '../../../icons/icon-constant';
import { EquityTheme } from '../../../theme';

type IconColor = keyof EquityTheme['semantic']['color']['content'];

function createMenuItemArgs({
  text = 'MenuItem',
  iconName = 'link' as IconName,
  iconSize = 'small' as DefaultIconSizes,
  iconColor = 'default' as IconColor,
  disabled = false,
} = {}) {
  return { text, iconName, iconSize, iconColor, disabled };
}

const meta: Meta<typeof MenuItem> = {
  title: 'MenuItem',
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
  args: createMenuItemArgs(),
};

export const Disabled: StoryObj<MenuItemProps> = {
  args: createMenuItemArgs({ disabled: true }),
};

export const Hover: StoryObj<MenuItemProps> = {
  args: createMenuItemArgs(),
  parameters: {
    actions: {
      onHover: (args: MenuItemProps) => {
        console.log('hover', args);
      },
    },
  },
};

export const Focus: StoryObj<MenuItemProps> = {
  args: createMenuItemArgs(),
  parameters: {
    actions: {
      onFocus: (args: MenuItemProps) => {
        console.log('focus', args);
      },
    },
  },
};

export const NoIcon: StoryObj<MenuItemProps> = {
  args: createMenuItemArgs({ iconName: undefined }),
};
