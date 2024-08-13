import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import '../../design/applicantsperpositon-design/ApplicantsPerPosition-design.scss'
import axiosClient from "../../api/axiosClient";

export default function ApplicantsPerPosition(){
    const { id } = useParams(); 
    const [applicants, setApplicants] = useState();
    const [position, setPosition] = useState()

    useEffect(() => {
        fetchApplications();
        fetchPosition();
    },[])

    const fetchApplications = async () =>{
        try {
            const res = await axiosClient.get(`/open-positions/${id}/applicants`);
            setApplicants(res.data.applicants);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchPosition = async () =>{
        try {
            const res = await axiosClient.get(`/open-positions/show/${id}`)
            setPosition(res.data.position);
            console.log(res.data.position)
        } catch (error) {
            console.error(error);
        }
    }

    return (
      <div className="container">
        <Navbar />
        <div className="applicants-per-position">
            {position ? (
                <div className="position"> 
                    <small>{position.location}</small>
                    <h1>{position.title}</h1>
                    <p>{position.description}</p>
                    <span><b>Job type:</b> {position.employment_type}</span>
                </div>
            ):(
                <div>Loading position...</div>
            )}
          <div className="applications-card">
            <h1>Applications</h1>
            {applicants ? (
                <div className="applications">
                    {applicants.map((item, i) => (
                        <ul key={i}>
                            <li><b>Applicant:</b> {item.email} | <b>FirstName: </b>{item.firstName} | <b>LastName: </b>{item.lastName} | <b>Number: </b>{item.phoneNumber}</li>
                        </ul>
                    ))}
                </div>
            ) : (
                <p>Loading applications...</p>
            )}
        </div>
        </div>
      </div>
    );
}