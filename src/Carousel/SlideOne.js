import React from 'react';

import URL from '../assets/Mountains.jpg'

const SlideOne = (props) => {

  let background = {
    backgroundImage: `url${URL}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    width: '200px'
  }

  return (
    <div style={ background }>
      
    </div>
  );
};

export default SlideOne;