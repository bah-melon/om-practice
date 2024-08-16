import React from "react";
import Service from "./Service";
import '../../design/aanpak-design/Aanpak.scss'

export default function Services() {
  return (
    <div className="services-container">
        <h1 className="service-heading">In het kort doen wij 3 dingen</h1>
      <Service
        serviceTitle={"Software ontwikkeling"}
        serviceParagraph={
          "Je hebt een idee, een plan om jouw markt in razend tempo te veroveren. Je bent op zoek naar een partner die kwaliteit, creativiteit en snelheid kan combineren. Een team dat het verschil begrijpt tussen een project en een product. Wij vullen jouw passie aan met expertise."
        }
      />
      <Service
        serviceTitle={"Software doorontwikkeling"}
        serviceParagraph={
          "klaar om jullie software opnieuw te injecteren en te innoveren? Het naar een next level te brengen? Wij kijken graag samen met wat er al staat, en wat er nodig is om deze software te optimaliseren. We hebben er nu al zin in!"
        }
      />
      <Service
        serviceTitle={"Consultancy"}
        serviceParagraph={
          "High-end no-nonsense advies. Wij staan naast jullie in de uitdaging en kijken samen met jullie hoe wij informatietechnologie (IT) het beste kunnen benutten voor het behalen van jullie ambities en bedrijfsdoelstellingen. Samen met jullie nemen we alleen maar genoegen met het beste."
        }
      />
    </div>
  );
}
