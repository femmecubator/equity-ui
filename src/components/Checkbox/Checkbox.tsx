import styled from '@emotion/styled';
import checkmark from './checkmark.svg';
import Label from '../Label';

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
      border: '2px solid',
      borderColor: theme.semantic.color.border.default,
      borderRadius: theme.semantic.border.radius.small,

      ...(error
        ? {
            borderColor: theme.semantic.color.border.error,
          }
        : undefined),

      '&:checked': {
        background: theme.semantic.color.bg.brand,
        borderColor: theme.semantic.color.border.default,
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
        borderColor: theme.semantic.color.border.active,
      },

      '&:disabled': {
        borderColor: theme.semantic.color.border.default,
        background: theme.semantic.color.bg.disabled,
      },
    };
  }};
`;

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'role'
> & { error?: boolean; label?: string };

export const Checkbox = (props: CheckboxProps) => {
  if (!props.label) {
    return <StyledCheckbox role="checkbox" type="checkbox" {...props} />;
  }
  return (
    <Label
      error={props.error}
      disabled={props.disabled}
      checked={props.disabled}
    >
      <StyledCheckbox role="checkbox" type="checkbox" {...props} />
      {props.label}
    </Label>
  );
};

export default Checkbox;
