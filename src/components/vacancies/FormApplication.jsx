import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import OpenPositions from "../workAt/OpenPositions";

export default function FormApplication() {
    const { id } = useParams(); 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        city: '',
        country: '',
        file: null,
        description: '',
        open_positions : id
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    console.log(formData);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No token found, please log in again.");
            }
            
            const dataToSubmit = { ...formData, id };
            const res = await axios.post('https://dbb1-188-44-30-163.ngrok-free.app/api/applications/create', dataToSubmit, {
    
            });

            console.log('Form submitted successfully:', res.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="info">
                    <div className="name">
                    <label htmlFor="firstName">Naam*</label>
                    <input type="text" id="*" className="input-field" name="firstName" value={formData.firstName} onChange={handleChange}></input>
                    </div>
                    <div className="lastname">
                    <label htmlFor="lastName">Achternaam*</label>
                    <input type="text" id="*" className="input-field" name="lastName" value={formData.lastName} onChange={handleChange}></input>
                    </div>
                    <div className="phone-number">
                    <label htmlFor="phoneNumber">Telefoonnummer</label>
                    <input type="text" id="tel" className="input-field" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}></input>
                    </div>
                    <div className="email">
                    <label htmlFor="Email*">Email*</label>
                    <input type="text" id="*" className="input-field" name="email" value={formData.email} onChange={handleChange}></input>
                    </div>

                </div>
                <label htmlFor="city">Stad</label>
                <input title="Stad" type="text" id="stad" className="stad" name="city" value={formData.city} onChange={handleChange}></input>
                <label htmlFor="country">Land</label>
                <input title="Land" type="text" id="land" className="land" name="country" value={formData.country} onChange={handleChange}></input>
                <input type="file" id="cvFile" name="file_path" onChange={handleChange}></input>
                <label htmlFor="message">Bericht</label>
                <textarea className="wideInput" placeholder="type text here" id="message" value={formData.description} onChange={handleChange} name="description"></textarea>
                <Button title="Verzenden" className="btn" />
            </form>
        </div>
    );
}
