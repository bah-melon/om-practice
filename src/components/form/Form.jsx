import React from "react";
import '../../design/form-design/Form-design.scss'
import Banner from "../../assets/Banner.png";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";

export default function Form() {
  return (
    <div className="form-wrapper">
      <div className="heading">
        <h1>Het verhaal achter de Woonzorg Thuis app</h1>
        <p>Ontwikkeld door developers uit Noord-Macedonië</p>
      </div>
      <div className="form-container">
        <div className="banner">
          <img src={Banner} alt="Banner-Image" />
        </div>
        <div className="form">
             <form action="">
                <InputField title="Voorname" htmlFor="firstName" type="text" id="firstName"></InputField>
                <InputField title="Achternaam" htmlFor="lastName" type="text" id="lastName"></InputField>
                <InputField title="Email*" htmlFor="email" type="text" id="email"></InputField>
                <InputField title="Mobiel telefoonnummer (niet verplicht)" htmlFor="mobile" type="text" id="mobile"></InputField>  
                <InputField title="Naam onderneming (niet verplicht)" htmlFor="company" type="text" id="company"></InputField>
                <div class="contact-form-help-text">
                  <textarea class="wideInput" placeholder="type text here" id="cover-letter"></textarea>
               </div>
                <Button title="Sure let's go" className="btn" />
             </form>
        </div>
      </div>
    </div>
  );
}
