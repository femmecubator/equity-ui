import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

type SectionTitleProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const StyledSectionTitle = styled.h2`
  ${({
    theme: {
      typography: {
        title: {
          small: { fontWeight, fontSize, lineHeight, fontFamily },
        },
      },
      semantic: {
        color: {
          content: { default: defaultColor },
        },
      },
    },
  }) => `
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    color: ${defaultColor};
    font-family: ${fontFamily};
  `}
`;

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  return <StyledSectionTitle {...props}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
