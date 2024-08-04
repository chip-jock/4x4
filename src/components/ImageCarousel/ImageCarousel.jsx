import React from 'react';
import carousel0 from '/src/assets/carousel0.jpg';
import carousel1 from '/src/assets/carousel1.jpg';
import carousel2 from '/src/assets/carousel2.jpg';
import carousel3 from '/src/assets/carousel3.jpg';

const ImageCarousel = () => {
  return (
    <div>
      <div className="grid ">
        <img src={carousel0} />
        <img src={carousel1} />
        <img src={carousel2} />
        <img src={carousel3} />
      </div>
    </div>
  );
};

export default ImageCarousel;
