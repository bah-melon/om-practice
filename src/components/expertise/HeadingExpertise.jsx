import React from "react";
import '../../design/expertise-design/Expertise.scss'

export default function HeadingExpertise({preheading , heading ,subheading , paragraph ,className} ){
    return(
        <div className={className}>
            <p>{preheading}</p>
            <p>{heading}</p>
            <p>{subheading}</p>
            <p>{paragraph}</p>
        </div>
    )
}