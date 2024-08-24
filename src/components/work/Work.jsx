import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Title from '../title/Title';
import useHoverMobile from '../hoverMobile/useHoverMobile';
import HoverMobileOpen from '../hoverMobile/Hover-Mobile-Open';
import HoverMobileClose from '../hoverMobile/Hover-Mobile-Close';

const Work = () => {
  const workData = [
    {
      image: 'image/work/1',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/2',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/3',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group row-span-2',
    },
    {
      image: 'image/work/4',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/5',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/6',
      hoverIcon: 'image/work/ico',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: 'image/work/7',
      hoverIcon: 'image/work/ico',
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
              <picture>
                <source srcSet={data.image + '.avif'} type="image/avif" />
                <source srcSet={data.image + '.webp'} type="image/webp" />
                <LazyLoadImage
                  alt="Image"
                  src={data.image + '.jpg'}
                  className="inline-block"
                />
              </picture>

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
                  <picture>
                    <source
                      srcSet={data.hoverIcon + '.avif'}
                      type="image/avif"
                    />
                    <source
                      srcSet={data.hoverIcon + '.webp'}
                      type="image/webp"
                    />
                    <img
                      alt="Image"
                      src={data.hoverIcon + '.png'}
                      className="mx-auto"
                    />
                  </picture>
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
