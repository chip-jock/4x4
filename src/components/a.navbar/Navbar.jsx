import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
  {
    name: '4x4',
    href: '/',
    current: false,
    bold: true, // Add a flag for bold styling
  },
  { name: 'divider', divider: true },
  {
    name: 'Exhibition Text',
    href: '/exhibition-text',
    current: false,
  },
  { name: 'About', href: '/about', current: false },
  { name: 'divider', divider: true },
  {
    name: 'Liam McClure ft. Ana Malicka',
    href: '/liam-mcclure',
    current: false,
  },
  { name: 'Zac Benloulou', href: '/zac-benloulou', current: false },
  { name: 'Morgan Hass', href: '/morgan-hass', current: false },
  {
    name: 'Jenna-Katheryn Heinemann',
    href: '/jenna-katheryn-heinemann',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the mobile menu
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar for medium and larger screens */}
      <div className="hidden md:flex flex-col bg-white p-4 h-full fixed">
        {navigation.map((item, index) =>
          item.divider ? (
            <div
              key={index}
              className="border-t border-gray-500 my-2 w-3/4"
            ></div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleMenuItemClick}
              className={classNames(
                item.bold ? 'font-bold' : '', // Apply bold class conditionally
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-black hover:text-amber-500 hover:font-bold',
                'block px-3 py-2 text-lg'
              )}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Hamburger menu for mobile screens */}
      <div className="md:hidden bg-white p-4 w-full fixed z-20">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 flex flex-col items-center">
            {' '}
            {/* Center items in mobile menu */}
            {navigation.map((item, index) =>
              item.divider ? (
                <div
                  key={index}
                  className="border-t border-gray-500 my-2 w-1/2" // Ensure divider spans full width
                ></div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleMenuItemClick} // Close menu on item click
                  className={classNames(
                    item.bold ? 'font-bold' : '', // Apply bold class conditionally
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-black hover:text-amber-500 hover:font-bold',
                    'block px-3 py-2 text-lg text-center' // Center text and block element
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
