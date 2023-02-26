import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.js';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import styles from './themeToggleButton.module.css';

const ThemeToggleButton = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button className={ styles.toggleThemeButton } onClick={ toggleDarkMode }>
            { darkMode === true ?
                <BsMoonStarsFill className={ `${styles.icon} ${styles.iconDarkMode}` } />
                : <BsSunFill className={ styles.icon } />
            }
        </button>
    );
};

export { ThemeToggleButton };