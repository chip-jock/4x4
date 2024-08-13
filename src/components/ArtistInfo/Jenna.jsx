import React from 'react';
import jenna0 from '/src/assets/4.jenna/4x4-jenna0.webp';
import jenna1 from '/src/assets/4.jenna/4x4-jenna1.webp';
import jenna2 from '/src/assets/4.jenna/4x4-jenna2.webp';
import jenna3 from '/src/assets/4.jenna/4x4-jenna3.webp';

const Jenna = () => {
  return (
    <div>
      <div>
        <p>
          <span className="font-bold italic">Silk Flesh</span> - 2024
        </p>
        <p>
          Silk Tussar & Muga Dyed with Cochineal, Poplar, Polyurethane
          wax, Epoxy glue, Foam, Dacron
        </p>
        <p>39” x 14” x 18”</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <img src={jenna0} />
        <img src={jenna1} />
        <img src={jenna2} />
        <img src={jenna3} />
      </div>
      <div>
        <p>
          Jenna-Katheryn Heinemann is a visual artist currently based
          in Victoria, BC. Her work challenges normativity by
          exploring themes of memory, lineage and interpersonal
          relationships. She aims to redefine representational forms
          through abstraction and design by working primarily with
          ceramic, metal and wood based sculptures.
        </p>
      </div>

      <div>
        Instagram:
        <a href="https://www.instagram.com/jenna_katheryn/">
          {' '}
          @jenna_katheryn
        </a>
      </div>
      <div>
        Website:
        <a href="https://www.jenna-katheryn.com/">
          {' '}
          jenna-katheryn.com
        </a>
      </div>
    </div>
  );
};

export default Jenna;
