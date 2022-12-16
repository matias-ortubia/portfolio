import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <h1>Home</h1> } />
        <Route path="/home" element={ <h1>Home</h1> } />
        <Route path="/index" element={ <h1>Home</h1> } />
        <Route path="/projects" element={ <h1>Projects</h1> } />
        <Route path="/contact" element={ <h1>Contact</h1> } />
        <Route path="*" element={ <h1>404 Not Found</h1> } />
      </Routes>
    </Router>
  )
}

export default App