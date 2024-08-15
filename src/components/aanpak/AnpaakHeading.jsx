import React from "react";
import Button from "../button/Button";
import '../../design/aanpak-design/Aanpak.scss';
import Img from "../../assets/aanpak/aanpak-image.jpg";

export default function AnpaakHeading(){
    return(
        <div className="anpaak-heading">
            <div className="heading-text">
                <h1>Onze aanpak.</h1>
                <p>We horen graag je idee, waar je tegenaan loopt en wat het is waarmee wij jullie kunnen helpen om het proces verder op gang te brengen. Dit kan met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel met een strategische samenwerking van (on)bepaalde tijd. We zetten de basis, gaan aan de slag en zetten de juiste Melonhead op de juiste plek.</p>
                <Button className={"btn"} title={"Lees meer"}/>
            </div>
            <div className="anpaak-image">
                <img src={Img} alt="aanpak-image" />
            </div>
        </div>
    )
}