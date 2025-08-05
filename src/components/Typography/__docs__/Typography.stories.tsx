import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography as TypographyComponent } from '../Typography';
import type { TypographyProps } from '../../../shared/types';

const meta: Meta<typeof TypographyComponent> = {
  title: 'Components/Typography',
  component: TypographyComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible typography component that provides consistent text styling with a variant + size API pattern.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to display',
    },
    variant: {
      control: 'select',
      options: ['display', 'headline', 'label', 'body', 'meta', 'link'],
      description: 'The type of text styling to apply',
    },
    size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8],
      description:
        'The size variant (available sizes: display 1-6, headline 1-8, others 1-4)',
    },
    color: {
      control: 'color',
      description: 'Custom color override',
    },
    css: {
      control: 'object',
      description: "Custom CSS styles using Emotion's css prop",
    },
    theme: {
      table: { disable: true },
    },
  },
  args: {
    children: 'Typography Text',
    variant: 'body',
    size: 2,
  },
};

export default meta;
type Story = StoryObj<TypographyProps>;

// Default story
export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

// Display variants
export const DisplayVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyComponent variant="display" size={1}>
        Display Size 1 (Extrabold 56px)
      </TypographyComponent>
      <TypographyComponent variant="display" size={2}>
        Display Size 2 (Extrabold 48px)
      </TypographyComponent>
      <TypographyComponent variant="display" size={3}>
        Display Size 3 (Extrabold 48px)
      </TypographyComponent>
      <TypographyComponent variant="display" size={4}>
        Display Size 4 (Extrabold 40px)
      </TypographyComponent>
      <TypographyComponent variant="display" size={5}>
        Display Size 5 (Extrabold 36px)
      </TypographyComponent>
      <TypographyComponent variant="display" size={6}>
        Display Size 6 (Extrabold 28px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Large type reserved for short stats or branded headings, appropriate for dashboards or marketing sections.',
      },
    },
  },
};

// Headline variants
export const HeadlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TypographyComponent variant="headline" size={1}>
        Headline Size 1 (Bold 36px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={2}>
        Headline Size 2 (Bold 32px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={3}>
        Headline Size 3 (Bold 24px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={4}>
        Headline Size 4 (Bold 20px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={5}>
        Headline Size 5 (Bold 20px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={6}>
        Headline Size 6 (Bold 18px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={7}>
        Headline Size 7 (Bold 18px)
      </TypographyComponent>
      <TypographyComponent variant="headline" size={8}>
        Headline Size 8 (Bold 16px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Large type reserved for short, important text or numerals, usually as a heading to the smaller text below. Use headlines to title pages or sections.',
      },
    },
  },
};

// Label variants
export const LabelVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <TypographyComponent variant="label" size={1}>
        Label Size 1 (Semibold 20px)
      </TypographyComponent>
      <TypographyComponent variant="label" size={2}>
        Label Size 2 (Semibold 16px)
      </TypographyComponent>
      <TypographyComponent variant="label" size={3}>
        Label Size 3 (Semibold 14px)
      </TypographyComponent>
      <TypographyComponent variant="label" size={4}>
        Label Size 4 (Semibold 12px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Small-sized type used for medium-emphasis text that is shorter in length.',
      },
    },
  },
};

// Body variants
export const BodyVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <TypographyComponent variant="body" size={1}>
        Body Size 1 (Regular 20px)
      </TypographyComponent>
      <TypographyComponent variant="body" size={2}>
        Body Size 2 (Regular 16px)
      </TypographyComponent>
      <TypographyComponent variant="body" size={3}>
        Body Size 3 (Regular 14px)
      </TypographyComponent>
      <TypographyComponent variant="body" size={4}>
        Body Size 4 (Regular 12px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Regular weighted type used for paragraph text or input text',
      },
    },
  },
};

// Meta variants
export const MetaVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <TypographyComponent variant="meta" size={1}>
        META SIZE 1 (Semibold 16PX)
      </TypographyComponent>
      <TypographyComponent variant="meta" size={2}>
        META SIZE 2 (Semibold 14PX)
      </TypographyComponent>
      <TypographyComponent variant="meta" size={3}>
        META SIZE 3 (Semibold 10PX)
      </TypographyComponent>
      <TypographyComponent variant="meta" size={4}>
        Meta Size 4 (Semibold 10px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Eyebrow type styles reserved for pre-headers and meta text.',
      },
    },
  },
};

// Link variants
export const LinkVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <TypographyComponent variant="link" size={1}>
        Link Size 1 (Semibold 20px)
      </TypographyComponent>
      <TypographyComponent variant="link" size={2}>
        Link Size 2 (Semibold 16px)
      </TypographyComponent>
      <TypographyComponent variant="link" size={3}>
        Link Size 3 (Semibold 14px)
      </TypographyComponent>
      <TypographyComponent variant="link" size={4}>
        Link Size 4 (Semibold 12px)
      </TypographyComponent>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Link variants used for interactive text.',
      },
    },
  },
};

// Playground story
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different Typography configurations. Use the controls panel to experiment with different variants, sizes, and colors.',
      },
    },
  },
};
