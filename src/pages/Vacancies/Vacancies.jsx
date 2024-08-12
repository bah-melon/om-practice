import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Position from "../../components/vacancies/Position";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import Skills from "../../components/vacancies/Skills";
import FormApplication from "../../components/vacancies/FormApplication";
import axios from "axios";

export default function Vacancies() {
    const { id } = useParams(); 
    const [job, setJob] = useState(""); 
    const [city, setCity] = useState([]);
    const [description, setDescription] = useState("");
    console.log(id)

    useEffect(() => {
        const loginAndFetchPosition = async () => {
            try {
                const res = await axios.post('https://dbb1-188-44-30-163.ngrok-free.app/api/auth/login', {
                    email: 'test@test.com',
                    password: 'Tester123'
                });
                const token = res.data.token;        
                localStorage.setItem('token', token);
                fetchPosition(token, id);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        loginAndFetchPosition();
    }, [id]);

    const fetchPosition = async (token, id) => {
        try {
            const res = await axios.get(`https://dbb1-188-44-30-163.ngrok-free.app/api/open-positions/show/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true' 
                }
            });

            const data = res.data;
            console.log(data.position); 

            if (data && data.position) {
                setJob(data.position.title);  
                setCity(data.position.location.split(','));  
                setDescription(data.position.description);  
            } else {
                console.error('No position found.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <Navbar />
            <Position 
                city={city} 
                job={job} 
            />
            <Skills 
                jobtitle={job} 
                requirements={description}
            />
            <FormApplication />
            <Prefooter
                heading="Laten we onze (meloen)koppen bij elkaar steken."
                subheading="We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking."
                title="Melonhead Bas spreekt je graag!"
                image={Profile}
            />
            <Footer />
        </div>
    );
}
