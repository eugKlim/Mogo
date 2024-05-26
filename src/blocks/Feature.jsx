import React from 'react';
import Title from '../components/title/Title';

const Feature = () => {
  return (
    <section className="bg-feature-bg bg-options max-w-[1280px] darkBgOverlay">
      <div className="dark:bg-dark">
        <div className="container">
          <Title uptitle="For all devices" title="Unique design" />
          <div className="mt-24">
            <img src="/image/feature/device.png" alt="image" className="max-w-full mx-auto " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
