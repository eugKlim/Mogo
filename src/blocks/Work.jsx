import React from 'react';
import Title from '../components/title/Title';

const Work = () => {
  const workData = [
    {
      image: '/image/work/1.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/2.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/3.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group row-span-2',
    },
    {
      image: '/image/work/4.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/5.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/6.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
    {
      image: '/image/work/7.jpg',
      hoverIcon: '/image/work/ico.png',
      hoverTitle: 'creatively designed',
      hoverText: 'Lorem ipsum dolor sit',
      class: 'relative group',
    },
  ];

  return (
    <section className="sm:bg-gray-100 md:bg-white dark:bg-gray-700 dark:text-white">
      <div className="container">
        <Title uptitle="What we do" title="Story about us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1900px] mx-auto text-white">
        {workData.map((data, index) => {
          return (
            <div className={data.class} key={index}>
              <img src={data.image} alt="image" />

              <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
                <div>
                  <img src={data.hoverIcon} alt="icon" className="mx-auto" />
                </div>
                <p className="uppercase font-MontserratBold my-2">{data.hoverTitle}</p>
                <p className="font-RobotoLightItalic">{data.hoverText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
