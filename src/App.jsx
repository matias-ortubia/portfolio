import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/index" element={ <Home /> } />
          <Route path="/projects" element={ <h1>Projects</h1> } />
          <Route path="/contact" element={ <h1>Contact</h1> } />
          <Route path="*" element={ <h1>404 Not Found</h1> } />
        </Routes>
        <Navbar />
      </Router>
    </div>
  )
}

export default App