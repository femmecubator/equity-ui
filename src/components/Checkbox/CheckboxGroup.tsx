import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledGroup>{children}</StyledGroup>;
};
