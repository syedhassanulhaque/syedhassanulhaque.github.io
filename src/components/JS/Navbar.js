import React from 'react'
// import { Link } from "react-router-dom";
import '../CSS/Navbar.css'
import logo from'../logo.jpeg'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return (
        <header>
		<nav className="navbar">
		  <a className="navbar-logo" href="#" ><img src={logo} alt="" /></a>
		  <ul className="navbar-menu">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About </Link></li>
			<li><Link to="/experiences">Experiences</Link></li>
			<li><Link to="/services">Services</Link></li>
			<li><Link to="/projects">Projects</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		  </ul>
		  <div className="navbar-toggle">
			<span></span>
			<span></span>
			<span></span>
		  </div>
		</nav>
	  </header>
    )
}

export default Navbar;