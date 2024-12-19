import styled from '@emotion/styled';
import checkmark from './checkmark.svg';

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

      ...(error && {
        border: `2px solid ${theme.semantic.color.border.error}`,
      }),

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

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & { error?: boolean; status: 'error' | 'disabled' | 'focus' };

export const Checkbox = (props: CheckboxProps) => {
  // if there is a label render with label
  // if there is a color needed show with that color
  // is there a fallback>?
  // size option
  //
  console.log({ props });
  return (
    <>
      <StyledCheckbox type="checkbox" {...props} />
    </>
  );
};

// To create docs?
// Checkbox.prototype = {
//   label: 'label for Checkbox',
//   //   PropTypes.string,
//   backgroundColor: 'some variants of color',
//   //   PropTypes.string,
//   // size: PropTypes.oneOf(["sizes"]),
//   //   onClick: PropTypes.func,
// };

export default Checkbox;
