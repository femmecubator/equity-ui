import React from 'react';
import styled from '@emotion/styled';

export type TabProps = {
  children: () => React.ReactNode;
  isActive?: boolean;
};

const StyledTabItem = styled.div<TabProps>`
  ${({ theme, isActive }) => `
    display: inline-flex;
    text-align: center;
    font-size: ${theme.typography.body.default.fontSize}px;
    font-style: normal;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 44px;
    padding: 12px;
    gap: 10px;
    font-weight: ${
      isActive === true
        ? '600'
        : `${theme.typography.body.default.fontWeight}`
    };
    line-height: ${
      isActive === true
        ? '22px'
        : `${theme.typography.body.default.lineHeight}`
    }; 
    border-bottom: ${isActive == true ? '2px solid #026FE4' : undefined}
`}
`;

function TabGroup({ isActive = false }) {
  return <StyledTabItem isActive={isActive}>tab</StyledTabItem>;
}

export default TabGroup;

/*
+the component should have a label
tab groups should have set amount of tab
+active tabs should have the horizontal blue line according to the figma specs
+tab component should follow all the style specs defined in figma
should have unit test that would test if the component is mounting successfully, test for the label, # of tabs within the tab group, active status, default status
+should have a storybook

tab can be clicked 
*/
