import React from 'react';
import styled from '@emotion/styled';

// Styled divider using styled-components for styling
const StyledDivider = styled.div`
  height: 1px;
  background-color: #d1d1d1;
  margin: 8px 0;
`;

//Using React.HTMLAttributes<HTMLElement> to accept any valid HTML attribute for a div
const Divider = (props: React.HTMLAttributes<HTMLElement>) => {
  return <StyledDivider {...props} />;
};

export default Divider;
