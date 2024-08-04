import React, { useState } from 'react';
import Liam from '/src/components/ArtistInfo/Liam';
import Zac from '/src/components/ArtistInfo/Zac';
import Morgan from '/src/components/ArtistInfo/Morgan';
import Jenna from '/src/components/ArtistInfo/Jenna';

const navigation = [
  {
    name: 'AT11 + LC04',
    href: '/at11-lc04-liam-mcclure',
    current: false,
    dropdownContent: <Liam />,
  },
  {
    name: 'Wall Unit',
    href: '/wall-unit-zach-benloulou',
    current: false,
    dropdownContent: <Zac />,
  },
  {
    name: 'Untitled',
    href: '/untitled-morgan-hass',
    current: false,
    dropdownContent: <Morgan />,
  },
  {
    name: 'Silk Flesh',
    href: '/silk-flesh-jenna-katheryn-heinemann',
    current: false,
    dropdownContent: <Jenna />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropdown = (name) => {
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="flex flex-row font-montsans bg-white p-4 fixed">
      {navigation.map((item) => (
        <div key={item.name} className="relative">
          <a
            onClick={() => openDropdown(item.name)}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:text-white',
              'px-3 py-2 text-lg cursor-pointer'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        </div>
      ))}

      {/* Fullscreen modal */}
      {activeDropdown && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full">
            <button
              onClick={closeDropdown}
              className="absolute top-0 right-0 p-2 m-4 rounded-md bg-gray-300 hover:bg-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="py-1 px-4">
              {
                navigation.find(
                  (item) => item.name === activeDropdown
                ).dropdownContent
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
