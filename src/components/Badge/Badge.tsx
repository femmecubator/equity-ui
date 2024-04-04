import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { base } from '../../../tokens';

const SEVERITY_TO_BG_COLOR_MAPPING = {
  error: base.color.red50,
  success: base.color.green50,
  warning: base.color.yellow50,
  info: base.color.sky50,
} as const;

const SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING = {
  error: base.color.red15,
  success: base.color.green15,
  warning: base.color.yellow20,
  info: base.color.sky15,
} as const;

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
      semantic: { border },
    },
  }) =>
    `
    border-radius: ${border.radius.small};
    background-color: ${
      isStrong
        ? SEVERITY_TO_BG_COLOR_MAPPING[severity]
        : SEVERITY_TO_SUBTLE_BG_COLOR_MAPPING[severity]
    };
    color: ${
      severity === 'warning'
        ? base.color.gray90
        : isStrong
          ? base.color.white
          : base.color.gray90
    };
  `}
`;
export type BadgeProps = {
  children: ReactNode;
  severity: 'error' | 'success' | 'warning' | 'info';
  isStrong: boolean;
};

export default function Badge({
  severity = 'error',
  isStrong = false,
  children,
}: BadgeProps) {
  return (
    <StyledBadge severity={severity} isStrong={isStrong}>
      {children}
    </StyledBadge>
  );
}
