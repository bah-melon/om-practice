import React from "react";
import { Link } from "react-router-dom";

export default function OpenPosition({position, location, backgroundColor, color}){
    return(
        <Link to={"/vacancies"}>
        <div className="open-position" style={{backgroundColor: backgroundColor, color: color}}>
            <p>{position}</p>
            <small style={{color: color}}>{location}</small>
        </div>
        </Link>
    )
}