import React from 'react';
import styled from '@emotion/styled';

export type TabProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

const StyledTab = styled.div<TabProps>`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 43px;
  padding: 12px var(--spacing-spacing-s, 16px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${({ isActive }) =>
    `
      font-weight: ${isActive === true ? '600' : '400'};
      line-height: ${isActive === true ? '22px' : '28px'}; 
     `}
`;

function Tab() {
  return <StyledTab>tab</StyledTab>;
}

export default Tab;

/*
the component should have a label
tab groups should have set amount of tab
active tabs should have the horizontal blue line according to the figma specs
tab component should follow all the style specs defined in figma
should have unit test that would test if the component is mounting successfully, test for the label, # of tabs within the tab group, active status, default status
should have a storybook
*/
