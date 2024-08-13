import { useState } from "react";
import Button from "../button/Button"
import axiosClient from "../../api/axiosClient";

export default function CreatePosition({user}){
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [employment_type, setEmployment_type] = useState("Fulltime");

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
            } catch (error) {
                console.error(error);
            }
        }else{
            console.log('No info for user')   
        }
        
    };
    
    return(
        <div className="create-position-card">
            <h1>Create Position</h1>
            <div className="create-position">
                <form onSubmit={handleCreatePosition}>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Job type</label>
                    <select value={employment_type} onChange={(e) => setEmployment_type(e.target.value)}>
                        <option value="Fulltime">Fulltime</option>
                        <option value="Part time">Part time</option>
                    </select>
                    <Button title="Create" className='btn'/>
                </form>
            </div>
        </div>
    )
}