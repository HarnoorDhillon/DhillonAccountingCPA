import React from 'react';
import './App.css';
import Main from './Main.js';
import Navigation from './Navbar';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
