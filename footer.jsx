import React from 'react';
import './navbar.css';

const Footer = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <h4>Antariksh</h4>
          <p>Astronomy Club of Vishwakarma Institutes</p>
  </div>
  <div className="navbar-center">
  <div className="social-links">
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Antariksh Astronomy Club</span></strong>. All Rights Reserved
          </div>
  </div>
</nav>
);
};

export default Footer;