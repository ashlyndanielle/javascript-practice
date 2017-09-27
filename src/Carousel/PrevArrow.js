import React from 'react';

const PrevArrow = ({ prev }) => {
  return (
    <div className='arrows left-arrow' onClick={ prev } ></div>
  );
};

export default PrevArrow;