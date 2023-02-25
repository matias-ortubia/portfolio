import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeContextWrapper = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            { children }
        </ThemeContext.Provider>
    );
};