import React, { useState } from 'react';
import zac0 from '/src/assets/2.zac/4x4-zac0.webp';
import zac1 from '/src/assets/2.zac/4x4-zac1.webp';
import zac2 from '/src/assets/2.zac/4x4-zac2.webp';

const Zac = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [zac0, zac1, zac2];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
                alt={`Zac Benloulou Artwork ${index + 1}`}
                className="cursor-pointer w-full object-cover"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
          <div className="py-4">
            <p>
              <span className="font-bold italic">Wall Unit</span> -
              2024
            </p>
            <div>
              <p className="py-1">
                Stainless Steel, ST-70 style amplifier, Proteus
                Pre-amplifier, PS Audio Phono Stage, Technics SL-1100,
                custom connectors, Altec 416b, Altec 812 with 511
                Mid-Frequency Horn, Pioneer PT-R7 Ribbon Super Tweeter
              </p>
              <p className="py-1">72” x 36” x 18”</p>
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
              <span className="font-bold italic">Zac Benloulou </span>{' '}
              is a Victoria based artist interested in the technical
              complexity and methodic design of sound. Inspired by the
              purity of high fidelity audio quality, Zac applies his
              passion for the built environment by creating built-in
              yet modular sound systems. His work has been featured
              internationally, as his designs have spanned numerous
              mediums from digital, to architectural and also sound
              design.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold">Instagram:</p>
              <a
                href="https://www.instagram.com/zacbenloulou/"
                className="hover:underline"
              >
                @zacbenloulou
              </a>
            </div>
            <div>
              <p className="font-bold">Website:</p>
              <a
                href="https://pavilion.agency/"
                className="hover:underline"
              >
                pavilion.agency
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          id="lightbox-overlay"
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closeLightbox}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
          >
            {/* Previous Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-800 bg-opacity-50"
              onClick={goToPrevious}
            >
              ‹
            </button>
            {/* Current Image */}
            <img
              src={images[currentImageIndex]}
              alt={`Zac Benloulou Artwork ${currentImageIndex + 1}`}
              className="max-w-full max-h-screen"
            />
            {/* Next Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-gray-800 bg-opacity-50"
              onClick={goToNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Zac;
