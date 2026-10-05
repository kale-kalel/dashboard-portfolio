import React from 'react';

const ExperienceCard = ({
    children,
    onClick,
    className = '',
    style = {},
}) => {
    return (
        <div
            className={`dash-card ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </div>
    );
};

export default ExperienceCard;