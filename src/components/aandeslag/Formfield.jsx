import React from "react";
import "../../design/aandeslag-design/Aandeslag.scss";
import InputField from "../inputfield/InputField";
import Button from "../button/Button";

export default function Formfield(){
    return (
        <div className="form-field-container">
                <div className="heading"><h1>We helpen je graag verder.</h1></div>
                <form action="">
                <div className="info">
                <InputField title="Naam*" htmlFor="firstName" type="text" id="*"className="input-field"></InputField>
                <InputField title="Achternaam*" htmlFor="lastName" type="text" id="*" className="input-field"></InputField>
                <InputField title="Telefoonnummer" htmlFor="telefoonnummer" type="text" id="tel" className="input-field"></InputField>
                <InputField title="Email*" htmlFor="email" type="text" id="*" className="input-field"></InputField>
                </div>
                <InputField title="Bedrijfsnaam" htmlFor="company" type="text" id="company" className="company"></InputField> 
                <label htmlFor="message">Bericht</label> 
                <textarea class="wideInput" placeholder="type text here" id="message"></textarea>
                <Button title="Verzenden" className="btn" />
                </form>
        </div>
    )
}