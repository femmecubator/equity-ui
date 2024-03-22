import styled from '@emotion/styled';
import { ReactNode } from 'react';

// adding <BadgeProps> to tell it that the props are the same from Badge (ie. emphasis, text, etc)
// CSS written in styled.div<BadgeProps>``</BadgeProps> is meant to be "default" hardcoded styles
const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  padding: 5px;
  background: #D4EFDF;
  ${({
    // add in styling
    variant,
    theme: {
      // semantic: { border, spacing, color }
      semantic: { border }
    },
  }) =>
  // all the following code comes from semantic.ts file because we said theme: { semantic: {base} }
  // everything below here is meant to be dynamic
  `
    border-radius: ${border.radius.small};
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
