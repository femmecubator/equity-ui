import type { Meta, StoryObj } from '@storybook/react';
import MenuItem, { MenuItemProps } from '../MenuItem';
import { defaultIconSizes } from '../../Icon/Icon';

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
  args: {
    text: 'Menu Item',
    iconName: 'link',
    iconSize: 'small',
    iconColor: 'default',
  },
};

export const Disabled: StoryObj<MenuItemProps> = {
  args: {
    text: 'Menu Item',
    disabled: true,
    iconName: 'link',
    iconSize: 'small',
    iconColor: 'default',
  },
};

export const Hover: StoryObj<MenuItemProps> = {
  args: {
    text: 'Menu Item',
    iconName: 'link',
    iconSize: 'small',
    iconColor: 'default',
  },
  parameters: {
    actions: {
      onHover: (args: MenuItemProps) => {
        console.log('hover', args);
      },
    },
  },
};

export const Focus: StoryObj<MenuItemProps> = {
  args: {
    text: 'Menu Item',
    iconName: 'link',
    iconSize: 'small',
    iconColor: 'default',
  },
  parameters: {
    actions: {
      onFocus: (args: MenuItemProps) => {
        console.log('focus', args);
      },
    },
  },
};

export const NoIcon: StoryObj<MenuItemProps> = {
  args: {
    text: 'Menu Item Without Icon',
  },
};
