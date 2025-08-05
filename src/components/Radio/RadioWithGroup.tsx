// This file sets up the Radio compound component
import { BaseRadio } from './Radio';
import { RadioGroup } from './RadioGroup';

// Create compound component
const Radio = BaseRadio as typeof BaseRadio & {
  Group: typeof RadioGroup;
};

// Attach Group to Radio
Radio.Group = RadioGroup;

export { Radio };
export default Radio;
