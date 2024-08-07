import React from "react";
import "../../design/vacancies-design/Vacancies.scss";

export default function Position({city , job , description}) {
  
  return (
    <div className="position-container">
      <div className="locations">
        <p>{city[0]}</p>
        <p>{city[1]}</p>
        <p>{city[2]}</p>
        <p>{city[3]}</p>
      </div>

      <div className="job">
        <p>{job}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="text">
        <p id="question">Wat?<br /></p>
        <p> Ben jij onze nieuwe collega die IT-vitamines gaat aanbieden aan
          onze Nederlandse klanten? Als je denkt dat je het juiste niveau van
          "nerd" hebt, aarzel dan niet om je CV te uploaden in het onderstaande
          formulier.
        </p>
      </div>
    </div>
  );
}
