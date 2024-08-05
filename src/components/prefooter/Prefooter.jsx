import React from "react";
import "../../design/prefooter-design/Prefooter.scss";
import Profilpic from "../../assets/Profile.png";
import Button from "../button/Button";

export default function Prefooter({heading, subheading, title, image}) {
  return (
    <div className="prefooter">
      <div className="prefooter-wrapper">
        <div className="left">
          <h1>{heading}</h1>
          <p className="text">
            {subheading}
          </p>
          <p className="profile-name">{title}</p>
          <div className="buttons">
            <Button title="Mail" className="btn" />
            <Button title="Bel" className="btn" />
            <Button title="Whatsapp" className="btn" />
          </div>
        </div>

        <div className="Profile">
          <img src={image} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
