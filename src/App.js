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
import Skills from './components/JS/Skills';
import Contact from './components/JS/Contact';

function App() {
  return (
    <div>
      <Router >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/>}></Route>
        <Route exact path="/about" element={ <About/>}></Route>
        <Route exact path="/experiences" element={ <Experiences/>}></Route>
        <Route exact path="/skills" element={ <Skills/>}></Route>
        <Route exact path="/contact" element={ <Contact/>}></Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
