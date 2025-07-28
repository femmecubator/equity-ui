import { type SVGProps, useMemo } from 'react';
import spriteHref from '../../icons/sprite.svg';
import type { IconName } from '../../icons/icon-constant';
import { useTheme } from '@emotion/react';
import { EquityTheme } from '../../theme';

export const defaultIconSizes = {
  small: 18,
  large: 24,
};

export type DefaultIconSizes = keyof typeof defaultIconSizes;

const Icon = ({
  name,
  size = 'large',
  color = 'default',
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: DefaultIconSizes | number;
  color?: keyof EquityTheme['semantic']['color']['content'];
}) => {
  const theme = useTheme();

  const actualSize = useMemo(() => {
    return typeof size === 'string' ? defaultIconSizes[size] : size;
  }, [size]);

  const actualColor = useMemo(() => {
    return theme.semantic?.color?.content[color] || color;
  }, [color, theme.semantic?.color?.content]);

  return (
    <svg
      width={actualSize}
      height={actualSize}
      color={actualColor}
      style={{ display: 'block', verticalAlign: 'middle' }}
      {...props}
    >
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
};

export default Icon;
