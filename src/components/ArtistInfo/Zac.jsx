import React from 'react';
import zac0 from '/src/assets/2.zac/4x4-zac0.webp';
import zac1 from '/src/assets/2.zac/4x4-zac1.webp';
import zac2 from '/src/assets/2.zac/4x4-zac2.webp';

const Zac = () => {
  return (
    <div>
      <div>
        <p>
          <span className="font-bold italic">Wall Unit</span>
        </p>
        <p>
          Stainless Steel, ST-70 style amplifier, Proteus
          Pre-amplifier, PS audio Phono Stage, technics sl 1100,
          custom connectors, Altec 416b, Altec 812 with 511
          MidFrequency Horn, PIONEER PT-R7 Ribbon Super Tweeter
        </p>
        <p>72” x 36” x 18”</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <img
            className="flex align-middle justify-center w-full"
            src={zac0}
          />
        </div>
        <img src={zac1} />
        <img src={zac2} />
      </div>
      <div>
        <p>
          Zac Benloulou is a Victoria based artist interested in the
          technical complexity and methodic design of sound. Inspired
          by the purity of high fidelity audio quality, Zac applies
          his passion for the built environment by creating built-in
          yet modular sound systems. His work has been featured
          internationally, as his designs have spanned numerous
          mediums from digital, to architectural and also sound
          design.
        </p>
      </div>

      <div>
        Instagram:
        <a href="https://www.instagram.com/zacbenloulou/">
          {' '}
          @zacbenloulou
        </a>
      </div>
      <div>
        Website:
        <a href="https://pavilion.agency/"> pavilion.agency</a>
      </div>
    </div>
  );
};

export default Zac;
