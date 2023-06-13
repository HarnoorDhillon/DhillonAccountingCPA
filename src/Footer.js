import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p> 
        <i className="fa fa-copyright" aria-hidden="true"></i> {year} Dhillon Accounting CPA Inc. All Rights Reserved. Website built by Harnoor Dhillon.
        <a href="https://www.linkedin.com/in/harnoor-dhillon-447aa818a/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square footer-linkedin" aria-hidden="true"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
