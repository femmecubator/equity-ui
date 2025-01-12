/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  align-items: center;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled, theme }) =>
    disabled
      ? theme.semantic.color.content.disabled
      : theme.semantic.color.content.link};
  &:hover {
    color: ${({ disabled, theme }) =>
      disabled
        ? theme.semantic.color.content.disabled
        : theme.semantic.color.content.linkHover};
  }
  &:active {
    color: ${({ disabled, theme }) =>
      disabled
        ? theme.semantic.color.content.disabled
        : theme.semantic.color.content.linkStrong};
  }
  > svg {
    color: ${({ disabled, theme }) =>
      disabled
        ? theme.semantic.color.content.disabled
        : theme.semantic.color.content.default};
    background-color: ${({ disabled, theme }) =>
      disabled
        ? theme.semantic.color.bg.disabled
        : theme.semantic.color.bg.default}
    &:hover {
      box-shadow: 
        ${({ disabled, theme }) =>
          disabled
            ? theme.semantic.color.border.disabled
            : `0px 0px 0px 0px 2px green`};
    }
    &:active {
      color: ${({ disabled, theme }) =>
        disabled
          ? theme.semantic.color.content.disabled
          : theme.semantic.color.content.knockout};
      background-color: ${({ disabled, theme }) =>
        disabled
          ? theme.semantic.color.bg.default
          : theme.semantic.color.content.brand};
    }
  }
  ${({
    containsIcon,
    theme: {
      semantic: { border, spacing },
    },
  }) =>
    containsIcon &&
    `
    display: inline-flex;
    align-items: center;
    gap: ${spacing.spacing2Xs};
    > svg {
      align-items: center;
      display: flex;
      padding: ${spacing.spacing2Xs};
      border-radius: ${border.radius.round};
      box-shadow: 0px 1px 3px 0px #33333333;
      &:hover {
        box-shadow: 0px 0px 0px 2px #81B7F2;
      }
    }
    `}
`;

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  containsIcon?: boolean;
};

export default function Link({ children, containsIcon, ...props }: LinkProps) {
  return (
    <StyledLink {...props} containsIcon={containsIcon}>
      {children}
    </StyledLink>
  );
}
