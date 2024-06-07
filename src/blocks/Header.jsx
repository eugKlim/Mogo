import React, { useState, useEffect } from 'react';
import Popup from '../components/popup/Popup';
import usePopup from '../components/popup/usePopup';
import ToggleBtn from '../components/toggleThemeBtn/ToggleThemeBtn';
import { NavLink, useNavigate } from 'react-router-dom';

import LightIcon from '/image/global/light-icon.svg';
import DarkIcon from '/image/global/dark-icon.svg';

const Header = () => {
  const navigate = useNavigate();

  const basketPopup = usePopup();
  const searchPopup = usePopup();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  const headerDataLinks = [
    {
      nameLink: 'Home',
      link: 'home',
      class: '',
    },
    {
      nameLink: 'about',
      link: 'about',
      class: '',
    },
    {
      nameLink: 'service',
      link: 'service',
      class: '',
    },
    {
      nameLink: 'work',
      link: 'work',
      class: '',
    },
    {
      nameLink: 'blog',
      link: 'blog',
      class: '',
    },
    {
      nameLink: 'contact',
      link: 'contact',
      class: '',
    },
  ];

  // burger
  const [isActiveBurger, setActiveBurger] = useState();
  const clickBurger = () => {
    setActiveBurger((prevState) => !prevState);
  };
  useEffect(() => {
    if (isActiveBurger) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isActiveBurger]);
  // burger /

  // fixed header
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    setIsFixed(window.scrollY >= 800);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);
  // fixed header /

  return (
    <>
      <header
        className={`header ${
          isFixed ? 'fixed-header' : ''
        } container flex justify-between items-center py-2 text-white max-w-[2500px] bg-orange-900 bg-opacity-80`}
      >
        <div
          className={`burger-overlay ${
            isActiveBurger ? 'active' : ''
          } bg-dark sm:fixed lg:hidden w-full min-h-screen min-w-screen z-[901]`}
          onClick={clickBurger}
          aria-label="close popup"
        />

        <h1
          className="title text-white sm:text-lg md:text-3xl z-20 cursor-pointer"
          onClick={() => navigate('/')}
          aria-label="Go to home page"
          title="Go to Home"
        >
          MoGo
        </h1>
        <nav className="flex items-center space-x-6 relative">
          <ul
            className={`sm:nav-block ${
              isActiveBurger ? 'active' : ''
            }  uppercase text-sm flex items-center sm:flex-col sm:w-full sm:h-screen sm:bg-teal-500 sm:dark:bg-teal-700 sm:fixed sm:top-0 sm:left-0 sm:max-w-60 sm:overflow-y-auto sm:z-[996] sm:pt-12 sm:space-y-10 lg:bg-transparent  lg:static lg:h-auto lg:space-x-6 lg:space-y-0 lg:max-w-full lg:overflow-y-visible lg:pt-1 lg:nav-hidden lg:flex-row`}
          >
            {headerDataLinks.map((data, index) => {
              return (
                <li
                  className={`${data.class} navigation`}
                  aria-label={data.nameLink}
                  key={index}
                  onClick={isMobile ? clickBurger : null}
                >
                  <NavLink to={`/${data.link}`} activeclassname="activeNav">
                    {data.nameLink}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="sm:space-x-4 lg:space-x-6 flex items-center sm:pr-16 lg:pr-0">
            <ToggleBtn lightIco={LightIcon} darkIco={DarkIcon} />
            {/* basket */}
            <div
              onClick={basketPopup.togglePopup}
              className="inline-block lg:hover:text-yellow-500 cursor-pointer"
              title="basket button"
            >
              <svg
                aria-label="basket button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <Popup
                isOpen={basketPopup.isOpen}
                onClose={basketPopup.closePopup}
              >
                <p>Basket</p>
              </Popup>
            </div>
            {/* search */}
            <div
              className="inline-block lg:hover:text-yellow-500 cursor-pointer"
              title="search"
              onClick={searchPopup.togglePopup}
            >
              <svg
                aria-label="search button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <Popup
                isOpen={searchPopup.isOpen}
                onClose={searchPopup.closePopup}
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 text-black dark:border-white border-2 border-black"
                    aria-label="search input"
                  />
                  <button
                    className="bg-green-500 p-3 hover:bg-green-800 -ml-1"
                    aria-label="search button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </Popup>
            </div>
            {/* / */}
          </div>

          <button
            aria-label="menu"
            className={`burger ${
              isActiveBurger ? 'active-burger' : ''
            } absolute right-0 z-[701] sm:block lg:hidden`}
            onClick={clickBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
