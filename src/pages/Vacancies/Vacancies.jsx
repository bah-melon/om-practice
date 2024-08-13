import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Position from "../../components/vacancies/Position";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import Skills from "../../components/vacancies/Skills";
import FormApplication from "../../components/vacancies/FormApplication";
import axiosClient from "../../api/axiosClient";

export default function Vacancies() {
    const { id } = useParams(); 
    const [job, setJob] = useState(""); 
    const [city, setCity] = useState([]);
    const [description, setDescription] = useState("");
    console.log(id)

    useEffect(() => {
      fetchPosition(id);
    }, [id]);

    const fetchPosition = async (id) => {
        try {
            const res = await axiosClient.get(`/open-positions/show/${id}`, {
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
