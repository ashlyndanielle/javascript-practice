import React from 'react';

import Slider from './Carousel/Slider';

import butterfly from './assets/butterfly.jpg';
import mountains from './assets/Mountains.jpg';
import river from './assets/river.jpg';
import ice from './assets/ice.jpg';
import ocean from './assets/ocean.jpg';

const Test = () => {
  return (
    <div>
      <h1 className='center'>Carousel Practice</h1>
      <Slider 
        butterfly={butterfly}
        moutains={mountains}
        river={river}
        ice={ice}
        ocean={ocean}
      />
    </div>
  );
};

export default Test;