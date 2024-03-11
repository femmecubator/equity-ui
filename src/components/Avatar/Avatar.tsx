import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useState,
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

type AvatarProps = {
  alt: string;
  src: string;
  size: AvatarSizeValueProps;
};

const AvatarContainer = styled.div<{ size: AvatarSizeValueProps }>`
  border-radius: 50%;
  ${({
    size,
    theme: {
      base: { color, spacing },
    },
  }) => `
    width: ${defaultAvatarSizes[size]}px;
    height: ${defaultAvatarSizes[size]}px;
    border: ${
      size === AvatarSize.SMALL ? '2px' : spacing.spacing4
    } solid ${transparentize(0.4, color.blue25)};
    padding: ${size === AvatarSize.SMALL ? '2px' : '6px'};
  `}
`;

const StyledFallback = styled.div<{ size: AvatarSizeValueProps }>`
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
  font-size: ${
    size === AvatarSize.SMALL ? spacing.spacing16 : spacing.spacing56
  };

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
> = ({ alt, src, size = AvatarSize.MEDIUM, children }, ref) => {
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
