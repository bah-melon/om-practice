import React from "react";
import InputField from "../inputfield/InputField";
import Button from "../button/Button";


export default function FormApplication(){
    return(
        <div className="form-container">
            <form action="">
                <div className="info">
                <InputField title="Naam*" htmlFor="firstName" type="text" id="*"className="input-field"></InputField>
                <InputField title="Achternaam*" htmlFor="lastName" type="text" id="*" className="input-field"></InputField>
                <InputField title="Telefoonnummer" htmlFor="telefoonnummer" type="text" id="tel" className="input-field"></InputField>
                <InputField title="Email*" htmlFor="email" type="text" id="*" className="input-field"></InputField>
                </div>
                <InputField title="Stad" htmlFor="stad" type="text" id="stad" className="stad"></InputField> 
                <InputField title="Land" htmlFor="land" type="text" id="land" className="land"></InputField> 
                <input type="file" id="cvFile" name="filename"></input>
                <label htmlFor="message">Bericht</label> 
                <textarea class="wideInput" placeholder="type text here" id="message"></textarea>
                <Button title="Verzenden" className="btn" />
                </form>
        </div>
    )
}