import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import SplideSlider from '../slider/SplideSlider';

const Testimonial = () => {
  const testimonialData = [
    {
      image: 'image/testimonial/image',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
      name: 'Jon Doe',
    },
    {
      image: 'image/testimonial/image',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
      name: 'Anna Doe',
    },
    {
      image: 'image/testimonial/image',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
      name: 'Tommy Doe',
    },
  ];

  const testimonialSlides = testimonialData.map((data, index) => (
    <div
      className="py-10 mx-auto lg:flex lg:items-center md:w-10/12"
      key={index}
    >
      <div className="lg:w-[190px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <picture>
          <source srcSet={data.image + '.avif'} type="image/avif" />
          <source srcSet={data.image + '.webp'} type="image/webp" />
          <LazyLoadImage
            alt="Image"
            src={data.image + '.png'}
            className="min-w-[190px] h-[200px]"
          />
        </picture>
      </div>
      <div className="px-16 text-xl max-w-[780px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">{data.text}</p>
        <p className="font-KaushanScripts left-decorative-line pl-20">
          {data.name}
        </p>
      </div>
    </div>
  ));

  const options = {
    type: 'loop',
    pagination: false,
  };
  return (
    <section>
      <div className="py-5 flex justify-center dark:bg-zinc-800 dark:text-white min-h-[308px]">
        <div className="sm:w-screen md:w-screen lg:container cursor-grab active:cursor-grabbing ">
          <SplideSlider options={options} slides={testimonialSlides} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
