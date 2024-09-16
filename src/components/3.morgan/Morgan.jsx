import React, { useState } from 'react';
import Morgan0 from '/src/assets/3.morgan/4x4-morgan0.webp';
import Morgan1 from '/src/assets/3.morgan/4x4-morgan1.webp';
import Morgan2 from '/src/assets/3.morgan/4x4-morgan2.webp';

const Morgan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [Morgan0, Morgan1, Morgan2];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const showPrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex =
      (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="p-6 flex flex-col gap-6 md:ml-96 md:h-screen pt-16 text-lg">
      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Morgan Image ${index}`}
                className="cursor-pointer w-full object-cover"
                onClick={() => openLightbox(image)}
              />
            ))}
          </div>
          <div className="py-4">
            <p>
              <span className="font-bold italic">Untitled</span> -
              2024
            </p>
            <div className="py-4">
              <p className="py-1">
                Salvaged metals, steel ball bearings, wood spheric
                balls
              </p>
              <p className="py-1">5' x 3' x 3'</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-auto my-2 border-t border-gray-500 w-1/3"></div>
      {/* Bio and Links */}
      <div className="text-justify pb-16">
        <div className="md:grid md:grid-cols-2">
          <div className="mb-4 pr-4">
            <p>
              <span className="font-bold italic">Morgan Hass </span>{' '}
              is a Victoria-based designer working in upholstery and
              interior decoration. Her current project, The Found
              Studio, began in 2022 with her passion to fuse
              sustainability with meticulous restoration. Since then,
              Morgan’s work has been featured in Canada and the United
              States.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold">Instagram: </p>
              <a
                href="https://www.instagram.com/thefound.studio/"
                className="hover:underline"
              >
                @thefound.studio
              </a>
            </div>
            <div>
              <p className="font-bold">Website: </p>
              <a
                href="https://www.thefoundstudio.com/"
                className="hover:underline"
              >
                thefoundstudio.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
          >
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-800 bg-opacity-50"
              onClick={showPrev}
            >
              ‹
            </button>
            <img
              src={selectedImage}
              alt={`Morgan Image`}
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-800 bg-opacity-50"
              onClick={showNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Morgan;
