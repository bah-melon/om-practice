import React, { useEffect, useState } from "react";
import SectionHeader from "../section-header/SectionHeader";
import OpenPosition from "./OpenPositions/OpenPosition";
import axiosClient from "../../api/axiosClient";

export default function OpenPositions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        fetchPositions();
    }, []); 

    const fetchPositions = async () => {
        try {
            const res = await axiosClient.get("/open-positions", {
            });
            
            const data = res.data; 
            
            if (data && data.data && data.data.length > 0) {
                setPositions(data.data);
            } else {
                console.error('No positions found.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="open-positions">
            <SectionHeader 
                title='Openstaande vacatures' 
                subtitle='Onze Melonheads opereren op verschillende niveaus en met een eigen specialisme. 
                Er is dan ook genoeg mogelijk. De inner-nerd moet wel wakker zijn, maar voor de rest… 
                Ontdek of jij warm wordt van een van deze vacatures'
                className='section-header'
            />
            <div>
                {positions.map(item => (
                    <OpenPosition 
                        position={item.title} 
                        location={item.location} 
                        backgroundColor={item.backgroundColor } 
                        color={item.color} 
                        key={item.id}  
                        id={item.id} 
                    />
                ))}
            </div>
        </div>
    );
}
