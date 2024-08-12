import React from "react";
import { Link } from "react-router-dom";

export default function OpenPosition({ position, location, backgroundColor, color, id }) {
    return (
        <Link to={`/vacancies/${id}`} style={{ textDecoration: "none", fontWeight: "600" }}>
            <div className="open-position" style={{ backgroundColor: backgroundColor, color: color }}>
                <p>{position}</p>
                <small style={{ color: color }}>{location}</small>
            </div>
        </Link>
    );
}
