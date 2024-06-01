import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Logos = () => {
  return (
    <section className="md:bg-gray-300 md:py-10 sm:hidden md:block">
      <div className="container">
        <LazyLoadImage
          alt="image"
          src="/image/logos/logos.png"
          effect="blur"
          className="h-26"
        />
      </div>
    </section>
  );
};

export default Logos;
