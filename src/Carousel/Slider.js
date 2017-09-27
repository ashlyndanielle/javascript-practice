import React, { Component } from 'react';

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
    if ( this.state.slideCount < this.state.backgroundURL.length - 1 ){
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
      height: '300px',
      width: '400px'
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