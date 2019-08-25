import React,{Component} from 'react';
import '../Static/Styles/css/home.min.css';
import Carousel from './Carousel.js';
import About from './About.js';

class homeComponent extends Component {
  render(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
      <div className="home-component">
        <h1 className="home-title">
          Welcome to SellMeMore,<br/>service and goods exchange website
        </h1>
        <Carousel/>
        <About />
      </div>
    )
  }
}

export default homeComponent;