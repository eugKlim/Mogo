import React, { useState } from 'react';
import Popup from '../components/popup/Popup';
import ToggleBtn from '../components/toggleBtn/ToggleBtn';
import LightIcon from '/image/global/light-icon.svg';
import DarkIcon from '/image/global/dark-icon.svg';

const Header = () => {
  // popup ophitos
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  // popup ophitos /

  const headerDataLinks = [
    {
      href: '#',
      nameLink: 'About',
      class: 'navigation active',
    },
    {
      href: '#',
      nameLink: 'service',
      class: 'navigation',
    },
    {
      href: '#',
      nameLink: 'work',
      class: 'navigation',
    },
    {
      href: '#',
      nameLink: 'blog',
      class: 'navigation',
    },
    {
      href: '#',
      nameLink: 'contact',
      class: 'navigation',
    },
  ];

  return (
    <header className="container flex justify-between items-center py-5 z-50 text-white">
      <h1 className="title text-white sm:text-lg md:text-3xl">MoGo</h1>
      <nav className="flex items-center space-x-6">
        <ul className="uppercase text-sm space-x-6 flex items-center sm:hidden lg:block">
          {headerDataLinks.map((data, index) => {
            return (
              <a href={data.href} title={data.nameLink} className={data.class} aria-label={data.nameLink} key={index}>
                {data.nameLink}
              </a>
            );
          })}
        </ul>
        <div className="sm:space-x-4 lg:space-x-6 flex items-center">
          <div className="">
            <ToggleBtn lightIco={LightIcon} darkIco={DarkIcon} />
          </div>
          <div onClick={togglePopup} className="inline-block hover:text-yellow-500 cursor-pointer" title="basket button" aria-label="basket button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <Popup isOpen={isOpen} onClose={closePopup}>
              <p>Basket</p>
            </Popup>
          </div>
          <a href="#" className="inline-block hover:text-yellow-500" title="search" aria-label="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </a>
        </div>
        <button title="menu" aria-label="menu" className="burger sm:block lg:hidden">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
