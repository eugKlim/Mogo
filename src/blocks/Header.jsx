import React from 'react';

const Header = () => {
  return (
    <div className="container flex justify-between items-center py-5 z-50 text-white">
      <h1 className="title text-white">MoGo</h1>
      <nav>
        <ul className="uppercase text-sm space-x-6 flex items-center sm:hidden lg:block">
          <a href="#" title="About" className="navigation active">
            About
          </a>
          <a href="#" title="service" className="navigation">
            service
          </a>
          <a href="#" title="work" className="navigation">
            work
          </a>
          <a href="#" title="blog" className="navigation">
            blog
          </a>
          <a href="#" title="contact" className="navigation">
            contact
          </a>
          <a href="#" className="inline-block hover:text-yellow-500" title="basket">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </a>
          <a href="#" className="inline-block hover:text-yellow-500" title="search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </a>
        </ul>
        <button className="burger sm:block lg:hidden">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
