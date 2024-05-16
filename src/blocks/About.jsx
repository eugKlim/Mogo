import React from 'react';

const About = () => {
  return (
    <div className="py-[98px] container">
      <h2 className="upTitle">What we do</h2>
      <h3 className="title title-line">Story about us</h3>
      <p className="down-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div className="flex flex-wrap justify-center space-x-2 text-white">
        {/* 1 */}
        <div className="w-[380px] h-[250px] relative bg-cyan-400 group mt-2">
          <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/1.jpg" alt="Image" />
          </div>

          <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/about-team.png" alt="Image" className="w-[32px] h-[23px] mx-auto" />
            <p className="uppercase font-MontserratBold mt-1">super team</p>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[380px] h-[250px] relative bg-cyan-400 group mt-2">
          <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/2.jpg" alt="Image" />
          </div>

          <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/about-team.png" alt="Image" className="w-[32px] h-[23px] mx-auto" />
            <p className="uppercase font-MontserratBold mt-1">super team</p>
          </div>
        </div>
        {/* 3 */}
        <div className="w-[380px] h-[250px] relative bg-cyan-400 group mt-2">
          <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/3.jpg" alt="Image" />
          </div>

          <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
            <img src="/image/about/about-team.png" alt="Image" className="w-[32px] h-[23px] mx-auto" />
            <p className="uppercase font-MontserratBold mt-1">super team</p>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default About;
