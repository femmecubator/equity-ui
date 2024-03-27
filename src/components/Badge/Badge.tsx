import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { base } from '../../../tokens';

// color mapping key:value pair for strings to bg color
const SEVERITY_TO_BG_COLOR_MAPPING = {
  success: base.color.green50,
  error: base.color.red50,
  warning: base.color.yellow50,
  info: base.color.sky50,
} as const

const SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING = {
  success: base.color.green15,
  error: base.color.red15,
  warning: base.color.yellow20,
  info: base.color.sky15,
} as const

const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  align-items: center;
  padding: 0 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  gap: 10px;
  ${({
    severity,
    isStrong,
    theme: {
      semantic: { border }
    },
  }) =>
  // all the following code comes from semantic.ts file because we said theme: { semantic: {base} }
  // everything below here is meant to be dynamic
  `
    border-radius: ${border.radius.small};
    background-color: ${isStrong? SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING[severity] : SEVERITY_TO_BG_COLOR_MAPPING[severity]};
    color: ${ severity === 'warning' ? base.color.gray90 : isStrong? base.color.gray90 : base.color.white};
  `}
`;
export type BadgeProps = {
  children: ReactNode
  // severity is a prop we're taking
  // making severity optional so that the default is success
  severity: 'success' | 'error' | 'warning' | 'info';
  isStrong: boolean
}

// destructuring props to the specifics, and defining a default for severity, emphasis, etc
export default function Badge({severity = 'success', isStrong = false, children}: BadgeProps) {
  function registerClick() {
    console.log('clicked');
  }

  // adding in severity here, is how it'll access from the css section
  return <StyledBadge severity={severity} isStrong={isStrong} onClick={registerClick}>{children}</StyledBadge>;
}
