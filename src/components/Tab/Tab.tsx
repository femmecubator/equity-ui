import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

export type TabVariant = {
  default: {
    label: string;
    color: string;
  };
  active: {
    label: string;
    color: string;
  };
};

export type TabProps = {
  variant?: TabVariant;
  disabled?: boolean;
  onClick?: MouseEventHandler;
};

const newTabVariant: TabVariant = {
  default: {
    label: 'montserrat-regular-16',
    color: 'color-content-default',
  },
  active: {
    label: 'montserrat-regular-16',
    color: 'color-content-active',
  },
};

const StyledTab = styled.div<TabProps>`
  position: relative;
  border: none;
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
`;

function Tab() {
  return (
    <StyledTab variant={newTabVariant} disabled={false} onClick={() => {}}>
      write something
    </StyledTab>
  );
}

export default Tab;

/*
create two tabs one Default another Active

the component should have a label
tab groups should have set amount of tab
active tabs should have the horizontal blue line according to the figma specs
tab component should follow all the style specs defined in figma
should have unit test that would test if the component is mounting successfully, test for the label, # of tabs within the tab group, active status, default status
+should have a storybook
*/
