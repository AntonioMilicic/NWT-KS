import React, {Component} from 'react';
import '../Static/Styles/css/carousel.min.css';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      selectedCarousel: 0,
      carousel: [{
        thumbnailTitle: 'How to make your way?',
        thumbtxt: `All the links are contained on top of the page.`,
        cssId: `thumbnail1`
      }, {
        thumbnailTitle: 'What are we all about?',
        thumbtxt: 'We make your life simple, find all you need in one click of a mouse: names, prices, ratings...',
        cssId: `thumbnail2`
      }, {
        thumbnailTitle: 'How to complete a deal?',
        thumbtxt: `By clicking on "Cart" link or icon, you will be redirected to new page with info needed to finish the deal`,
        cssId: `thumbnail3`
      }, {
        thumbnailTitle: 'Sign up?',
        thumbtxt: 'Sign up so you can follow and save your favorite deals, expand your user experience and more...',
        cssId: `thumbnail4`
      }
      ]
    };
  }
  componentDidMount() {
    const intervalId = setInterval(() => this.changeSelectedCarousel('next'), 15000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  changeSelectedCarousel(command) {
    let selectedCarousel = this.state.selectedCarousel;
    const lastIndex = this.state.carousel.length - 1;

    if (command === 'previous') {
      if (selectedCarousel <= 0) selectedCarousel = lastIndex;
      else selectedCarousel--;
    } else if (command === 'next') {
      if (selectedCarousel < lastIndex) selectedCarousel++;
      else selectedCarousel = 0;
    }

    clearInterval(this.state.intervalId);
    const intervalId = setInterval(() => this.changeSelectedCarousel('next'), 10000);
    this.setState({ selectedCarousel, intervalId });
  }

  render() {
    return (
      <div className="carousel-container">
        <article className="carousel-display" id={this.state.carousel[this.state.selectedCarousel].cssId}>
          <i onClick={() => this.changeSelectedCarousel('previous')} className="fas fa-arrow-left arrow-left"/>
          <i onClick={() => this.changeSelectedCarousel('next')} className="fas fa-arrow-right arrow-right"/>
          <div className="carousel-box">
            <h3>
              {this.state.carousel[this.state.selectedCarousel].thumbnailTitle}
            </h3>
            <p>
              {this.state.carousel[this.state.selectedCarousel].thumbtxt}
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default Carousel;
