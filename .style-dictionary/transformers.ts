import { camelCase } from 'lodash-es';

export const hexColorTransform = {
  name: 'fix/hexColor',
  type: 'value',
  matcher: function (token) {
    return token?.attributes?.item === 'color';
  },
  transformer: function (token) {
    if (token.value.length > 7) {
      return token.value.slice(0, -2);
    }
  },
} as const;

export const camelCaseTransform = {
  name: 'name/camel',
  type: 'name',
  transformer: function (token) {
    return camelCase(token.name);
  },
} as const;

export const pxNumberTransform = {
  name: 'px/number',
  type: 'value',
  matcher: function (token) {
    return typeof token.value === 'number';
  },
  transformer: function (token) {
    return `${token.value}px`;
  },
} as const;
