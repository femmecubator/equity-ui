import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle, { SectionTitleProps } from "../SectionTitle";

const meta: Meta<typeof SectionTitle> = {
    title: 'SectionTitle',
    component: SectionTitle,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio'},
        },
    },
};

export default meta;

export const Default: StoryObj<SectionTitleProps> = {
    args: {
        text: 'Section Title',
    },
};