import Button from "../button/Button";
import Logo from "../../assets/OrangeMelons Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function SignInForm(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async (e) =>{
        e.preventDefault();

        try {
            const res = await axiosClient.post('/auth/login', {
                email: email,
                password: password
            });
            const token = res.data.token;
            localStorage.setItem('token', token);
            navigate('/whitepaper');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className="container">
            <img src={Logo} alt="logo" />
            <form onSubmit={handleSignin} className="form-container">
                <label>Email:</label>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                <div className="form-buttons">
                    {/* <small>Don't have an account? <Link to='/signup'>Sign Up</Link></small> */}
                    <Button title='Sign In' type='submit' className='btn'/>
                </div>
            </form>
        </div>
    )
}