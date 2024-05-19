import React from 'react';
import SplideSlider from '../components/slider/SplideSlider';

const Quote = () => {
  const quoteSlides = [
    // 1
    <div className=" mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[150px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/quote/quote-image.png" alt="Image" className="" />
      </div>
      <div className="px-16 text-xl max-w-[840px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
        <p className="font-KaushanScripts left-line pl-20">Jon Doe</p>
      </div>
    </div>,
    // 2
    <div className=" mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[150px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/quote/quote-image.png" alt="Image" className="" />
      </div>
      <div className="px-16 text-xl max-w-[840px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
        <p className="font-KaushanScripts left-line pl-20">Anna Doe</p>
      </div>
    </div>,
    // 3
    <div className=" mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[150px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/quote/quote-image.png" alt="Image" className="" />
      </div>
      <div className="px-16 text-xl max-w-[840px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”</p>
        <p className="font-KaushanScripts left-line pl-20">Tommy Doe</p>
      </div>
    </div>,
  ];

  const options = {
    type: 'loop',
    pagination: false,
  };

  return (
    <div className="bg-gray-100 py-14 flex justify-center">
      <div className="sm:w-screen md:w-screen lg:container">
        <SplideSlider options={options} slides={quoteSlides} />
      </div>
    </div>
  );
};

export default Quote;
