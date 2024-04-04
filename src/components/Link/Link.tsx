import styled from '@emotion/styled';
import { ReactNode } from 'react';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  align-items: center;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
  color: #026fe4;
  ${({
    theme: {
      semantic: { color, spacing },
    },
  }) =>
    `
        padding: ${spacing.spacing2Xs}
        color: ${color.content.link};
        &:hover {
            color: ${color.content.linkHover};
        };
        &:active {
            color: ${color.content.linkStrong};
        }
    `}
  ${({
    disabled,
    theme: {
      semantic: { color },
    },
  }) =>
    disabled &&
    `
        color: ${color.content.disabled};
        cursor: not-allowed;
        &:hover {
            color: ${color.content.disabled}
        }
        > svg {
          color: ${color.content.disabled};
          background-color: ${color.bg.disabled}
          &:hover {
            box-shadow: none;
          }
        }
    `}
    ${({
    containsIcon,
    theme: {
      semantic: { border, spacing, color },
    },
  }) =>
    containsIcon &&
    `
    display: inline-flex;
    align-items: center;
    gap: ${spacing.spacing2Xs};
    > svg {
      padding: ${spacing.spacing2Xs};
      border-radius: ${border.radius.round};
      box-shadow: 0px 1px 3px 0px #33333333;
      &:hover {
        box-shadow: 0px 0px 0px 2px ${color.border.brandHover};
      }
      &:active {
        color: ${color.content.knockout};
        background-color: ${color.content.brand};
      }
    }
    `}
`;

export type LinkProps = {
  children: ReactNode;
  disabled?: boolean;
  containsIcon?: boolean;
};

export default function Link({ disabled, children, containsIcon }: LinkProps) {
  return (
    <StyledLink disabled={disabled} containsIcon={containsIcon}>
      {children}
    </StyledLink>
  );
}
