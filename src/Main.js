import React from 'react';
import './Main.css';
import ContentBox from './ContentBox';
import { Element } from 'react-scroll';

const Main = () => {
  return (
    <Element id="home" className="main">
      <ContentBox /> {/* Your content goes here */}
    </Element>
  );
};

export default Main;
