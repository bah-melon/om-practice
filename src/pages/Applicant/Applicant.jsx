import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import "../../design/applicant-design/Applicant.scss";
import Navbar from "../../components/navbar/Navbar";
import Application from "../../components/application/Application";

export default function Applicant() {
  const { id } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApplicant();
  }, [id]);

  const fetchApplicant = async () => {
    try {
      const res = await axiosClient.get(`/applications/show/10`);
      const data = res.data;

      if (data && data.application) {
        setApplicants(data.application);
        console.log(data.application);
      } else {
        console.error("No applicants found.");
        setError("No applicants found.");
      }
    } catch (error) {
      console.log("Error:", error);
      setError("An error occurred while fetching the applicant data.");
    }
  };

  return (
    <div>
      <Navbar />

      <Application
        name={applicants.firstName}
        surname={applicants.lastName}
        country={applicants.country}
        email={applicants.email}
        phoneNumber={applicants.phoneNumber}
        city={applicants.city}
        cvLink={applicants.file_path}
        containerClassName={"application-container"}
        titleClassName={"description"}
        infoClassName={"info"}
        cvClassName={"cv"}
      />
    </div>
  );
} 
