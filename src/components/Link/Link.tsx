/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  align-items: center;
  line-height: 20px;
  text-decoration-line: underline;
  ${({ disabled, theme }) => {
    return {
      fontWeight: theme.typography.link.default.fontWeight,
      cursor: 'pointer',
      color: theme.semantic.color.content.link,

      '&:hover': {
        color: theme.semantic.color.content.linkHover,
      },
      '&:active': {
        color: theme.semantic.color.content.linkStrong,
      },
      '&:visted': {
        color: theme.semantic.color.content.linkStrong,
      },

      ...(disabled
        ? {
            pointerEvents: 'none',
            cursor: 'not-allowed',
            color: theme.semantic.color.content.disabled,

            '&:hover': {
              color: theme.semantic.color.content.disabled,
            },
          }
        : undefined),
    };
  }}
`;

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
};

const Link = ({ children, ...props }: LinkProps) => {
  ({ ...props });
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
