import React, { useState, useEffect } from 'react';
import logo from './images/dhilloncpa.jpeg'; // update the path if needed
import { Link } from 'react-scroll';
import './Navbar.css';

const NavBar = () => {
    const [shrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isShrunk = window.scrollY > 50; // Change this to control when the navbar shrinks
            if (isShrunk !== shrunk) {
                setShrunk(!shrunk);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('scroll', handleScroll);
        };
    }, [shrunk]);

    const phoneNumber = "Call: (778)-316-1086"; // replace with your phone number
    const email = "info@dhilloncpa.com"; // replace with your email

    return (
        <nav className={`nav ${shrunk ? 'shrunk' : ''}`}>
            <div className="navbar-content">
                <img src={logo} alt="Logo" className={`logo ${shrunk ? 'shrunk' : ''}`} />
                <div className="top-boxes">
                    <a href={`tel:${phoneNumber}`} className={`top-box ${shrunk ? 'shrunk' : ''}`}>{phoneNumber}</a>
                    <a href={`mailto:${email}`} className={`top-box ${shrunk ? 'shrunk' : ''}`}>{email}</a>
                </div>
                <div className="links">
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                        <li><Link activeClass="active" to="services" spy={true} smooth={true} duration={500}>Services</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

