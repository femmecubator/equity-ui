import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { css } from '@emotion/react';

/** @description: Workshop Topics:
 *  1. Importance of DS in engineering:
 *     - Challenges that I've experienced in building a MF Arch. with > 1 DS
 *     - Starting projects without a DS
 *  2. Common UI Patterns in Component Libraries and Applying Tokens:
 *     - Child Pass through
 *     - Forward Ref
 *     - Props spreading
 *        a.) ComponentPropsWithoutRef
 *        b.) ComponentPropsWithRef
 *     - Opinionated default
 *  3. How to contribute in Equity-UI repo:
 *     - PR and Code Review Process
 *     - SemVer
 *     - Publishing to NPM
 *
 */

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'titlel'
  | 'title2'
  | 'title3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'link1'
  | 'link2'
  | 'link3';

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TypographyVariant;
  component?: keyof JSX.IntrinsicElements;
  color?: string;
  css?: CSSObject;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body2',
  children,
  component: Component = 'div',
  color,
  css: cssOveride,
  ...props
}) => {
  const TypographyRoot = styled.div`
    ${({ theme }) => css`
      font-family: ${theme.typography.body.default.fontFamily};
      color: ${color ? color : theme.semantic.color.content.default};
      letter-spacing: ${theme.typography.body.default.letterSpacing}px;
      text-align: left;
      font-weight: ${theme.typography.body.default.fontWeight};
    `}

    ${() => {
      switch (variant) {
        case 'h1':
          return ({ theme }) => css`
            font-size: ${theme.typography.heading.h1.fontSize}px;
            line-height: ${theme.typography.heading.h1.lineHeight}px;
          `;
        case 'h2':
          return css`
            font-size: 28px;
            line-height: 36px;
          `;
        case 'h3':
          return css`
            font-size: 24px;
            line-height: 34px;
          `;
        case 'h4':
          return css`
            font-size: 21px;
            font-weight: 600;
            line-height: 28px;
          `;
        case 'h5':
          return css`
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
          `;
        case 'h6':
          return css`
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          `;
        case 'titlel':
          return css`
            font-size: 24px;
            line-height: 32px;
          `;
        case 'title2':
          return css`
            font-size: 20px;
            line-height: 22px;
          `;
        case 'title3':
          return css`
            font-size: 18px;
            line-height: 22px;
          `;
        case 'label1':
          return css`
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
          `;
        case 'label2':
          return css`
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
          `;
        case 'label3':
          return css`
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          `;
        case 'link1':
          return css`
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            color: ${color};
          `;
        case 'link2':
          return css`
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            color: ${color};
          `;
        case 'link3':
          return css`
            font-size: 16px;
            line-height: 20px;
            color: ${color};
          `;
        case 'body1':
          return css`
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
          `;
        case 'body3':
          return css`
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
          `;
        case 'body2':
        default:
          return css`
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
          `;
      }
    }}
  `;

  return (
    <TypographyRoot as={Component} color={color} css={cssOveride} {...props}>
      {children}
    </TypographyRoot>
  );
};

export { Typography };
