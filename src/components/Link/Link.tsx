/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { IconName } from '../../icons/icon-constant';

const StyledLink = styled('a')<LinkProps>`
  display: flex;
  align-items: center;
  line-height: 20px;
  ${({ disabled, theme, icon }) => {
    console.log('icon', icon, disabled);
    return {
      fontWeight: theme.typography.link.default.fontWeight,
      cursor: 'pointer',
      color: theme.semantic.color.content.link,
      textDecorationLine: icon ? 'none' : 'underline',

      '&:hover': {
        color: theme.semantic.color.content.linkHover,
        '>svg': {
          color: theme.semantic.color.content.linkHover,
        },
      },
      '&:active': {
        color: theme.semantic.color.content.linkStrong,
        '>svg': {
          color: theme.semantic.color.content.linkStrong,
        },
      },
      '&:visited': {
        color: theme.semantic.color.content.linkHover,
        svg: {
          color: theme.semantic.color.content.linkHover,
        },
      },

      ...(disabled
        ? {
            pointerEvents: 'none',
            cursor: 'not-allowed',
            color: theme.semantic.color.content.disabled,

            '&:hover': {
              color: theme.semantic.color.content.disabled,
            },
            '&:visited': {
              color: theme.semantic.color.content.disabled,
            },
          }
        : undefined),

      svg: {
        marginLeft: '4px',
        ...(disabled && { color: theme.semantic.color.content.disabled }),
      },
    };
  }};
`;

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  icon?: IconName | undefined;
};

const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <StyledLink {...rest}>
      <span>{children}</span>
      {rest.icon && (
        <span style={{ display: 'flex' }}>
          <Icon name={rest.icon} />
        </span>
      )}
    </StyledLink>
  );
};

export default Link;
