import React from 'react';
import SplideSlider from '../components/slider/SplideSlider';

const Testimonial = () => {
  const testimonialSlides = [
    // 1
    <div className="pt-10 mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[190px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/testimonial/image.png" alt="Image" className="min-w-[190px] h-[200px]" />
      </div>
      <div className="px-16 text-xl max-w-[780px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
        <p className="font-KaushanScripts left-line pl-20">Jon Doe</p>
      </div>
    </div>,
    // 2
    <div className="pt-10 mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[190px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/testimonial/image.png" alt="Image" className="min-w-[190px] h-[200px]" />
      </div>
      <div className="px-16 text-xl max-w-[780px]">
        <p className="text-gray-500 font-RobotoLightItalic mb-5">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
        <p className="font-KaushanScripts left-line pl-20">Anna Doe</p>
      </div>
    </div>,
    // 3
    <div className="pt-10 mx-auto lg:flex lg:items-center md:w-10/12">
      <div className="lg:w-[190px] sm:w-full sm:flex sm:justify-center sm:mb-7">
        <img src="/image/testimonial/image.png" alt="Image" className="min-w-[190px] h-[200px]" />
      </div>
      <div className="px-16 text-xl max-w-[780px]">
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
    <div>
      <div className="py-5 flex justify-center">
        <div className="sm:w-screen md:w-screen lg:container cursor-grab active:cursor-grabbing">
          <SplideSlider options={options} slides={testimonialSlides} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
