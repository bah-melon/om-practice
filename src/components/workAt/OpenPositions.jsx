import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import OpenPosition from "./OpenPositions/OpenPosition";

const positions = [
    {
        position:'Open sollicitatie',
        location:'Fulltime - Amsterdam',
        backgroundColor: '#FF6600',
        color: 'white'
    },
    {
        position:'Senior .NET-ontwikkelaar',
        location:'Tirana-Pristina-Skopje-Struga'
    },
    {
        position:'Ervaren webontwikkelaar',
        location:'Tirana-Pristina-Skopje-Struga'
    },
    {
        position:'Melonhead CV uploaden',
        location:'Amsterdam-Tirana-Pristina-Skopje-Struga'
    }
]

export default function OpenPositions(){
    return(
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
                    <OpenPosition position={item.position} location={item.location} backgroundColor={item.backgroundColor} color={item.color} key={item.position}/>
                ))}
            </div>
        </div>
    )
}