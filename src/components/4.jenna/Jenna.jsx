import React, { useState } from 'react';
import Jenna0 from '/src/assets/4.jenna/4x4-jenna0.webp';
import Jenna1 from '/src/assets/4.jenna/4x4-jenna1.webp';
import Jenna2 from '/src/assets/4.jenna/4x4-jenna2.webp';
import Jenna3 from '/src/assets/4.jenna/4x4-jenna3.webp';

const Jenna = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [Jenna0, Jenna1, Jenna2, Jenna3];

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
                alt={`Jenna Image ${index}`}
                className="cursor-pointer w-full object-cover"
                onClick={() => openLightbox(image)}
              />
            ))}
          </div>
          <div className="py-4">
            <p>
              <span className="font-bold italic">Silk Flesh</span> -
              2024
            </p>
            <div className="py-4">
              <p className="py-1">
                Silk Tussar & Muga Dyed with Cochineal, Poplar,
                Polyurethane wax, Epoxy glue, Foam, Dacron
              </p>
              <p className="py-1">39” x 14” x 18”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex mx-auto my-2 border-t border-gray-500 w-1/3"></div>
      {/* Bio and Links */}
      <div className="text-justify pb-16">
        <div className="md:grid md:grid-cols-2">
          <div className="mb-4 pr-4">
            <p>
              <span className="font-bold italic">
                Jenna-Katheryn Heinemann
              </span>{' '}
              is a visual artist currently based in Victoria, BC. Her
              work challenges normativity by exploring themes of
              memory, lineage, and interpersonal relationships. She
              aims to redefine representational forms through
              abstraction and design by working primarily with
              ceramic, metal, and wood-based sculptures.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold">Instagram:</p>
              <a
                href="https://www.instagram.com/jenna_katheryn/"
                className="hover:underline"
              >
                @jenna_katheryn
              </a>
            </div>
            <div>
              <p className="font-bold">Website:</p>
              <a
                href="https://www.jenna-katheryn.com/"
                className="hover:underline"
              >
                jenna-katheryn.com
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
              alt={`Jenna Image`}
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

export default Jenna;
