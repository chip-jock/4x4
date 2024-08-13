import React from 'react';
import main0 from '/src/assets/0.main/4x4-main0.webp';
import main1 from '/src/assets/0.main/4x4-main1.webp';
import main2 from '/src/assets/0.main/4x4-main2.webp';
import main3 from '/src/assets/0.main/4x4-main3.webp';

const ImageCarousel = () => {
  return (
    <div>
      <div className="grid">
        <img src={main0} />
        <img src={main1} />
        <img src={main2} />
        <img src={main3} />
      </div>
    </div>
  );
};

export default ImageCarousel;
