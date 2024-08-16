import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Prefooter from "../../components/prefooter/Prefooter";
import Footer from "../../components/footer/Footer";
import Profile from "../../assets//workAt/coffeeman.webp";
import Banner from "../../components/cases/Banner";
import BannerCards from "../../components/cases/BannerCards";

export default function Cases() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <BannerCards />
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
