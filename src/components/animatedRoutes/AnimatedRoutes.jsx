import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Contact, NotFound } from '../../pages';
import './animatedRoutes.css';

const AnimatedRoutes = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location, displayLocation]);

    const handleAnimationEnd = () => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
    };

    return (
        <div className={ `content ${transitionStage}` }
             onAnimationEnd={handleAnimationEnd}>
            <Routes location={ displayLocation }>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/index" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
            {/*    <Route path="/contact" element={ <Contact /> } /> */}
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </div>
    );
};

export { AnimatedRoutes };