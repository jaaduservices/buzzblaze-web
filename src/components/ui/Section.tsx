import React from 'react';
import type { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({
    id,
    className = '',
    children,
}) => {
    const baseClasses = 'section-padding';
    const combinedClasses = `${baseClasses} ${className}`;

    return (
        <section id={id} className={combinedClasses}>
            {children}
        </section>
    );
};

export default Section; 