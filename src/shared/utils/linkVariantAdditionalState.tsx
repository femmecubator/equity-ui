import type { Theme } from '@emotion/react';

const linkVariantAdditionalState = (theme: Theme) => ({
  ':hover': {
    color: theme.prima.color.content['link-hover'],
  },
  ':active': {
    color: theme.prima.color.content['link-active'],
  },
});

export default linkVariantAdditionalState;
