import { SIZES } from '../constants';

export type ComponentSize = (typeof SIZES)[keyof typeof SIZES];
