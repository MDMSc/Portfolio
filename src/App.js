import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
