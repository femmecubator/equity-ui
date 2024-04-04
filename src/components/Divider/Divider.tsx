import React from 'react';
import styled from '@emotion/styled';

const StyledDivider = styled.div`
  height: 1px;
  background-color: #d1d1d1;
  margin: 8px 0;
`;

const Divider = (props: React.HTMLAttributes<HTMLElement>) => {
  return <StyledDivider role="separator" {...props} />;
};

export default Divider;
