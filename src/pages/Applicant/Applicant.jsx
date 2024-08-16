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
  }, []);

  const fetchApplicant = async () => {
    try {
      const res = await axiosClient.get(`/applications/show/${id}`);
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

  const fetchCV = async () => {
    try {
      const res = await axiosClient.get(`/applications/${id}/download`,{
        responseType: 'blob', 
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${applicants.firstName}_${applicants.lastName}_CV.pdf`);
      document.body.appendChild(link);
      link.click();

      link.parentNode.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <Navbar />
      <Application
        applicants={applicants}
        fetchCV={fetchCV}
        containerClassName={"application-container"}
        titleClassName={"description"}
        infoClassName={"info"}
        cvClassName={"cv"}
        letter={"letter"}
        btnDownload={'btn-download'}
      />
    </div>
  );
} 
