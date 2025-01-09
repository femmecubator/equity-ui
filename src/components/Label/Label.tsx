import styled from '@emotion/styled';

const StyledLabel = styled.label<LabelProps>``;

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  input?: string;
};

const Label = (props: LabelProps) => {
  console.log(`From Label${props}`);
  return (
    <>
      <StyledLabel htmlFor={props.htmlFor}>{props.input}</StyledLabel>
    </>
  );
};

export default Label;
