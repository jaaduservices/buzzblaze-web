import React from 'react';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    image,
    className = '',
    onClick,
    children,
}) => {
    const baseClasses = 'card card-hover';
    const combinedClasses = `${baseClasses} ${onClick ? 'cursor-pointer' : ''} ${className}`;

    return (
        <div className={combinedClasses} onClick={onClick}>
            {image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}

            {icon && (
                <div className="mb-4 flex items-center justify-center w-12 h-12 bg-netflix-500/10 text-netflix-500 rounded-lg">
                    {icon}
                </div>
            )}

            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">{description}</p>

            {children && (
                <div className="mt-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Card; 