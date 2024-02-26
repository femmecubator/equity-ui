import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useState,
} from 'react';
import { transparentize } from 'polished';
import styled from '@emotion/styled';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';

const defaultAvatarSizes = {
  small: 32,
  medium: 115,
  large: 150,
};

type sizeType = typeof SMALL | typeof MEDIUM | typeof LARGE;
type AvatarProps = {
  alt: string;
  src: string;
  size: sizeType;
};

const AvatarContainer = styled.div<{ size: sizeType }>`
  border-radius: 50%;
  ${({
    size,
    theme: {
      base: { color, spacing },
    },
  }) => `
    width: ${defaultAvatarSizes[size]}px;
    height: ${defaultAvatarSizes[size]}px;
    border: ${size === SMALL ? '2px' : spacing.spacing4} solid ${transparentize(
      0.4,
      color.blue25
    )};
    padding: ${size === SMALL ? '2px' : '6px'};
  `}
`;

const StyledFallback = styled.div<{ size: sizeType }>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  ${({
    size,
    theme: {
      base: { spacing, color },
    },
  }) => `
    background: ${color.blue25};
    color: ${color.blue70};
  font-size: ${size === SMALL ? spacing.spacing16 : spacing.spacing56};

  `}
`;

const StyledAvatarImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar: ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<AvatarProps>
> = ({ alt, src, size = MEDIUM, children }, ref) => {
  const [hasImgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };
  const fallbackContent = children || alt[0]?.toUpperCase() || '';

  return (
    <AvatarContainer size={size} ref={ref}>
      {hasImgError ? (
        <StyledFallback size={size}>{fallbackContent}</StyledFallback>
      ) : (
        <StyledAvatarImage src={src} alt={alt} onError={handleImgError} />
      )}
    </AvatarContainer>
  );
};

export default forwardRef(Avatar);
