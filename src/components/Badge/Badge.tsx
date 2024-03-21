import styled from '@emotion/styled';
import { ReactNode } from 'react';

// adding <BadgeProps> to tell it that the props are the same from Badge (ie. emphasis, text, etc)
const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  padding: 5px;
  border-radius: 8px;
  background: #D4EFDF;
  ${({
    // add in styling

  }) =>
  `
  
  `}
`;
interface BadgeProps {
  children: ReactNode
  // adding a ? before the colon makes it optional
  emphasis?: 'default' | 'strong';
}

export default function Badge(props: BadgeProps) {
  function registerClick() {
    console.log('clicked');
  }

  return <StyledBadge onClick={registerClick}>{props.children}</StyledBadge>;
}