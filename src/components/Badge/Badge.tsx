import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { base } from '../../../tokens';

// color mapping key:value pair for strings to bg color
const SEVERITY_TO_BG_COLOR_MAPPING = {
  success: base.color.green50,
  error: base.color.red50,
  warning: base.color.yellow50,
  info: base.color.sky50,
}

const SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING = {
  success: base.color.green15,
  error: base.color.red15,
  warning: base.color.yellow20,
  info: base.color.sky15,
}

// adding <BadgeProps> to tell it that the props are the same from Badge (ie. emphasis, text, etc)
// CSS written in styled.div<BadgeProps>``</BadgeProps> is meant to be "default" hardcoded styles
const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  ${({
    severity,
    isSubtle,
    theme: {
      semantic: { border }
    },
  }) =>
  // all the following code comes from semantic.ts file because we said theme: { semantic: {base} }
  // everything below here is meant to be dynamic
  `
    border-radius: ${border.radius.small};
    background-color: ${isSubtle? SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING[severity] : SEVERITY_TO_BG_COLOR_MAPPING[severity]};
  `}
`;
interface BadgeProps {
  children: ReactNode
  // adding a ? before the colon makes it optional
  // emphasis?: 'subtle' | 'strong';
  // severity is a prop we're taking
  // making severity optional so that the default is success
  severity: 'success' | 'error' | 'warning' | 'info';
  isSubtle: boolean
}

// destructuring props to the specifics, and defining a default for severity, emphasis, etc
export default function Badge({severity = 'success', isSubtle = false, children}: BadgeProps) {
  function registerClick() {
    console.log('clicked');
  }

  // adding in severity here, is how it'll access from the css section
  // ok I've added the severity, it works, but now I'm hard coding the boolean.. doesn't seem to be working correctly
  return <StyledBadge severity={severity} isSubtle={true} onClick={registerClick}>{children}Success</StyledBadge>;
}
