import React from "react";
import "../../design/cases-design/Cases.scss";
import HeadingExpertise from "../expertise/HeadingExpertise";
import Button from "../button/Button";

export default function BannerCards() {
  return (
    <div className="banner-card-container">
      <HeadingExpertise
        className={"banner-heading"}
        preheading={"onze oplossingen"}
        heading={"CASES"}
        paragraph={
          "De klanten die je voorgingen kregen al een flinke IT-vitamine boost in onder meer deze casussen. Wij spreken je graag bij als je meer wilt weten!"
        }
      />
      <div className="banner-cards">
        <div className="card">
          <div className="image"></div>
          <p>Direct betere communicatie tussen Woonzorg en haar bewoners.</p>
          <Button title={"Bekijk case"} className={"btn"} />
        </div>
        <div className="card2">
          <Button title={"Bekijk case"} className={"btn"} />
          <p>Direct betere communicatie tussen Woonzorg en haar bewoners.</p>
          <p className="p">Peddy</p>
        </div>
        <div className="card1">
          <Button title={"Bekijk case"} className={"btn"} />
          <p>...Coming soon</p>
        </div>
        <div className="card">
          <div className="image2"></div>
          <p className="p">Dartwin</p>
          <p>
            Een nieuwe jasje voor een traditioneel spel: darten 2.0 met Dartwin
          </p>
          <Button title={"Bekijk case"} className={"btn"} />
        </div>
      </div>
        
        <div className="subheading">
            <h1>“Ik zie OrangeMelons als verlengstuk van mijn organisatie”</h1>
        </div>

    </div>
  );
}
