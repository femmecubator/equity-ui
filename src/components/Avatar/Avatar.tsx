import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
} from 'react';
// import { transparentize } from 'polished';
// import styled from '@emotion/styled';

export type AvatarProps = {
};

const Avatar: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<AvatarProps>
> = ({ }, ref) => {

  return (
    <div ref={ref}>Avatar</div>
  );
};

export default forwardRef(Avatar);
