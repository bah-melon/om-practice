import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import "../../design/expertise-design/Expertise.scss";
import HeadingExpertise from "../../components/expertise/HeadingExpertise";
import CardsExpertise from "../../components/expertise/CardsExpertise";
import Image1 from "../../assets/expertise/orangemelons-house.png";
import Image2 from "../../assets/expertise/orangemelons-post.png";
import Image3 from "../../assets/expertise/orangemelons-help.png";
import InfiniteScroll from "../../components/expertise/InfiniteScroll";

export default function Expertise() {
  return (
    <div>
      <Navbar />
      <HeadingExpertise
        heading={"Mooie plannen opgelijnd?!"}
        subheading={
          "Gebruik onze IT-vitamines voor de juiste boost voor jullie succes!"
        }
        preheading={"samenwerken is key"}
        paragraph={
          "Het begin ligt altijd in de ambitie om iets moois te maken, te optimaliseren en aan te pakken. En hoe fijn is het om daarin de juiste IT-ondersteuning voor in te kunnen kopen. De veelzijdigheid van jouw vragen, maakt elke keer voor ons een unieke case. Voor iedere tak van sport, groot of klein."
        }
      />
      <CardsExpertise
        image={Image1}
        paragraphTitle={"Woningcorporaties"}
        paragraph={
          "Operationele efficiëntie vergroten, klanttevredenheid verbeteren en beter inspelen op veranderende behoeften op de vastgoedmarkt zijn maar een paar ijkpunten die met behulp van IT worden getackeld. Wij houden van tevreden klanten, dus laten we dit samen doen."
        }
        color={{ backgroundColor: "#FF6600" }}
      />
      <CardsExpertise
        image={Image2}
        paragraphTitle={"Logistiek"}
        paragraph={
          "Uit ervaring weten wij dat IT cruciaal is voor de efficiëntie, traceerbaarheid en optimalisatie van processen binnen de logistiek. Dit kan alleen door voortdurend bij te blijven met de nieuwste IT-ontwikkelingen om de concurrentie voor te blijven en je klanten optimaal te bedienen! Onze strakke logistiek tussen NL en Noord-Macedonie, Kosovo en Albanië is klaar voor jullie project!"
        }
        color={{ backgroundColor: "#198754" }}
      />
      <CardsExpertise
        image={Image3}
        paragraphTitle={"Zorg"}
        paragraph={
          "De zorgsector evolueert voortdurend en IT speelt een essentiële rol in het verbeteren van patiëntenzorg, het stroomlijnen van processen en het stimuleren van medische innovatie. Wij staan volledig up-to-date met de laatste IT-kennis in de startblokken om jullie innovatie en patiëntenzorg te ondersteunen."
        }
        color={{ backgroundColor: "#a71d5d" }}
      />

       <HeadingExpertise
        heading={"Onze Melonheads zijn gevuld met de laatste technologie"}
        paragraph={
          "Hoogopgeleide IT-talenten kan je niet alleen bij ons in Amsterdam vinden, maar juist ook in ons Techcenter in Noord-Macedonië, Kosovo en Albanië. We blijven met onze voeten op Europese grond, spreken elkaars taal en schakelen snel. Want naast techniek, zijn wij ook getraind in communicatie en projectmanagement."
        }
       />

       <InfiniteScroll />

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
