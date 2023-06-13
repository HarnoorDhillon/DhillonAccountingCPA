import React from 'react';
import './About.css';
import TypingText from './TypingText';
import { Element } from 'react-scroll';
import aboutImage from './images/about.jpg'; // replace this with the path to your image file

const About = () => {
  return (
    <Element id="about" className="about">
      <div className="about-left">
        <h1>About Us</h1>
        <img src={aboutImage} alt="About Us" className="about-img" />
      </div>
      <div className="about-divider"></div>
      <div className="about-right">
        <TypingText />
        <p>Situated in Cloverdale area of Surrey, British Columbia, <span className="highlighted">Dhillon Accounting CPA Inc.</span> is a professional accounting firm established with the <span className="highlighted">vision</span> of providing clients with financial tools and results they need, so that they can prosper in what they <span className="highlighted">love</span> to do in their personal or business life. With our <span className="highlighted">dedicated team</span>, we have catered to individual and small to medium sized businesses clients in and around Metro Vancouver and Fraser Valley <span className="highlighted">since 2016</span>. </p>
      </div>
    </Element>
  );
};

export default About;
