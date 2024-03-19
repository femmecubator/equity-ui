import styled from '@emotion/styled';

const StyledBadge = styled.div`
  border: 1px solid red;
  display: inline-block;
  padding: 5px;
`;
interface BadgeProps {
  text: string;
  color: 'default' | 'strong';
}

export default function Badge(props: BadgeProps) {
  function registerClick() {
    console.log('clicked');
  }

  return <StyledBadge onClick={registerClick}>{props.text}</StyledBadge>;
}
