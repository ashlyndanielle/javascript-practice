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
  componentWillMount() {
    for (var value in this.props) {
    this.state.backgroundURL.push(this.props[value]);
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
    }, 500) 
  }
  handleLeftArrow = () => {
    let img = document.getElementById('slideImg').classList;
    img.add('slide-left');
    setTimeout( () => {
      if ( this.state.slideCount > 0 ){
        this.setState({
          slideCount: this.state.slideCount - 1
        })
      } else {
        this.setState({
          slideCount: this.state.backgroundURL.length - 1
        })
      }
      img.remove('slide-left');
    }, 500)
  }
  handleDotClick = i => {
    this.setState({
      slideCount: i
    })
    var el = document.querySelectorAll('.dot-container div');
    for (let i = 0; i < el.length; i++) {
      el[i].onclick = function() {
        var c = 0;
        while (c < el.length) {
          el[c++].className = 'circle';
        }
        el[i].className = 'circle active-dot';
      };
    }
  }

  render() {
    
    let background = {
      backgroundImage: `url(${this.state.backgroundURL[this.state.slideCount]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      width: '600px'
    }

    let dot = this.state.backgroundURL.map( (image, i) => {
      return <div className='circle' key={i} onClick={ () => this.handleDotClick(i) }></div>
    })
    
    return (
      <section className='carousel-container'>
        <div className='slider center'>
          <PrevArrow prev={ this.handleLeftArrow } />
          <div className="" id='slideImg' style={ background }></div>
          <NextArrow next={ this.handleRightArrow } />
        </div>
        <div className='dot-container center'>
          {dot}
        </div>
      </section>
    );
  }
}

export default Slider;