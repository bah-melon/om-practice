import React from "react";
import '../../design/form-design/Form-design.scss'
import Banner from "../../assets/Banner.png";
import Button from "../button/Button";

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
                <label htmlFor="firstName">Voorname</label>
                <input type="text" for="firstName" />
                <label htmlFor="lastName">Achternaam</label>
                <input type="text" for="lastName" />
                <label htmlFor="email">Email*</label>
                <input type="text" for="email" />
                <label htmlFor="mobile">Mobiel telefoonnummer (niet verplicht)</label>
                <input type="text" for="mobile" />
                <label htmlFor="company">Naam onderneming (niet verplicht)</label>
                <input type="text" for="company" />
                <label htmlFor="letter">Hoe heeft u ons gevonden? (niet verplicht) </label>
                <input type="text" for="letter" className="cover-letter"/>
                <Button title="Sure let's go" className="btn" />
             </form>
        </div>
      </div>
    </div>
  );
}
