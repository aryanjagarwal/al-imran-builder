import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import News from '../components/News';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <About />
      <News />
    </div>
  );
};

export default Home;