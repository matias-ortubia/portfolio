import { Link } from 'react-router-dom';
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

export { Navbar };