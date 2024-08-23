import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Title from '../title/Title';

const Feature = () => {
  return (
    <section className="bg-feature-bg bg-options bg-cover min-w-full darkBgOverlay mx-auto">
      <div className="dark:bg-dark">
        <div className="container">
          <Title uptitle="For all devices" title="Unique design" />
          <div className="mt-24 text-center">
            <LazyLoadImage
              alt="image"
              src={'image/feature/device.webp'}
              className="max-w-full mx-auto inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
