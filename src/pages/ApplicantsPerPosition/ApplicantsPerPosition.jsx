import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import '../../design/applicantsperpositon-design/ApplicantsPerPosition-design.scss'
import axiosClient from "../../api/axiosClient";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

export default function ApplicantsPerPosition(){
    const { id } = useParams(); 
    const [applicants, setApplicants] = useState();
    const [position, setPosition] = useState();
    const navigate = useNavigate();

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

    const handleDeletePosition = async() => {
        try {
            const res = await axiosClient.delete(`/open-positions/${id}`)
            navigate('/open-positions');
        } catch (error) {
            
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
                    <Button title='Delete Position' className='btn-delete' handleClick={handleDeletePosition}/>
                </div>
            ):(
                <Loading />
            )}
          <div className="applications-card">
            <h1>Applications</h1>
            {applicants ? (
                <div>
                    {applicants.length !== 0 ? (
                        <div className="applications">
                            {applicants.map((item, i) => (
                                <ul key={i}>
                                    <Link to={`/applicant/${item.id}`}>
                                        <li><b>Applicant:</b> {item.email} | <b>FirstName: </b>{item.firstName} | <b>LastName: </b>{item.lastName} |<b>Number: </b>{item.phoneNumber}</li>
                                    </Link>
                                </ul>
                            ))}
                        </div>
                    ):(
                        <div className="applications">
                            <p>There are no new applications</p>
                        </div>
                    )}
                </div>
            ) : (
                <Loading />
            )}
        </div>
        </div>
      </div>
    );
}