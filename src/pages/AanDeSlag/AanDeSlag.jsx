import React from "react";
import "../../design/aandeslag-design/Aandeslag.scss";
import SectionHeader from "../../components/section-header/SectionHeader";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/aandeslag/Title";
import Card from "../../components/aandeslag/Card";
import Formfield from "../../components/aandeslag/Formfield";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";

export default function AanDeSlag() {
  return (
    <div className="container">
      <SectionHeader />
      <Navbar />
      <Title/>
      <Card heading="Extensie van jouw IT-team" subheading="Ons IT-team, jouw regie" paragraph="Jouw regie. Als jouw strategische partner gaan wij een team samenstellen met “coding champions” voor jouw applicatie."/>
      <Card heading="Ons IT-team,onze regie" subheading="Ons IT-team, onze regie" paragraph="Heb je tijdelijk of voor een langere periode extra IT-capaciteit nodig maar je hebt daar de tijd niet voor? Wij kunnen jou ontzorgen door een team voor je samen te stellen en de aansturing hiervan op ons te nemen."/>
      <Formfield/>
      <Prefooter
        heading="Laten we onze (meloen) koppen bij elkaar steken."
        subheading="We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking."
        title="Melonhead Bas spreekt je graag!"
        image={Profile}
      />
      <Footer />
    </div>
  );
}
