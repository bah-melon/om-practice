import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
    <div className='section-header'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
);

export default SectionHeader;
