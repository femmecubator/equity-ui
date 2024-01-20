import { type SVGProps } from 'react';
import spriteHref from './sprite.svg';
import type { IconName } from '../../icons/icon-constant';

const defaultIconSizes = {
  small: 18,
  large: 24,
};

type DefaultIconSizes = keyof typeof defaultIconSizes;

const Icon = ({
  name,
  size = 'large',
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: DefaultIconSizes | number;
}) => {
  const actualSize = typeof size === 'string' ? defaultIconSizes[size] : size;

  return (
    <svg width={actualSize} height={actualSize} {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
};

export default Icon;
