import React from "react";
import "../../design/aandeslag-design/Aandeslag.scss";

export default function Card({heading , subheading , paragraph }){
    return(
        <div className="card-container">
            <div className="card-wrapper">
                <div className="text">
                <h1>{heading}</h1>
                </div>
                <div className="text">
                    <h2>{subheading}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}