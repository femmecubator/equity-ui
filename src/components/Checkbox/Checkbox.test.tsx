import { describe, it, test } from 'vitest';
// import { screen } from '@testing-library/react';
import Checkbox from '.';
import contextRender from '../../shared/utils/contextRender';
import { CheckboxProps } from './Checkbox';

test('Checkbox Component', () => {
  const renderComponent = (props: CheckboxProps) => {
    return contextRender(<Checkbox {...props} />);
  };

  describe('Rendering primary Checkbox', () => {
    it('Checkbox should render', () => {
      const { getByRole } = renderComponent({
        id: 'Primary Checkbox',
        role: 'input',
      });

      console.log('STARTING THE TEST');
      console.log('CHECKBOX', { getByRole });
    });
  });
});
