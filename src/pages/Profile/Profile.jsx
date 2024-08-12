import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileUser from "../../components/profile/ProfileUser";
import Applications from "../../components/profile/Applications";
import ShowPositions from "../../components/profile/ShowPositions";
import CreatePosition from "../../components/profile/CreatePosition";
import axiosClient from "../../api/axiosClient";
import '../../design/profile-design/Profile-design.scss'

export default function Profile(){
    const [user, setUser] = useState(null);
    const [applications, setApplications] = useState(null);
    const [positions, setPositions] = useState(null);

    useEffect(() => {
        fetchUser();
        fetchApplications();
        fetchPositions();
    }, []);

    const fetchUser = async () =>{
        try {
            const res = await axiosClient.get('/user');
            setUser(res.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const fetchApplications = async () =>{
        try {
            const res = await axiosClient.get('/applications');
            setApplications(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    }

    const fetchPositions = async () =>{
        try {
            const res = await axiosClient.get('/open-positions');
            setPositions(res.data);
            // console.log(res.data.data);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    }

    return(
        <div className="container">
            <Navbar />
            <div className="profile">
                <ProfileUser user={user} />
                <CreatePosition />
                <Applications applications={applications} positions={positions}/>
                <ShowPositions positions={positions}/>
            </div>
        </div>
    );
}
