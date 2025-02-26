import styled from '@emotion/styled';

const StyledLabel = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  ${({
    theme: {
      semantic: {
        color: { content },
      },
    },
    error,
    disabled,
    checked,
  }) => {
    return {
      ...(error
        ? {
            color: content.errorIcon,
          }
        : null),

      ...(checked
        ? {
            color: content.default,
          }
        : null),

      ...(disabled
        ? {
            color: content.disabled,
          }
        : null),
    };
  }};
`;

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  error?: boolean;
  disabled?: boolean;
  checked?: boolean;
};

const Label = ({ children, ...rest }: LabelProps) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
