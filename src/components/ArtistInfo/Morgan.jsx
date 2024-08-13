import React from 'react';
import morgan0 from '/src/assets/3.morgan/4x4-morgan0.webp';
import morgan1 from '/src/assets/3.morgan/4x4-morgan1.webp';
import morgan2 from '/src/assets/3.morgan/4x4-morgan2.webp';

const Morgan = () => {
  return (
    <div>
      <div>
        <p>
          <span className="font-bold italic">Untitled</span> - 2024
        </p>
        <p>
          Salvaged metals, steel ball bearings, wood spheric balls
        </p>
        <p>5' x 3' x 3'</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img src={morgan0} />
        <img src={morgan1} />
        <img src={morgan2} />
      </div>
      <div>
        <p>
          Morgan Hass is a Victoria based designer working in
          upholstery and interior decoration. Her current project The
          Found Studio began in 2022 with her passion to fuse
          sustainability with meticulous restoration. Since then
          Morgan’s work has been featured in Canada and the United
          States.
        </p>
      </div>
      <div>
        Instagram:
        <a href="https://www.instagram.com/thefound.studio/">
          {' '}
          @thefound.studio
        </a>
      </div>
      <div>
        Website:
        <a href="https://www.thefoundstudio.com/">
          {' '}
          thefoundstudio.com
        </a>
      </div>
    </div>
  );
};

export default Morgan;
