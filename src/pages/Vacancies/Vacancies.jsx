import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Position from "../../components/vacancies/Position";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import Skills from "../../components/vacancies/Skills";
import FormApplication from "../../components/vacancies/FormApplication";

export default function Vacancies(){
    return(
        <div className="container">
            <Navbar/>
            <Position  city= {["Skopje", "Pristina", "Tirana", "Stroom"]} job ="Senior .NET-ontwikkelaar" description="OrangeMelons breidt haar team uit. Wij zijn op zoek naar .NET Developers met meer dan 3 jaar ervaring."/>
            <Skills jobtitle="Senior .NET-ontwikkelaar" requirements="OrangeMelons breidt haar team uit. Wij zijn op zoek naar .NET Developers met meer dan 3 jaar ervaring."/>
             <FormApplication/>
            <Prefooter
        heading="Laten we onze (meloen)koppen bij elkaar steken."
        subheading="We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking."
        title="Melonhead Bas spreekt je graag!"
        image={Profile}
      />
            <Footer/>
        </div>
    )
}