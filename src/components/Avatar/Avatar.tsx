import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
} from 'react';
import { transparentize } from 'polished';
import styled from '@emotion/styled';

const AvatarSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

type SizeTypeProps = keyof typeof AvatarSize;
type AvatarSizeValueProps = (typeof AvatarSize)[SizeTypeProps];
type DefaultAvatarSize = {
  [DefaultSize in AvatarSizeValueProps]: number;
};
const defaultAvatarSizes: DefaultAvatarSize = {
  small: 32,
  medium: 115,
  large: 150,
};

export type AvatarProps = {
};

const AvatarContainer = styled.div<{ size: AvatarSizeValueProps }>`
  // write your styles here
  ${({
  size,
  theme: {
    base: { color, spacing },
  },
}) => `
    border: 2px solid ${transparentize(0.4, color.blue25)};
  `}
`;

const StyledAvatarImage = styled.img`
`;

const Avatar: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<AvatarProps>
> = ({ }, ref) => {

  return (
    <AvatarContainer ref={ref}>
      <StyledAvatarImage />
    </AvatarContainer>
  );
};

export default forwardRef(Avatar);
