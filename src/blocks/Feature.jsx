import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyBg from '../components/lazyBg/LazyBg';
import Title from '../components/title/Title';
import featureBg from '/image/feature/feature-bg.jpg'


const Feature = () => {
  return (
    <LazyBg src={featureBg}>
      <section className="bg-options bg-cover min-w-full darkBgOverlay mx-auto">
        <div className="dark:bg-dark">
          <div className="container">
            <Title uptitle="For all devices" title="Unique design" />
            <div className="mt-24 text-center">
              <LazyLoadImage
                alt="image"
                src="/image/feature/device.png"
                effect="blur"
                className="max-w-full mx-auto inline-block"
              />
            </div>
          </div>
        </div>
      </section>
    </LazyBg>
  );
};

export default Feature;
