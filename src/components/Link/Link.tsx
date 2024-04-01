import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { base } from '../../../tokens';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  align-items: center;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
  ${({
    theme: {
      semantic: { border },
    },
  }) =>
    `
        border-radius: ${border.radius.small};
        color: ${base.color.blue50};
        &:hover {
            color: ${base.color.blue70};
        };
        &:active {
            color: ${base.color.blue90};
        }
    `}
  ${({ disabled }) =>
    disabled &&
    `
        color: ${base.color.gray60};
        cursor: not-allowed;
        &:hover {
            box-shadow: none;
            color: ${base.color.gray60}
        }
        `}
`;

export type LinkProps = {
  children: ReactNode;
  disabled?: boolean;
};

export default function Link({ disabled, children }: LinkProps) {
  return <StyledLink disabled={disabled}>{children}</StyledLink>;
}
