import React, { useState } from "react";
import '../../design/form-design/Form-design.scss'
import Banner from "../../assets/Banner.png";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";
import axiosClient from "../../api/axiosClient";
import Indicator from "../indicator/Indicator";

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const [indicator, setIndicator] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post('/contact', {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        message
      });
      setIndicator('mailSent');
      console.log('Response:', res.data);
    } catch (error) {
      setIndicator('mailNotSent')
      console.error('Error:', error);
    }
  }

  return (
    <div className="form-wrapper">
      <Indicator type={indicator}/>
      <div className="heading">
        <h1>Het verhaal achter de Woonzorg Thuis app</h1>
        <p>Ontwikkeld door developers uit Noord-Macedonië</p>
      </div>
      <div className="form-container">
        <div className="banner">
          <img src={Banner} alt="Banner-Image" />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <InputField 
              title="Voorname" 
              type="text" 
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField 
              title="Achternaam" 
              type="text" 
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputField 
              title="Email*" 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField 
              title="Mobiel telefoonnummer (niet verplicht)" 
              type="text" 
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <InputField 
              title="Naam onderneming (niet verplicht)" 
              type="text" 
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div className="contact-form-help-text">
              <label htmlFor="cover-letter">Bericht</label>
              <textarea 
                placeholder="Bericht"
                id="cover-letter"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button title="Sure let's go" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
