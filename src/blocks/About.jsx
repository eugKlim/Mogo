import React from 'react';
import Title from '../components/title/Title';

const About = () => {
  const aboutCardData = [
    {
      img: '/image/about/1.jpg',
      text: 'super team',
    },
    {
      img: '/image/about/2.jpg',
      text: 'super team',
    },
    {
      img: '/image/about/3.jpg',
      text: 'super team',
    },
  ];

  return (
    <section className="container pb-24">
      <Title uptitle="What we do" title="Story about us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

      <div className="flex flex-wrap justify-center space-x-2 text-white">
        {aboutCardData.map((data, index) => {
          return (
            <div className="max-w-[380px] max-h-[250px] relative bg-cyan-400 group mt-2" key={index}>
              <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
                <img src={data.img} alt="Image" />
              </div>

              <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
                <img src="/image/about/about-team.png" alt="Image" className="w-[32px] h-[23px] mx-auto" />
                <p className="uppercase font-MontserratBold mt-1">{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
