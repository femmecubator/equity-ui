import React from 'react';

export interface SectionTitleProps {
    text: string;
    variant?: 'primary' | 'secondary'
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return <h2 className='section-title'>{text}</h2>;
};

export default SectionTitle;