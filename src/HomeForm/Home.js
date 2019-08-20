import React from 'react';
import '../Static/Styles/css/home.min.css';
import Carousel from './Carousel.js';
import About from './About.js';

const homeComponent = () => {
  return (
    <div className="home-component">
      <h1 className="home-title">
        Welcome to SellMeMore, service and goods exchange website
      </h1>
      <Carousel/>
      <About />
    </div>
  );
}

export default homeComponent;