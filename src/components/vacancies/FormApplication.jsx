import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import OpenPositions from "../workAt/OpenPositions";
import axiosClient from "../../api/axiosClient";

export default function FormApplication() {
    const { id } = useParams(); 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        city: '',
        country: '',
        file_path: '',
        description: '',
        open_positions : id
    });

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    console.log(formData);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const dataToSubmit = { ...formData, id };
            console.log(dataToSubmit);
            const res = await axiosClient.post('/applications/create', dataToSubmit, {
                headers: {
                    'Content-type' :"multipart/form-data",
                }      
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
                <input type="file" id="cvFile" onChange={handleChange} name="file_path"></input>
                <label htmlFor="message">Bericht</label>
                <textarea className="wideInput" placeholder="type text here" id="message" value={formData.description} onChange={handleChange} name="description"></textarea>
                <Button title="Verzenden" className="btn" />
            </form>
        </div>
    );
}
