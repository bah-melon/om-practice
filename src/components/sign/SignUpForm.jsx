import Button from "../button/Button";
import Logo from "../../assets/OrangeMelons Logo.png";
import { Link } from "react-router-dom";
import axiosClientUser from "../../api/axiosClient";

export default function SignUpForm(){

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosClientUser.post('/auth/')
        } catch (error) {
            
        }
    }

    return(
        <div className="container">
            <img src={Logo} alt="logo" />
            <form action="" className="form-container">
                <label>Name:</label>
                <input type="text" />
                <label>Email:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="password" />
                <div className="form-buttons">
                    <small>Have an account? <Link to='/signin'>Sign In</Link></small>
                    <Button title='Sign Up' type='submit' className='btn'/>
                </div>
            </form>
        </div>
    )
}