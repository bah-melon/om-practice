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
import Chart from '../../assets/overOns/chart.png'
import Chart2 from '../../assets/overOns/chart2.png'
import pathimg from '../../assets/path.webp'
import { imageWidget } from "../../data/overOns-data/imageWidget";
import { brandStoryContent } from "../../data/overOns-data/brandStoryContent";
import { brandStoryContent2 } from "../../data/overOns-data/brandStoryContent2";
import { cardContent } from "../../data/overOns-data/cardContent";
import { prefooter } from "../../data/overOns-data/prefooter";

export default function OverOns(){

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