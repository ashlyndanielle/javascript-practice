import React from 'react';

import URL from '../assets/river.jpg';

const SlideThree = (props) => {

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

export default SlideThree;