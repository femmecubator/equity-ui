/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Icon } from '../Icon';
import { IconName } from '../../icons/icon-constant';

const StyledLink = styled('a')<LinkProps>`
  display: flex;
  align-items: center;
  line-height: 20px;
  ${({ disabled, theme, icon }) => {
    return {
      fontWeight: theme.typography.link.default.fontWeight,
      cursor: 'pointer',
      color: theme.semantic.color.content.link,
      textDecorationLine: icon ? 'none' : 'underline',
      '&:hover': {
        color: theme.semantic.color.content.linkHover,
      },
      '&:active': {
        color: theme.semantic.color.content.linkStrong,
      },
      '&:visited': {
        color: theme.semantic.color.content.linkHover,
      },
      ...(icon
        ? {
            border: 'solid 2px pink',
          }
        : undefined),

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
  }};
`;

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  icon?: IconName | '';
};

const Link = ({ children, icon = '', ...props }: LinkProps) => {
  ({ ...props });
  return (
    <StyledLink {...props}>
      {children}
      {icon && <Icon name={icon} />}
    </StyledLink>
  );
};

export default Link;
