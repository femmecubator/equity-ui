import { base } from './base';

export const darkTheme = {
  color: {
    // Primary colors
    primary: base.color.blue50,
    primaryLight: base.color.blue70, // Adjusted for dark mode visibility
    primaryHover: base.color.blue60,
    primaryStrong: base.color.blue35,

    // Neutral colors - Inverted for dark mode
    background: base.color.gray90,
    backgroundStrong: base.color.gray90, // Adjusted from gray95
    backgroundSubtle: base.color.gray80,
    backgroundDisabled: base.color.gray70,

    // Text colors - Inverted for dark mode
    text: base.color.gray10,
    textSubtle: base.color.gray30,
    textDisabled: base.color.gray50,
    textInverse: base.color.gray90,

    // Status colors - Adjusted for dark mode visibility
    success: base.color.green50,
    successLight: base.color.green70,
    successDark: base.color.green15,
    
    error: base.color.red50,
    errorLight: base.color.red70,
    errorDark: base.color.red15,
    
    warning: base.color.yellow50,
    warningLight: base.color.yellow70,
    warningDark: base.color.yellow20, // Adjusted from yellow15
    
    info: base.color.sky50,
    infoLight: base.color.sky70,
    infoDark: base.color.sky15,

    // Border colors - Adjusted for dark mode
    border: base.color.gray60,
    borderStrong: base.color.gray40,
    borderSubtle: base.color.gray70,

    // Special colors
    transparent: base.color.transparent,
    active: base.color.gray10,
    logo: base.color.wesparkleRed,
  },

  // Border radiuses remain the same in dark mode
  border: {
    radius: {
      none: base.border.radius.radius0,
      small: base.border.radius.radius4,
      medium: base.border.radius.radius16,
      large: base.border.radius.radius60,
      pill: base.border.radius.radius900,
      round: base.border.radius.radius900,
    },
    width: {
      none: base.border.width.stroke0,
      thin: base.border.width.stroke1,
      regular: base.border.width.stroke2,
      medium: base.border.width.stroke4,
      thick: base.border.width.stroke6,
      focus: base.border.width.stroke2,
    },
  },

  // Spacing remains the same in dark mode
  spacing: {
    xxxs: base.spacing.spacing4,
    xxs: base.spacing.spacing8,
    xs: base.spacing.spacing12,
    sm: base.spacing.spacing16,
    md: base.spacing.spacing20,
    lg: base.spacing.spacing24,
    xl: base.spacing.spacing32,
    xxl: base.spacing.spacing48,
    xxxl: base.spacing.spacing56,
    xxxxl: base.spacing.spacing64,
  },
}; 