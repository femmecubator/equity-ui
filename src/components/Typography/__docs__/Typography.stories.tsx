import React from 'react';
import { Typography as TypographyComponent } from '../Typography';
import { Meta } from '@storybook/react';

const meta: Meta<typeof TypographyComponent> = {
  title: 'Typography',
  component: TypographyComponent,
};

export default meta;

const Template = () => {
  return (
    <div>
      <TypographyComponent variant="h1">
        H1 Heading (Bold 36px)
      </TypographyComponent>
      <TypographyComponent variant="h2">
        H2 Heading (Bold 28px)
      </TypographyComponent>
      <TypographyComponent variant="h3">
        H3 Heading (Bold 24px)
      </TypographyComponent>
      <TypographyComponent variant="h4">
        H4 Heading (Semibold 20px)
      </TypographyComponent>
      <TypographyComponent variant="h5">
        H5 Heading (Semibold 16px)
      </TypographyComponent>
      <TypographyComponent variant="h6">
        H6 Heading (Semibold 14px)
      </TypographyComponent>
      <TypographyComponent variant="title1">
        Title Large (Bold 24px)
      </TypographyComponent>
      <TypographyComponent variant="title2">
        Title Default (Bold 20px)
      </TypographyComponent>
      <TypographyComponent variant="title3">
        Title Small (Bold 16px)
      </TypographyComponent>
      <TypographyComponent variant="body1">
        Body Large (Regular 20px)
      </TypographyComponent>
      <TypographyComponent variant="body2">
        Body Default (Regular 16px)
      </TypographyComponent>
      <TypographyComponent variant="body3">
        Body Small (Regular 14px)
      </TypographyComponent>
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
        <TypographyComponent variant="link1">
          Link Large (Semibold 20px)
        </TypographyComponent>
        <TypographyComponent variant="link2">
          Link Default (Semibold 16px)
        </TypographyComponent>
        <TypographyComponent variant="link3">
          Link Small (Semibold 14px)
        </TypographyComponent>
      </div>
      <TypographyComponent variant="label1">
        Label Large (SemiBold 20px)
      </TypographyComponent>
      <TypographyComponent variant="label2">
        Label Default (SemiBold 16px)
      </TypographyComponent>
      <TypographyComponent variant="label3">
        Label Small (Semibold 14px)
      </TypographyComponent>
    </div>
  );
};

export const Typography = Template.bind({});
Typography.args = {};
