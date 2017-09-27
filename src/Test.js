import React from 'react';

import Slider from './Carousel/Slider';

import butterfly from './assets/butterfly.jpg';
import mountains from './assets/Mountains.jpg';
import river from './assets/river.jpg';

const Test = () => {
  return (
    <div>
      <Slider 
        butterfly={ butterfly }
        mountains={ mountains }
        river={ river }
      />
    </div>
  );
};

export default Test;