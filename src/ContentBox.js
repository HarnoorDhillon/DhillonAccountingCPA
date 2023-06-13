import React from 'react';
import './ContentBox.css';
import { Link } from 'react-scroll';

const ContentBox = () => {
  return (
    <div className="content-box">
      <h1 className="content-heading">Working with you for a better financial future</h1>
      <p className="content-text">Dhillon Accounting CPA is a full-service accounting firm dedicated to maximizing your financial benefits for both Personal and Business Taxes.</p>
      <p className="offer">FOR FREE 30 MINUTE CONSULTATION</p>
      <Link to="contact" spy={true} smooth={true} duration={500}>
        <button className="start-button">Get Started Now</button>
      </Link>
    </div>
  );
};

export default ContentBox;
