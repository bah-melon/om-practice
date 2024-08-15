import React, { useState } from "react";
import "../../design/aanpak-design/Aanpak.scss";
import Button from "../button/Button";
import Plus from "../../assets/services/plus-svgrepo-com.svg";
import Minus from "../../assets/services/minus-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Service({serviceTitle , serviceParagraph }) {
   
    const [isVisible , setVisibility] = useState(false);
    const [isClicked , setClicked] = useState(false);
    const [isImage , setImage] = useState(false);
 
    const toggleServiceInfo = () => {
        setVisibility(!isVisible);
        setClicked(!isClicked);
        setImage(!isImage);
    }


  return (
    
    <div className="services-wrapper">
      <div className="service">
      <img  alt="logo" onClick={toggleServiceInfo} src={isImage ? Minus : Plus} />
      <h1 onClick={toggleServiceInfo} style={{ color: isClicked ? '#FF6600' : '#07301F' }}>{serviceTitle}</h1>
      </div>
      {isVisible && (
        <div className="service-info">
        <p>{serviceParagraph}</p>
        <ul>
          <li>Backend</li>
          <li>Frontend</li>
          <li>Mobile</li>
          <li>Quality Assurence & Code Review</li>
        </ul>
        <Link to={`/contact`}>
          <Button className={"btn"} title={"Neem contact op"} />
        </Link>
      </div>
      )}
    </div>
    
  );
}
