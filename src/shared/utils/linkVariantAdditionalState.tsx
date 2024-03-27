import type { Theme } from '@emotion/react';

const linkVariantAdditionalState = (theme: Theme) => ({
  ':hover': {
    color: theme.semantic.color.content.linkHover,
  },
  ':active': {
    color: theme.semantic.color.content.linkStrong,
  },
});

export default linkVariantAdditionalState;
