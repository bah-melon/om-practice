import React from 'react';

const SectionHeader = ({ title, subtitle, className }) => (
    <div className={className}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
);

export default SectionHeader;
