import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axiosClient from "../../api/axiosClient";
import '../../design/profile-design/Profile-design.scss'
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";
import Indicator from "../../components/indicator/Indicator";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [visibleEditProfile, setVisibleEditProfile] = useState("none");

    const [current_password, setCurrent_password] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visibleChangePassword, setVisibleChangePassword] = useState("none");

    const [indicator, setIndicator] = useState('');

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await axiosClient.get('/user');
            setUser(res.data);
            setName(res.data.name);
            setEmail(res.data.email);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const handleEditProfile = async (e) =>{
        e.preventDefault();
        try {
            const res = await axiosClient.patch('/auth/update-user', {
                name: name,
                email: email
            });
            setVisibleEditProfile("none");
            window.location.reload();
            console.log('Profile updated successfully:', res.data);
        } catch (error) {
            console.error(error)
        }
    }

    const handleChangePassword = async (e) =>{
      e.preventDefault();

      try {
        const res = await axiosClient.patch('/auth/change-password', {
          current_password: current_password,
          new_password: newPassword,
          new_password_confirmation: confirmPassword
        });
        setIndicator('passwordChanged')
        setVisibleChangePassword("none");
      } catch (error) {
        if(newPassword.length < 8){
          setIndicator('passwordLength')
        }
        else if(newPassword !== confirmPassword){
          setIndicator('wrongConfirmPassword')
        }
        else{
          setIndicator('wrongPassword');
        }
        console.log('error', error)
      }
    }

    return (
      <div className="container">
        <Navbar />
        <Indicator type={indicator}/>
        <div className="profile">
          <div className="profile-card">
            <h1>User</h1>
            {user ? (
              <div className="user">
                <label>
                  <b>Name:</b> {user.name}
                </label>
                <label>
                  <b>Email:</b> {user.email}
                </label>
                <div className="profile-card-btn">
                  <Button title='Edit Profile' className='btn' handleClick={()=>{setVisibleEditProfile("block")}}/>
                  <Button title='Change Password' className='btn' handleClick={()=>{setVisibleChangePassword("block")}}/>
                </div>
               
              </div>
            ):(
              <Loading/>
            )}
          </div>

          <div className="edit-profile" style={{display: visibleEditProfile}}>
              <div className="edit-profile-header">
                <h1>Edit Profile</h1>
                <svg width='70px'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" onClick={()=>setVisibleEditProfile('none')}>
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </div>
              <form onSubmit={handleEditProfile} >
                  <label>Name:</label>
                  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                  <label>Email:</label>
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <Button title='Submit' className='btn'/>
              </form>
          </div>

          <div className="edit-profile" style={{display: visibleChangePassword}}>
              <div className="edit-profile-header">
                <h1>Change Password</h1>
                <svg width='70px'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" onClick={()=>setVisibleChangePassword('none')}>
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </div>
              <form onSubmit={handleChangePassword} >
                  <label>Password:</label>
                  <input type="text" value={current_password} onChange={(e)=>setCurrent_password(e.target.value)}/>
                  <label>New Password:</label>
                  <input type="text" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                  <label>Confirm Password:</label>
                  <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  <Button title='Submit' className='btn'/>
              </form>
          </div>
            
        </div>
      </div>
    );
}
