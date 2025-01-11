import styled from '@emotion/styled';
import checkmark from './checkmark.svg';
import Label from '../Label';
import { CheckboxGroup } from './CheckboxGroup';

const StyledCheckbox = styled.input<CheckboxProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;

  ${({ theme, error }) => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '22px',
      width: '22px',
      border: `2px solid ${theme.semantic.color.border.default}`,
      borderRadius: theme.semantic.border.radius.small,

      ...(error
        ? {
            border: `2px solid ${theme.semantic.color.border.error}`,
          }
        : undefined),

      '&:checked': {
        background: theme.semantic.color.bg.brand,
        border: `2px solid ${theme.semantic.color.border.default}`,
        '&:after': {
          content: "''",
          background: 'white',
          '-webkit-mask': `url(${checkmark})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          height: '100%',
          width: '100%',
        },
      },

      '&:focus': {
        border: `2px solid ${theme.semantic.color.border.active}`,
      },

      '&:disabled': {
        background: theme.semantic.color.bg.disabled,
      },
    };
  }};
`;

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & { error?: boolean; label?: string };

export const Checkbox = (props: CheckboxProps) => {
  if (!props.label) {
    return <StyledCheckbox type="checkbox" {...props} />;
  }
  return (
    <CheckboxGroup>
      <StyledCheckbox type="checkbox" {...props} />

      <Label
        htmlFor={props.id}
        error={props.error}
        disabled={props.disabled}
        checked={props.disabled}
      >
        {props.label}
      </Label>
    </CheckboxGroup>
  );
};

export default Checkbox;
