import React, { useState } from 'react';
import liam0 from '/src/assets/1.liam/4x4-liam0.webp';
import liam1 from '/src/assets/1.liam/4x4-liam1.webp';
import liam2 from '/src/assets/1.liam/4x4-liam2.webp';
import liam3 from '/src/assets/1.liam/4x4-liam3.webp';

const Liam = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [liam0, liam1, liam2, liam3];

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
      {/* Centered vertically */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* AT11 */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[liam0, liam1].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Liam McClure Artwork ${index + 1}`}
                className="cursor-pointer w-full object-cover"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
          <div className="py-4">
            <p>
              <span className="font-bold italic">AT11</span> - 2024
            </p>
            <div>
              <p className="py-1">Powder coated steel</p>
              <p className="py-1">16” x 10” x 42”</p>
            </div>
          </div>
        </div>

        {/* LC04 */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[liam2, liam3].map((image, index) => (
              <img
                key={index + 2}
                src={image}
                alt={`Liam McClure Artwork ${index + 3}`}
                className="cursor-pointer w-full object-cover"
                onClick={() => openLightbox(index + 2)}
              />
            ))}
          </div>
          <div className="py-4">
            <p>
              <span className="font-bold italic">LC04</span> - 2024
            </p>
            <div>
              <p className="py-1">
                Asemic embroidery edition ft.{' '}
                <span className="font-bold italic">Anna Malicka</span>
              </p>
              <p className="py-1">
                Powder coated steel, leather, quilted nylon, cotton
                thread, nylon straps, hardware
              </p>
              <p className="py-1">30” x 26” x 28”</p>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="flex mx-auto my-2 border-t border-gray-500 w-1/3"></div>
      {/* Artist Bio */}
      <div className="text-justify pb-16">
        <div className="md:grid md:grid-cols-2">
          <div className="mb-4 pr-4">
            <p>
              <span className="font-bold italic">Liam McClure </span>{' '}
              {''}is a Vancouver based experimental furniture maker.
              In 2023 he showed work at Stockholm Furniture Fair,
              NYCxDESIGN, and Vienna Design Week.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold">Instagram:</p>
              <a
                href="https://www.instagram.com/l_h_mcc/"
                className="hover:underline"
              >
                @l_h_mcc
              </a>
            </div>
            <div>
              <p className="font-bold">Website:</p>
              <a
                href="https://www.liammcclure.com/"
                className="hover:underline"
              >
                liammcclure.com
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
              alt={`Liam McClure Artwork ${currentImageIndex + 1}`}
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

export default Liam;
