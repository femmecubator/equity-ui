import { TransformValToUnit } from '../types';

const transformValueToUnit = (property: TransformValToUnit) => {
  const { fontSize, lineHeight } = property;
  return fontSize || lineHeight
    ? { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px` }
    : undefined;
};

export default transformValueToUnit;
