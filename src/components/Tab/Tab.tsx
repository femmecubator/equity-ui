// import React, { MouseEventHandler } from 'react';
// // import styled from '@emotion/styled';

// export type TabProps = {
//   children: React.ReactNode;
//   variant?: 'default' | 'active';
//   disabled?: boolean;
//   onClick?: MouseEventHandler; //blue underline?
// }

//variables to define the defualt tab and active tab
// Define variants
// const tabVariant = {
//   default: {
//     label: 'montserrat-regular-16',
//     color: 'color-content-default',
//   },
//   active: {
//     label: 'montserrat-semibold-16',
//     color: 'color-content-active',
//   },
// };

// const StyledTab = styled.div<TabProps>`
// //adding styling here
// `

function Tab() {
  return <div>Tab</div>;
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
