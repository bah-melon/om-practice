import React from "react";
import "../../design/aandeslag-design/Aandeslag.scss";
import Image from "../../assets/aandeslag/orange-head.webp";

export default function Title(){
    const text = {
        heading : "Laten we samen digitale successen boeken!",
        paragraph : "OrangeMelons heeft beschikking tot hoogopgeleid en ambitieus IT-talent uit Noord-Macedonië. Wij hebben toegang tot de beste universiteiten van het land en door onze eigen academie kunnen wij voorzien in de groeiende vraag aan IT-personeel in Europa en met name Nederland."
    }

    return(
        <div className="text-container">
            <div className="text-wrapper">
            <h1>{text.heading}</h1>
            <p>{text.paragraph}</p>
            </div>
            <img src={Image} alt="Orange-head" />
        </div>
    )
}