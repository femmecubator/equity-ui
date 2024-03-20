import type { Meta, StoryObj } from '@storybook/react';
import MenuItem, { MenuItemProps } from "../MenuItem";

const meta: Meta<typeof MenuItem> = {
    title: 'MenuItem',
    component: MenuItem,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio'},
        },
    },
};

export default meta;

export const Default: StoryObj<MenuItemProps> = {
    args: {
        text: 'Menu Item',
        icon: <span>🔗</span>,
    },
};


export const Disabled: StoryObj<MenuItemProps> = {
    args: {
        text: 'Menu Item',
        disabled: true,
    },
};

export const Hover: StoryObj<MenuItemProps> = {
    args: {
        text: 'Menu Item',
        icon: <span>🔗</span>,
    },
    parameters: {
        actions: {
            onHover: (args: MenuItemProps) => { console.log('hover', args)}
        }
    }
};

export const Focus: StoryObj<MenuItemProps> = {
    args: {
        text: 'Menu Item',
        icon: <span>🔗</span>,
    },
    parameters: {
        actions: {
            onFocus: (args: MenuItemProps) => { console.log('focus', args) }
        }
    }
};