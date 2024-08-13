import React from "react";

export default function Application({
  name,
  surname,
  country,
  city,
  email,
  phoneNumber,
  cvLink,
  titleClassName,
  infoClassName,
  cvClassName,
  containerClassName,
}) {

  return (
    <div className={containerClassName}>
      <div className={titleClassName}>
        <h1>Application</h1>
      </div>
      <div className={infoClassName}>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Surname: <span>{surname}</span>
        </p>
        <p>
          Country: <span>{country}</span>
        </p>
        <p>
          City: <span>{city}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Phone Number: <span>{phoneNumber}</span>
        </p>
      </div>
      <div className={cvClassName}>
        <strong>Uploaded CV:</strong>
        <a href={cvLink} download>
          Download CV
        </a>
      </div>
    </div>
  );
}