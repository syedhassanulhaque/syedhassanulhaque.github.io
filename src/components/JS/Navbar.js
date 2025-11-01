import React, { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import logo from '../logo.jpeg'
import { Link, NavLink } from 'react-router-dom'

const themes = ['dark', 'indigo', 'teal', 'sunset']

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('site-theme') || 'teal'
    setTheme(saved)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('site-theme', theme)
  }, [theme])

  const closeMenu = () => setOpen(false)

  const cycleTheme = () => {
    const idx = themes.indexOf(theme)
    const next = themes[(idx + 1) % themes.length]
    setTheme(next)
  }

  return (
    <header>
      <nav className="navbar">
        <Link className="navbar-logo" to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={`navbar-menu ${open ? 'show' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experiences" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Experiences
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-btn"
            title={`Switch theme (current: ${theme})`}
            onClick={cycleTheme}
          >
            {`Theme: ${theme}`}
          </button>
          <button
            aria-label="Toggle navigation menu"
            className="navbar-toggle"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;