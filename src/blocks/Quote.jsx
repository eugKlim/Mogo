import React from 'react';
import SplideSlider from '../components/slider/SplideSlider';

const Quote = () => {
  const quoteData = [
    {
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”',
      name: 'Jon Doe',
    },
    {
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”',
      name: 'Anna Doe',
    },
    {
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
      name: 'Tommy Doe',
    },
  ];

  const quoteSlides = quoteData.map((data, index) => (
    <div
      className="pt-10 mx-auto lg:flex lg:items-center md:w-10/12"
      key={index}
    >
      <div className="lg:w-[150px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img
          src="/image/quote/quote-image.png"
          alt="Image"
          className="min-w-[150px] h-[150px]"
        />
      </div>
      <div className="px-16 text-xl max-w-[840px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">{data.text}</p>
        <p className="font-KaushanScripts left-line pl-20">{data.name}</p>
      </div>
    </div>
  ));

  const options = {
    type: 'loop',
    pagination: false,
  };

  return (
    <section className="bg-gray-100 pt-8 pb-11 flex justify-center dark:bg-zinc-800 dark:text-white">
      <div className="sm:w-screen md:w-screen lg:container cursor-grab active:cursor-grabbing">
        <SplideSlider options={options} slides={quoteSlides} />
      </div>
    </section>
  );
};

export default Quote;
