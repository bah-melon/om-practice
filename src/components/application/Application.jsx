import React from "react";
import Button from "../button/Button";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";

export default function Application({
  applicants,
  fetchCV,
  titleClassName,
  infoClassName,
  cvClassName,
  containerClassName,
  letter,
  btnDownload
}) {
  const navigate = useNavigate()

  const handleDeleteApplication = async() =>{
    try {
      const res = await axiosClient.delete(`/applications/${applicants.id}`);
      navigate('/applications');
    } catch (error) {
      
    }
  }
  return (
    <div className={containerClassName}>
      <div className={titleClassName}>
        <h1>Application</h1>
      </div>
      <div className={infoClassName}>
        <p>
          Name: <span>{applicants.firstName}</span>
        </p>
        <p>
          Surname: <span>{applicants.lastName}</span>
        </p>
        <p>
          Country: <span>{applicants.country}</span>
        </p>
        <p>
          City: <span>{applicants.city}</span>
        </p>
        <p>
          Email: <span>{applicants.email}</span>
        </p>
        <p>
          Phone Number: <span>{applicants.phoneNumber}</span>
        </p>
      </div>

      <p className={letter}>Cover Letter:<span>{applicants.description}</span></p>

      <div className={cvClassName}>
        <strong>Uploaded CV:</strong>
        <Button title='Download CV' className={btnDownload} handleClick={fetchCV}/>
      </div>
      <div>
        <Button title='Delete Application' className='btn-delete' handleClick={handleDeleteApplication}/>
      </div>
    </div>
  );
}
