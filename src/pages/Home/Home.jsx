import React from 'react';

import main0 from '/src/assets/0.main/4x4-main0.webp';
import main1 from '/src/assets/0.main/4x4-main1.webp';
import main2 from '/src/assets/0.main/4x4-main2.webp';
import main3 from '/src/assets/0.main/4x4-main3.webp';

const Home = () => {
  return (
    <div className="flex-1 md:ml-72">
      <img src={main0} alt="Main Image 0" className="w-full" />
      <img src={main1} alt="Main Image 1" className="w-full" />
      <img src={main2} alt="Main Image 2" className="w-full" />
      <img src={main3} alt="Main Image 3" className="w-full" />
    </div>
  );
};

export default Home;
