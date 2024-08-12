import React, { useEffect, useState } from "react";
import SectionHeader from "../section-header/SectionHeader";
import OpenPosition from "./OpenPositions/OpenPosition";
import axios from "axios";

export default function OpenPositions() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const loginAndFetchUser = async () => {
            try {
                const res = await axios.post('https://dbb1-188-44-30-163.ngrok-free.app/api/auth/login', 
                    {
                        email: 'test@test.com',
                        password: 'Tester123'
                    }
                );
                const token = res.data.token;        
                localStorage.setItem('token', token);
                fetchPositions(token);
            } catch (error) {
                console.error('Error:', error);
            }
        };
    
        loginAndFetchUser();
    }, []); 

    const fetchPositions = async (token) => {
        try {
            const res = await axios.get("https://dbb1-188-44-30-163.ngrok-free.app/api/open-positions", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true' 
                }
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
