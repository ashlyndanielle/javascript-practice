import React from 'react';

import URL from '../assets/butterfly.jpg'

const SlideTwo = (props) => {

  let background = {
    backgroundImage: `url(${URL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '313px',
    width: '500px'
  }
  return (
    <div style={ background }>
      
    </div>
  );
};

export default SlideTwo;