import { base } from './base';

export const theme = {
  color: {
    // Primary colors
    primary: base.color.blue50,
    primaryLight: base.color.blue05,
    primaryHover: base.color.blue25,
    primaryStrong: base.color.blue90,

    // Neutral colors
    background: base.color.white,
    backgroundStrong: base.color.gray70,
    backgroundSubtle: base.color.gray10,
    backgroundDisabled: base.color.gray30,

    // Text colors
    text: base.color.gray90,
    textSubtle: base.color.gray80,
    textDisabled: base.color.gray60,
    textInverse: base.color.white,

    // Status colors
    success: base.color.green50,
    successLight: base.color.green15,
    successDark: base.color.green90,
    
    error: base.color.red50,
    errorLight: base.color.red15,
    errorDark: base.color.red90,
    
    warning: base.color.yellow50,
    warningLight: base.color.yellow20,
    warningDark: base.color.yellow95,
    
    info: base.color.sky50,
    infoLight: base.color.sky15,
    infoDark: base.color.sky90,

    // Border colors
    border: base.color.gray60,
    borderStrong: base.color.gray80,
    borderSubtle: base.color.gray30,

    // Special colors
    transparent: base.color.transparent,
    active: base.color.gray90,
    logo: base.color.wesparkleRed,
  },

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