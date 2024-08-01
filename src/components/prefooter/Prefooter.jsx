import React from "react";
import "../../design/prefooter-design/Prefooter.scss";
import Profilpic from "../../assets/Profile.png";
import Button from "../button/Button";

export default function Prefooter() {
  return (
    <div className="prefooter">
      <div className="prefooter-wrapper">
        <div className="left">
          <h1>Laten we afspreken en samen positieve impact maken!</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            condimentum libero blandit, fermentum metus a, sodales elit.
            Vestibulum tincidunt blandit est id accumsan.
          </p>
          <p className="profile-name">Spar erover met Andrea</p>
          <div className="buttons">
            <Button title="Mail" className="btn" />
            <Button title="Bel" className="btn" />
            <Button title="Whatsapp" className="btn" />
          </div>
        </div>

        <div className="Profile">
          <img src={Profilpic} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
