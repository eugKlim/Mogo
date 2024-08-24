import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Title from '../title/Title';
import useLazyBackgrounds from '../../hooks/useBgCheckFormats';

const Feature = () => {
  useLazyBackgrounds();
  return (
    <section
      className="bg-feature-bg bg-options bg-cover min-w-full darkBgOverlay mx-auto item-bg"
      data-bg="image/feature/feature-bg.jpg"
    >
      <div className="dark:bg-dark">
        <div className="container">
          <Title uptitle="For all devices" title="Unique design" />
          <div className="mt-24 text-center">
            <picture>
              <source srcSet="image/feature/device.avif" type="image/avif" />
              <source srcSet="image/feature/device.webp" type="image/webp" />
              <LazyLoadImage
                alt="Image"
                src="image/feature/device.jpg"
                className="mx-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
