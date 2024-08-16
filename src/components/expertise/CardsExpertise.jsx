import React from "react";
import Pointer from "../../assets/path.webp";
import "../../design/expertise-design/Expertise.scss"

export default function CardsExpertise({image ,paragraph , paragraphTitle , color }){
    return(
        <div className="cards-expertise">
            <div className="card" style={color}>

                <div className="image">
                <img src={image} alt="Image" />
                </div>
                <div className="text">
                <p>{paragraphTitle}</p>
                <p>{paragraph}</p>
                <img src={Pointer} alt="Path-image" />
                </div>
            </div>
        </div>
    )
}