import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <div>{children}</div>;
};

export default SectionTitle;
