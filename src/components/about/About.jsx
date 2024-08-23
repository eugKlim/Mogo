import React from 'react';
import Title from '../title/Title';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import useHoverMobile from '../hoverMobile/useHoverMobile';
import HoverMobileOpen from '../hoverMobile/Hover-Mobile-Open';
import HoverMobileClose from '../hoverMobile/Hover-Mobile-Close';

const About = () => {
  const aboutCardData = [
    {
      img: 'image/about/1.webp',
      text: 'super team',
    },
    {
      img: 'image/about/2.webp',
      text: 'super team',
    },
    {
      img: 'image/about/3.webp',
      text: 'super team',
    },
  ];
  const { openOrHiddenHover, hoverMobileState } = useHoverMobile(aboutCardData);

  return (
    <section className="pb-24 dark:bg-slate-800 dark:text-white">
      <div className="container">
        <Title
          uptitle="What we do"
          title="Story about us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="flex flex-wrap justify-center lg:space-x-2 text-white">
          {aboutCardData.map((data, index) => {
            return (
              <div
                className="max-w-[380px] max-h-[250px] relative bg-cyan-400 group mt-2"
                key={index}
              >
                <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4 relative">
                  <LazyLoadImage
                    alt="Image"
                    src={data.img}
                    className="inline"
                  />

                  <HoverMobileOpen
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                  />
                </div>

                <div
                  className={`${
                    hoverMobileState[index] ? 'show-hover' : ''
                  } absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4`}
                >
                  <HoverMobileClose
                    index={index}
                    hoverMobileState={hoverMobileState}
                    openOrHiddenHover={openOrHiddenHover}
                  />

                  <img
                    src="image/about/about-team.webp"
                    alt="Image"
                    className="w-[32px] h-[23px] mx-auto"
                  />
                  <p className="uppercase font-MontserratBold mt-1">
                    {data.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
