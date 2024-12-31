import React from "react";
import "./herosec.css"; // Optional for custom styles
import bgpic from './assets/owo.jpg'

const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      {/* Background Image */}
      <img 
        src={bgpic} 
        alt="Hero Background" 
        className="hero-bg" 
      />

      {/* Content */}
      <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Welcome to Antariksh's 2024 Almanac</h2>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <line></line>
              JAN-FEB-MARCH-APR-MAY-JUN-JUL-AUG-SEP-OCT-NOV-DEC
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
