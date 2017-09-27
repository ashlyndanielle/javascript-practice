import React, { Component } from 'react';

import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

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
      slideCount: 0,
      backgroundURL: [0,1,2,3]
    }
  }

  handleRightArrow = () => {
    if ( this.state.slideCount < backgroundURL.length - 1 ){
      this.setState({
        slideCount: this.state.slideCount + 1
      })
    } else {
      this.setState({
        slideCount: 0
      })
    }
  }
  handleLeftArrow = () => {
    if ( this.state.slideCount > 0 ){
      this.setState({
        slideCount: this.state.slideCount - 1
      })
    } else {
      this.setState({
        slideCount: backgroundURL.length
      })
    }
  }

  render() {
    console.log(this.props.children)
    
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
        {/* { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null } */}
        <span className='right-arrow arrows' onClick={ this.handleRightArrow }></span>
      </div>
    );
  }
}

export default Slider;