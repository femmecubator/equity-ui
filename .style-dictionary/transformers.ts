import { camelCase } from 'lodash-es';

export const hexColorTransform = {
  name: 'fix/hexColor',
  type: 'value',
  matcher: function (token) {
    return token.type === 'color';
  },

  transform: function (token) {
    if (token.value.length > 7) {
      return token.value.slice(0, -2);
    }
    return token.value;
  },
} as const;

export const camelCaseTransform = {
  name: 'name/camel',
  type: 'name',
  transform: function (token) {
    return camelCase(token.name);
  },
} as const;

export const pxNumberTransform = {
  name: 'px/number',
  type: 'value',
  matcher: function (token) {
    const isNumber = typeof token.value === 'number';
    const isSpacingOrBorder =
      token.attributes?.item === 'spacing' ||
      token.attributes?.item === 'border';
    const notColor = token.type !== 'color';

    return isNumber && isSpacingOrBorder && notColor;
  },
  transform: function (token) {
    return `${token.value}px`;
  },
} as const;
