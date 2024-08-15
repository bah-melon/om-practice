import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownImg from '../../assets/Dropdown.png';

export default function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn('');
        window.location.reload();
    };

    return (
        <div className="nav-wrapper">
            <div className="navigation">
                <ul>
                    <li><Link to="/cases">CASES</Link></li>
                    <li><Link to="/aanpak">AANPAK</Link></li>
                    <li><Link to="/expertise">EXPERTISE</Link></li>
                    <li><Link to="/over-ons">OVER ONS</Link></li>
                    <li><Link to="/workat">WERKEN BIJ</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/aan-de-slag">AAN DE SLAG</Link></li>
                    <li><Link to="/whitepaper">WHITEPAPERS</Link></li>
                    <li>
                        {isLoggedIn ? (
                            <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                <Link className="dropdown-toggle">ACCOUNT</Link>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><Link to="/profile">PROFILE</Link></li>
                                        <li><Link onClick={handleSignOut}>SIGN OUT</Link></li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link to="/signin">SIGN IN</Link>
                        )}
                    </li>
                </ul>
            </div>
            <div className="nav-menu">
                <img src={DropdownImg} className="dropdown-btn" onClick={toggleDropdown} alt="Menu" width='60px' height='60px' />
                <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                    <ul>
                        <li><Link to="">CASES</Link></li>
                        <li><Link to="">DIENSTEN</Link></li>
                        <li><Link to="">AANPAK</Link></li>
                        <li><Link to="/over-ons">OVER ONS</Link></li>
                        <li><Link to="/workat">WERKEN BIJ</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/aan-de-slag">AAN DE SLAG</Link></li>
                        <li><Link to="/whitepaper">WHITEPAPERS</Link></li>
                        {isLoggedIn ? (
                            <>
                                <li><Link to="/profile">PROFILE</Link></li>
                                <li><Link onClick={handleSignOut}>SIGN OUT</Link></li>
                            </>
                        ) : (
                            <li><Link to="/signin">SIGN IN</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
