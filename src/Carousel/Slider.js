import React, { Component } from 'react';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import './Slider.css';

class Slider extends Component {
  constructor(props){
    super(props);

    this.state = {
      slideCount: 0,
      backgroundURL: []
    }
  }

  handleRightArrow = () => {
    let img = document.getElementById("slideImg").classList;
    img.add("slide-right");
    setTimeout( () => {
      if ( this.state.slideCount < this.state.backgroundURL.length - 1 ){
        this.setState({
          slideCount: this.state.slideCount + 1
        })
      } else {
        this.setState({
          slideCount: 0
        })
      }
      img.remove("slide-right");
    }, 1002)
    console.log(img)
  }
  handleLeftArrow = () => {
    if ( this.state.slideCount > 0 ){
      this.setState({
        slideCount: this.state.slideCount - 1
      })
    } else {
      this.setState({
        slideCount: this.state.backgroundURL.length
      })
    }
  }

  render() {

    for (var value in this.props) {
      this.state.backgroundURL.push(this.props[value]);
    }
    
    let background = {
      backgroundImage: `url(${this.state.backgroundURL[this.state.slideCount]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '350px',
      width: '500px'
    }
    
    return (
      <div className='slider'>
        <PrevArrow prev={ this.handleLeftArrow } />
        {/* <span className='left-arrow arrows' onClick={ this.handleLeftArrow }></span> */}
        <div className="" id='slideImg' style={ background }></div>
        <NextArrow next={ this.handleRightArrow } />
      </div>
    );
  }
}

export default Slider;