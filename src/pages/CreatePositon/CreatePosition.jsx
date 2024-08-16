import { useEffect, useState } from "react";
import Button from "../../components/button/Button"
import axiosClient from "../../api/axiosClient";
import '../../design/profile-design/Profile-design.scss'
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Indicator from "../../components/indicator/Indicator";

export default function CreatePosition(){
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [employment_type, setEmployment_type] = useState("Fulltime");
    const [user, setUser] = useState();
    const [indicator, setIndicator] = useState('')

    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser()
    }, []);

    const fetchUser = async () => {
        try {
            const res = await axiosClient.get('/user');
            setUser(res.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const handleCreatePosition = async (e) =>{
        e.preventDefault();
        if(user){
            try {
                const res = await axiosClient.post('/open-positions/create', {
                    title: title,
                    location: location,
                    description: description,
                    employment_type: employment_type,
                    user_id: user.id
                });
                setIndicator('positionCreated');
                // navigate('/open-positions');
            } catch (error) {
                setIndicator('fillRequiredFields')
                console.error(error);
            }
        }else{
            setIndicator('positionNotCreated')
            console.log('No info for user')   
        }
        
    };
    
    return(
        <div className="container">
            <Indicator type={indicator}/>
            <Navbar/>
            <div className="create-position-card">
            <h1>Create Position</h1>
            <div className="create-position">
                <form onSubmit={handleCreatePosition}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <label>Description</label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Job type</label>
                    <select value={employment_type} onChange={(e) => setEmployment_type(e.target.value)}>
                        <option value="Fulltime">Fulltime</option>
                        <option value="Part time">Part time</option>
                    </select>
                    <Button title="Create" className='btn'/>
                </form>
            </div>
        </div>
        </div>
        
    )
}