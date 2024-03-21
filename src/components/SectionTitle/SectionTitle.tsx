import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

type SectionTitleProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const StyledSectionTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  ${({
    theme: {
      semantic: { color },
    },
  }) =>
    ` 
      color: ${color.content.default};
  `}
`;

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  return <StyledSectionTitle {...props}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
