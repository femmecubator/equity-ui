import React, { HTMLAttributes } from 'react';
import { Typography } from '../Typography/Typography';

type SectionTitleProps = HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  return (
    <Typography variant="headline" size={3} css={{ margin: 0 }} {...props}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
