import React, { useState } from "react";
import "../../design/aandeslag-design/Aandeslag.scss";
import InputField from "../inputfield/InputField";
import Button from "../button/Button";
import Indicator from "../indicator/Indicator";
import axiosClient from "../../api/axiosClient";

export default function Formfield(){
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
        <div className="form-field-container">
            <Indicator type={indicator}/>
                <div className="heading"><h1>We helpen je graag verder.</h1></div>
                    <form onSubmit={handleSubmit}>
                    <div className="info">
                        <InputField
                            title="Naam*" 
                            type="text" 
                            id="*" 
                            className="input-field" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <InputField 
                            title="Achternaam*"
                            type="text" 
                            id="*" 
                            className="input-field"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <InputField 
                            title="Telefoonnummer" 
                            type="text" 
                            id="tel" 
                            className="input-field"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <InputField 
                            title="Email*" 
                            type="text" 
                            id="*" 
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                        <InputField 
                            title="Bedrijfsnaam" 
                            type="text" 
                            id="company" 
                            className="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        /> 
                        <label htmlFor="message">Bericht</label> 
                        <textarea 
                            className="wideInput" 
                            placeholder="type text here" 
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <Button title="Verzenden" className="btn" />
                </form>
        </div>
    )
}