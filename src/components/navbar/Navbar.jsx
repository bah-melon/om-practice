import '../../design/navbar-design/Navbar-design.scss';
import NavbarLogo from './NavbarLogo';
import Navigation from './Navigation';
import NavigationMenu from './NavigationMenu';

export default function Navbar(){
    return(
        <div className='navbar'>
            <NavbarLogo/>
            <Navigation/>
            {/* <NavigationMenu/> */}
        </div>
    )
}