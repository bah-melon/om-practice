import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import Title from "../../components/aandeslag/Title";
import Card from "../../components/aandeslag/Card";
import HeadingExpertise from "../../components/expertise/HeadingExpertise";
import InfiniteScroll from "../../components/expertise/InfiniteScroll";
import Services from "../../components/aanpak/Services";
import AnpaakHeading from "../../components/aanpak/AnpaakHeading";
import '../../design/aanpak-design/Aanpak.scss';


export default function Aanpak() {
    return(
        <div>
            <div className="container">
            <Navbar/>
            <AnpaakHeading/>
            <Services/>
            <Title/>
            <Card heading="Extend your team - Detachering" paragraph="Heb je tijdelijk of langere tijd extra ICT-capaciteit nodig, maar niet de tijd om mensen te zoeken, een team samen te stellen of het budget om het hier in Nederland op te vangen? Door ons nearshore Techcenter in Noord-Macedonië,Kosovo en Albanië en onze senior architects en product owners kunnen wij scrum en agile werken. Tegen een voordelig budget zonder jezelf tekort te doen aan kwaliteit. Let’s speed up, by getting things done!"/>
      <Card heading="Build my own support team - Outsourcing"  paragraph="Voor (on)bepaalde tijd je eigen IT-team met de beste Melonheads tot je beschikking. We zetten in op een committed team dat voldoet aan jullie eisen, werkt met jullie workflow tools en sluiten aan op jullie bedrijfscultuur. Het is een strategische samenwerking waarbij wij een agile software ontwikkelingsteam neerzetten dat de time-to-market aanzienlijk verkort. En de basis legt voor jullie IT-support, uiteraard met behoud van intellectueel eigendom."/>
      <HeadingExpertise
        className={"aanpak-technologies"}
        heading={"Onze Melonheads zijn gevuld met de laatste technologie"}
        paragraph={
          "Hoogopgeleide IT-talenten kan je niet alleen bij ons in Amsterdam vinden, maar juist ook in ons Techcenter in Noord-Macedonië, Kosovo en Albanië. We blijven met onze voeten op Europese grond, spreken elkaars taal en schakelen snel. Want naast techniek, zijn wij ook getraind in communicatie en projectmanagement."
        }
       />
       </div>
       <InfiniteScroll/>
            <Prefooter
        heading="Laten we onze (meloen) koppen bij elkaar steken."
        subheading="We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking."
        title="Melonhead Bas spreekt je graag!"
        image={Profile}
      />
            <Footer/>
        </div>
    )
}