import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownImg from '../../assets/Dropdown.png';

export default function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="nav-wrapper">
            <div className="navigation">
                <ul>
                    <li><Link to="">CASES</Link></li>
                    <li><Link to="">DIENSTEN</Link></li>
                    <li><Link to="">AANPAK</Link></li>
                    <li><Link to="/over-ons">OVER ONS</Link></li>
                    <li><Link to="/workat">WERKEN BIJ</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/aan-de-slag">AAN DE SLAG</Link></li>
                    <li><Link to="/whitepaper">WHITEPAPERS</Link></li>
                </ul>
            </div>
            <div className="nav-menu">
                <img src={DropdownImg} className="dropdown-btn" onClick={toggleDropdown} alt="Menu" width='60px' height='60px' />
                <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                    <ul>
                        <li><Link to="">CASES</Link></li>
                        <li><Link to="">DIENSTEN</Link></li>
                        <li><Link to="">AANPAK</Link></li>
                        <li><Link to="/over-ons">OVER ONS</Link></li>
                        <li><Link to="/workat">WERKEN BIJ</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/aan-de-slag">AAN DE SLAG</Link></li>
                        <li><Link to="/whitepaper">WHITEPAPERS</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
