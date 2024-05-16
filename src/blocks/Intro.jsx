import React from 'react';

const Intro = () => {
  return (
    <div className="bg-intro-bg bg-options max-w-[2560px] mt-[-100px] container pb-9 text-white pt-[190px] sm:bg-cover">
      <div>
        <h2 className="upTitle text-white mb-8 md:text-6xl sm:text-4xl">Creative Template</h2>
        <h3 className="title text-white md:text-7xl sm:text-5xl title-line-intro">
          Welcome <span className="block">to MoGo</span>
        </h3>

        <button className="block mx-auto bg-transparent border-white border-2 uppercase py-2 px-6 mt-[100px] hover:bg-white hover:text-stone-900 font-MontserratBold" title="Learn more">
          Learn more
        </button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap md:space-x-8 mt-32">
        {/* 1 */}
        <div className="mt-5 md:w-1/4 w-1/2 px-4">
          <div className="border-t-4 border-white">
            <span className="bg-red-500 block w-[30%] h-1 -mt-1"></span>
          </div>
          <div className="mt-3">
            <span className="font-MontserratBold mr-2 text-2xl">01</span>
            <span className="font-MontserratRegular text-lg">Intro</span>
          </div>
        </div>
        {/* 2 */}
        <div className="mt-5 md:w-1/4 w-1/2 px-4">
          <div className="border-t-4 border-white">
            <span className="bg-red-500 block w-[60%] h-1 -mt-1"></span>
          </div>
          <div className="mt-3">
            <span className="font-MontserratBold mr-2 text-2xl">02</span>
            <span className="font-MontserratRegular text-lg">Work</span>
          </div>
        </div>
        {/* 3 */}
        <div className="mt-5 md:w-1/4 w-1/2 px-4">
          <div className="border-t-4 border-white">
            <span className="bg-red-500 block w-[80%] h-1 -mt-1"></span>
          </div>
          <div className="mt-3">
            <span className="font-MontserratBold mr-2 text-2xl">03</span>
            <span className="font-MontserratRegular text-lg">About</span>
          </div>
        </div>
        {/* 4 */}
        <div className="mt-5 md:w-1/4 w-1/2 px-4">
          <div className="border-t-4 border-white">
            <span className="bg-red-500 block w-[10%] h-1 -mt-1"></span>
          </div>
          <div className="mt-3">
            <span className="font-MontserratBold mr-2 text-2xl">04</span>
            <span className="font-MontserratRegular text-lg">Contacts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
