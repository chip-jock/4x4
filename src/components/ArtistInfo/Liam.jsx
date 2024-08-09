import React from 'react';
import liam0 from '/src/assets/liam0.jpg';
import liam1 from '/src/assets/liam1.jpg';
import liam2 from '/src/assets/liam2.jpg';
import liam3 from '/src/assets/liam3.jpg';

const Liam = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-8 py-8">
        <div>
          <p>
            <span className="font-bold italic">AT11</span> - 2024
          </p>
          <p>Powder coated steel</p>
          <p>16” x 10” x 42”</p>
        </div>
        <div>
          <p>
            <span className="font-bold italic">LC04</span> - Asemic
            embroidery edition ft. Anna Malicka, 2024
          </p>
          <p>Powder coated steel</p>
          <p>16” x 10” x 42”</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <img src={liam0} />
        <img src={liam1} />
        <img src={liam2} />
        <img src={liam3} />
      </div>
      <div className="grid grid-cols-2 gap-8 py-8">
        <div>
          <p>
            Liam McClure is a Vancouver based experimental furniture
            maker. In 2023 he showed work at Stockholm Furniture Fair,
            NYCxDESIGN, and Vienna Design Week.
          </p>
        </div>
        <div>
          <div>
            <a href="https://www.instagram.com/l_h_mcc/"> @l_h_mcc</a>
          </div>
          <div>
            <a href="liammcclure.com"> liammcclure.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liam;
