import React from "react";

export default function OpenPosition({position, location, backgroundColor, color}){
    return(
        <div className="open-position" style={{backgroundColor: backgroundColor, color: color}}>
            <p>{position}</p>
            <small style={{color: color}}>{location}</small>
        </div>
        
    )
}