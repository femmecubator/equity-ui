import React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { css, useTheme } from '@emotion/react';

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
  const theme = useTheme();
  const { content } = theme.semantic.color;
  /** @todo: replace below properties when typography token is ready */
  const TypographyRoot = styled.div`
    ${({ theme }) => css`
      font-family: ${theme.typography.body.default.fontFamily};
      color: ${color ? color : content.default};
      letter-spacing: ${theme.typography.body.default.letterSpacing}px;
      text-align: left;
      font-weight: ${theme.typography.body.default.fontWeight};
    `}

    ${() => {
      switch (variant) {
        case 'h1':
          return css`
            font-size: 36px;
            line-height: 44px;
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
            color: ${color ? color : content.link};
          `;
        case 'link2':
          return css`
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            color: ${color ? color : content.link};
          `;
        case 'link3':
          return css`
            font-size: 16px;
            line-height: 20px;
            color: ${color ? color : content.link};
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
