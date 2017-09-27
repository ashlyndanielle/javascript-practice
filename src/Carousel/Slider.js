import React, { Component } from 'react';

// import SlideOne from './SlideOne';
// import SlideTwo from './SlideTwo';
// import SlideThree from './SlideThree';

// import butterfly from '../assets/butterfly.jpg';
// import mountains from '../assets/Mountains.jpg';
// import river from '../assets/river.jpg';

import './Slider.css';

class Slider extends Component {
  constructor(props){
    super(props);

  //   this.state = {
  //     slideCount: 1,
  //   }
  // }

  // handleRightArrow = () => {
  //   if (this.state.slideCount < 3){
  //     this.setState({
  //       slideCount: this.state.slideCount + 1
  //     })
  //   } else {
  //     this.setState({
  //       slideCount: 1
  //     })
  //   }
  // }
  // handleLeftArrow = () => {
  //   if (this.state.slideCount > 1){
  //     this.setState({
  //       slideCount: this.state.slideCount - 1
  //     })
  //   } else {
  //     this.setState({
  //       slideCount: 3
  //     })
  //   }
  // }

    this.state = {
      slideCount: 2,
      backgroundURL: []
    }
  }

  // handleRightArrow = () => {
  //   if ( this.state.slideCount < backgroundURL.length - 1 ){
  //     this.setState({
  //       slideCount: this.state.slideCount + 1
  //     })
  //   } else {
  //     this.setState({
  //       slideCount: 0
  //     })
  //   }
  // }
  // handleLeftArrow = () => {
  //   if ( this.state.slideCount > 0 ){
  //     this.setState({
  //       slideCount: this.state.slideCount - 1
  //     })
  //   } else {
  //     this.setState({
  //       slideCount: backgroundURL.length
  //     })
  //   }
  // }

  render() {
    for (var value in this.props) {
      this.state.backgroundURL.push(this.props[value]);
      console.log('cats ', this.state.backgroundURL)
    }
    
    let background = {
      backgroundImage: `url(${this.state.backgroundURL[this.state.slideCount]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      width: '300px'
    }
    
    return (
      <div className='slider'>
        <span className='left-arrow arrows' onClick={ this.handleLeftArrow }></span>
        <div style={ background }></div>
        <span className='right-arrow arrows' onClick={ this.handleRightArrow }></span>
      </div>
    );
  }
}

export default Slider;