import React from 'react'
import './App.css';
import Navbar from './components/JS/Navbar';
import Home from './components/JS/Home';
import About from './components/JS/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Experiences from './components/JS/Experiences';
import Contact from './components/JS/Contact';
import Projects from './components/JS/Projects';

function App() {
  return (
    <div>
      <Router >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experiences" element={<Experiences />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
