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
                  style={{ pointerEvents: (location.pathname === '/') ? 'none' : '' }} >
                <NavButton handleClick={ handleClick } 
                           tabFor="/" 
                           activeTab={ activeButton }>
                    HOME
                </NavButton>
            </Link>
            <Link to="/projects"
                  style={{ pointerEvents: (location.pathname === '/projects') ? 'none' : '' }}>
                <NavButton handleClick={ handleClick } 
                           tabFor="/projects" 
                           activeTab={ activeButton }>
                    PROJECTS
                </NavButton>
            </Link>
            <Link to="/contact"
                  style={{ pointerEvents: (location.pathname === '/contact') ? 'none' : '' }}>
                <NavButton handleClick={ handleClick } 
                           tabFor="/contact" 
                           activeTab={ activeButton }>
                    CONTACT
                </NavButton>
            </Link>
        </nav>
    );
};

export { Navbar };

/*import { Link } from 'react-router-dom';
import { NavButton } from './components';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={ styles.navbar }>
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    );
}

export { Navbar };*/