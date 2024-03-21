import React from 'react';
import styled from '@emotion/styled';

// Styled divider using styled-components for styling
const StyledDivider = styled.div`
  height: 1px;
  background-color: #d1d1d1;
  margin: 8px 0;
`;

export interface DividerProps {
  variant?: 'primary' | 'secondary';
}

const Divider: React.FC<DividerProps> = () => {
  return <StyledDivider />;
};

export default Divider;
