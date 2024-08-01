import { useState } from 'react';
import Button from "../button/Button";
import DropdownImg from '../../assets/Dropdown.png';

export default function NavigationMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="nav-menu">
            <div>
                <Button 
                    title='Aan de slag' 
                    fontSize='16px' 
                    color='white' 
                    bgColor='#153F2D' 
                    height='50px' 
                    width='139px'
                    borderRadius='16px'/>
            </div>
            
        </div>
    );
}
