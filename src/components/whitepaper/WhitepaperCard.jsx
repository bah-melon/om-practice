import React from 'react';

const WhitepaperCard = ({ title, subtitle, image, imgWidth, imgHeight }) => (
    <div className="card">
        <img src={image} alt="" height={imgHeight} width={imgWidth} />
        <div className="card-caption">
            <small>{subtitle}</small>
            <p>{title}</p>
        </div>
    </div>
);

export default WhitepaperCard;
