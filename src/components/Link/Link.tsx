import styled from '@emotion/styled';
import { ReactNode } from 'react';
// import { base } from '../../../tokens';

const StyledLink = styled.div<LinkProps>`
  display: inline-block;
  align-items: center;
  ${({
    theme: {
      semantic: { border },
    },
  }) =>
    `
        border-radius: ${border.radius.small};
        `}
`;

export type LinkProps = {
  children: ReactNode;
};

export default function Link({ children }: LinkProps) {
  return <StyledLink>{children}</StyledLink>;
}
