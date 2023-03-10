import { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext.js';
import { AnimatedRoutes, Header, Navbar } from './components';
import './App.css';

function App() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    let r;
    if(darkMode) {
      r = document.querySelector('.darkMode');
    } else {
      r = document.querySelector('.lightMode');
    }
    let rs = getComputedStyle(r);
    document.body.style.backgroundColor = rs.getPropertyValue('--color-primary');
  }, [darkMode]);

  return (
    <div className={ `container ${darkMode ? "darkMode" : "lightMode"}` }>
      <Header />
      <Router>
        <AnimatedRoutes />
        <Navbar />
      </Router>
    </div>
  )
}

export default App