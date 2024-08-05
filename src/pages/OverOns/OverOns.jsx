import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SectionHeader from "../../components/section-header/SectionHeader";
import Button from "../../components/button/Button";
import ImageWidget from "../../components/workAt/ImageWidget";
import BrandStory from "../../components/brandstory/BrandStory";
import CardsSection from "../../components/workAt/CardsSection";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import '../../design/overons-design/OverOns-design.scss'
import FirstImg from '../../assets/overOns/firstimg.jpg'
import SecondImg from '../../assets/overOns/secondimg.jpg'
import ThirdImg from '../../assets/overOns/thirdimg.jpg'
import Chart from '../../assets/overOns/chart.png'
import Chart2 from '../../assets/overOns/chart2.png'
import coffeeMan from '../../assets/workAt/coffeeman.webp'
import pathimg from '../../assets/path.webp'

export default function OverOns(){

    const imageWidget={
        image1: FirstImg,
        image2: SecondImg,
        image3: ThirdImg
    }

    const brandStoryContent=[
        {
            title: '25% oranje',
            content: 'Dit deel van ons head zit in Amsterdam, in onze headquarters werkt ons team van senior architects, product owners en nerds. Hier stroomlijnen wij elk project, en dat kan ook bij jullie op locatie.',
        },
        {
            title: '75% Meloen',
            content: 'De melon bloeit in ons nearshore Techcenter in Noord-Macedonië, waar alle IT-vitamines elke dag worden ingezet door onze coding-champions en developers. Een bron van IT-kennis die wij voor jullie aanboren.'
        }
    ]

    const brandStoryContent2=[
        {
            title:'Waarom',
            content:'Om de inner-nerd te verbinden met de rest van de wereld. Om iedereen te laten zien hoe mooi IT-technologie kan zijn en kan werken. Hoe iets wat moeilijk lijkt, overzichtelijk te maken en samen te creëren.'
        },
        {
            title: 'Hoe',
            content: 'Door kennis, kwaliteit en plezier. Door inzet en eigenaarschap. Door de krachten van Nederland en Noord-Macedonië te bundelen als een Europees platform waar korte lijnen werken en we over grenzen verbinden.'
        },
        {
            title: 'Wat',
            content: 'Ontwikkelen van waardevolle software, bouwen en ontwerpen van maatwerk applicaties, gebruiksvriendelijke leerplatformen en het digitaliseren van bedrijfsprocessen. Bij jullie op locatie of extern. Een paar handen of een heel team. Dat is me wat'
        }
    ]

    const cardContent = [{
            id: '#1',
            title: 'Wij beloven wat we doen',
            content: 'We hebben altijd het volledige eigenaarschap over ons werk. Of het nu gaat om het ondersteunen in de realisatie van een project of dat wij het volledige project van A tot Z samen met jullie opzetten en vormgeven.',
            backgroundColor: '#FF6600',
            color: '#FFFF'
        },{
            id: '#2',
            title: 'We zijn doelgericht',
            content: 'Scrum en agile werken leidt tot focus. Up-to-date kennis leidt tot efficiëntie en de juiste ondersteuning in ieder project. Als wij het project helder hebben neergezet, is de weg ernaar toe een kwestie van de juiste milestones tackelen.',
            backgroundColor: '#FFFF',
            color: '#000'
        },{
            id: '#3',
            title: 'Wij hebben er altijd zin in',
            content: 'Voor ons is plezier in het werk belangrijk, het leuk vinden wat je doet om een project te starten, door te lopen en uit te voeren. De basis van het succes van een project is volgens ons daarmee gelegd.',
            backgroundColor: '#2D8F60',
            color: '#FFFF'
        },{
            id: '#4',
            title: 'Wij blijven in ontwikkeling',
            content: 'Vitamine Ontwikkeling is onontbeerlijk om IT-fresh te blijven. Ontwikkeling van software is onze kerntaak, en om daar het beste in te zijn en blijven, ontwikkelen wij onszelf continu met kennis en als mens. In deze markt ben je volledig up-to-date of je doet niet meer mee. Daar werken wij iedere dag aan',
            backgroundColor: '#FFFF',
            color: '#000'
        },{
            id: '#5',
            title: 'Wij verbinden over de grens',
            content: 'Het prachtige van technologie is dat er eigenlijk geen grens op zit. Het verbindt systemen en mensen. Wij hebben die verbinding verder versterkt door twee epicentra van kennis en kwaliteit te koppelen: ons Techcenter in Noord-Macedonie en onze headquarters hier in Nederland.',
            backgroundColor: '#ee789c',
            color: '#FFFF'
        },{
            id: '#6',
            title: 'We werken aan talent',
            content: 'Een Melonhead zijn betekent voor ons veel, wij scannen op kwaliteit en karakter, ontdekken wat de kernkwaliteiten zijn in een ieder, wat eventueel in onze academy verder kan worden ontwikkeld. En wij zetten iedereen in op een plek die past en blij van wordt.',
            backgroundColor: '#792149',
            color: '#FFFF'
        }
    ]

    const prefooter = {
        heading: 'Laten we onze (meloen)koppen bij elkaar steken.',
        subheading: 'We spreken graag verder om alle opties door te lopen. Om te zien hoe en waarmee we jullie kunnen ondersteunen. Met een compleet software team, een tijdelijke of langdurige opschaling van jullie IT-capaciteit dan wel een strategische samenwerking.',
        title: 'Melonhead Bas spreekt je graag!',
        image: coffeeMan
    }

    return (
      <div className="container">
        <Navbar />
        <div className="overOns-content">
          <div className="header">
            <SectionHeader
              title="Doelen van morgen, drijfveren van vandaag."
              subtitle="OrangeMelons versnelt, faciliteert en optimaliseert groei door een integrale aanpak. Samen met onze aangesloten bureaus: gespecialiseerde digitale versnellers die elkaar versterken."
              className="section-header"
            />
           <Button
                title={
                    <div className="btn-title">
                    <div
                        style={{
                        backgroundColor: "#FF6600",
                        borderRadius: "40px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}
                    >
                        <img
                        src={pathimg}
                        alt="Centered Image"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}>Over ons</div>
                    </div>
                }
                className="overons-btn"
                />
          </div>
          <ImageWidget
            image1={imageWidget.image1}
            image2={imageWidget.image2}
            image3={imageWidget.image3}
          />
          <SectionHeader
            title="OrangeMelons De juiste gehalte nerd"
            subtitle="Ons fundament ligt in ons DNA, met ons anker in Nederland en onze roots in 
                    Noord-Macedonië, Kosovo en Albanië. In de ambitie dat alles kan, kan je dromen verwezenlijken 
                    met onder meer een praktische levensinstelling. Sinds 2015 zetten wij de juiste gehalte nerd in om ieder
                    IT-project succesvol te maken met als doel het verbinden van jouw IT-wensen en doelen hier in Nederland 
                    met kennis van de hoogopgeleide innovatieve IT-mensen in Macedonië. Simply a pair made in heaven."
            className="section-header-2"
          />
          <BrandStory
            header="Er zijn twee nodig voor mango."
            brandStoryContent={brandStoryContent}
            image={Chart}
          />
          <CardsSection 
                title='We are full of vitamins, een gezond recept voor ieder IT-project' 
                cardContent={cardContent} />
          <BrandStory
            header="Wij doen de dingen met een reden"
            brandStoryContent={brandStoryContent2}
            image={Chart2}
          />
          <Prefooter
            heading={prefooter.heading}
            subheading={prefooter.subheading}
            title={prefooter.title}
            image={prefooter.image}
          />
        </div>
        <Footer />
      </div>
    );
}