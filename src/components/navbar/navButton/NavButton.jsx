import { useState, useEffect } from 'react';
import styles from './navButton.module.css';

const NavButton = ({ activeTab, tabFor, handleClick, children }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect( () => {
        setIsActive(tabFor === activeTab);
    }, [activeTab]);
    
    return (
        <button onClick={ () => handleClick(tabFor) } 
                className={ `${styles.navButton} ${isActive ? styles.active : ""}` }>
            { children }    
        </button>
    );
};

export { NavButton };