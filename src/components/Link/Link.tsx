import styled from '@emotion/styled';
import { ReactNode } from 'react';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  align-items: center;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
  cursor: pointer;
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
            box-shadow: none;
            color: ${color.content.disabled}
        }
    `}
    ${({
    containsIcon,
    theme: {
      semantic: { spacing },
    },
  }) =>
    containsIcon &&
    `
    padding: 0px;
    borderRadius: 50%;
    display: flex;
    align-items: center;
    gap: ${spacing.spacing2Xs};
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
