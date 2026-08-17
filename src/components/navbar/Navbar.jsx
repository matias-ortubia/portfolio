import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavButton } from '../';
import styles from './navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);

    const handleClick = tab => {
        setActiveButton(tab);
    };
        
    return (
        <nav className={ styles.navbar }>
            <Link to="/"
                  style={{ pointerEvents: (location.pathname === '/') ? 'none' : '' }}
                  tabindex="1" >
                <NavButton handleClick={ handleClick } 
                           tabFor="/" 
                           activeTab={ activeButton }
                           tabindex="-1">
                    HOME
                </NavButton>
            </Link>
            <Link to="/skills"
                  style={{ pointerEvents: (location.pathname === '/skills') ? 'none' : '' }}
                  tabindex="2">
                <NavButton handleClick={ handleClick } 
                           tabFor="/skills" 
                           activeTab={ activeButton }
                           tabindex="-1">
                    SKILLS
                </NavButton>
            </Link>
            {/*<Link to="/contact"
                  style={{ pointerEvents: (location.pathname === '/contact') ? 'none' : '' }}>
                <NavButton handleClick={ handleClick } 
                           tabFor="/contact" 
                           activeTab={ activeButton }>
                    CONTACT
                </NavButton>
    </Link>*/}
        </nav>
    );
};

export { Navbar };