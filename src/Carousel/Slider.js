import React, { Component } from 'react';

import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

import './Slider.css';

class Slider extends Component {
  constructor(props){
    super(props);

    this.state = {
      slideCount: 1
    }
  }

  handleRightArrow = () => {
    if (this.state.slideCount < 3){
      this.setState({
        slideCount: this.state.slideCount + 1
      })
    } else {
      this.setState({
        slideCount: 1
      })
    }
  }
  handleLeftArrow = () => {
    if (this.state.slideCount > 1){
      this.setState({
        slideCount: this.state.slideCount - 1
      })
    } else {
      this.setState({
        slideCount: 3
      })
    }
  }

  render() {
    return (
      <div className='slider'>
        <span className='left-arrow arrows' onClick={ this.handleLeftArrow }></span>
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }
        <span className='right-arrow arrows' onClick={ this.handleRightArrow }></span>
      </div>
    );
  }
}

export default Slider;