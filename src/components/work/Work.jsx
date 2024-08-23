import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Title from '../title/Title';
import useHoverMobile from '../hoverMobile/useHoverMobile';
import HoverMobileOpen from '../hoverMobile/Hover-Mobile-Open';
import HoverMobileClose from '../hoverMobile/Hover-Mobile-Close';

const Work = () => {
  const workData = [
    {
      image: 'image/work/1.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/2.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/3.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group row-span-2',
    },
    {
      image: 'image/work/4.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/5.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/6.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/7.webp',
      hoverIcon: 'image/work/ico.webp',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
  ];
  const { openOrHiddenHover, hoverMobileState } = useHoverMobile(workData);

  return (
    <section className="sm:bg-gray-100 md:bg-white dark:bg-gray-700 dark:text-white">
      <div className="container">
        <Title
          uptitle="What we do"
          title="Story about us"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1900px] mx-auto text-white">
        {workData.map((data, index) => {
          return (
            <div className={data.class} key={index}>
              <LazyLoadImage
                alt="image"
                src={data.image}
                className="inline-block"
              />
              <HoverMobileOpen
                index={index}
                hoverMobileState={hoverMobileState}
                openOrHiddenHover={openOrHiddenHover}
              />
              <div
                className={`${
                  hoverMobileState[index] ? 'show-hover' : ''
                } absolute transition-all duration-500 linear top-0 left-0 w-full h-full opacity-0 invisible flex justify-center align-center hover-gradient flex-col text-center xl:group-hover:opacity-90 xl:group-hover:visible cursor-default`}
              >
                <div>
                  <img src={data.hoverIcon} alt="icon" className="mx-auto" />
                </div>
                <p className="uppercase font-MontserratBold my-2">
                  {data.hoverTitle}
                </p>
                <p className="font-RobotoLightItalic">{data.hoverText}</p>

                <HoverMobileClose
                  index={index}
                  hoverMobileState={hoverMobileState}
                  openOrHiddenHover={openOrHiddenHover}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
