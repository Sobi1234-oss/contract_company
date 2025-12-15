import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/logo.png";  // ✅ Correct path
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* Logo */}
      <NavLink to="/" className="logo-wrapper">
  <img src={logo} alt="Logo" className="site-logo" />
</NavLink>

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" className="custom-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about-us" className="custom-link" onClick={closeMenu}>About</NavLink>
        <NavLink to="/our-services" className="custom-link" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/clients-page" className="custom-link" onClick={closeMenu}>Our Clients</NavLink>
       
        <NavLink to="/contact-page" className="custom-link" onClick={closeMenu}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
