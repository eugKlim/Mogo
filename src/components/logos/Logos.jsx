import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Logos = () => {
  return (
    <section className="md:bg-gray-300 md:py-10 sm:hidden md:block min-h-[205px]">
      <div className="container">
        <picture className="h-26">
          <source srcSet="image/logos/logos.avif" type="image/avif" />
          <source srcSet="image/logos/logos.webp" type="image/webp" />
          <LazyLoadImage alt="Image" src="image/logos/logos.png" />
        </picture>
      </div>
    </section>
  );
};

export default Logos;
