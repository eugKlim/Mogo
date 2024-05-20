import React from 'react';

const Work = () => {
  return (
    <div className="pt-[90px] sm:bg-gray-100 md:bg-white">
      <div className="container">
        <h2 className="upTitle">What we do</h2>
        <h3 className="title title-line">some of our work</h3>
        <p className="down-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1900px] mx-auto text-white">
        {/* 1 */}
        <div className="relative group">
          <img src="/image/work/1.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 2 */}
        <div className="relative group">
          <img src="/image/work/2.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 3 */}
        <div className="relative group row-span-2">
          <img src="/image/work/3.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 4 */}
        <div className="relative group">
          <img src="/image/work/4.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 5 */}
        <div className="relative group">
          <img src="/image/work/5.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 6 */}
        <div className="relative group">
          <img src="/image/work/6.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* 7 */}
        <div className="relative group">
          <img src="/image/work/7.jpg" alt="image" />

          <div className="absolute transition-opacity duration-500 ease-in-out top-0 left-0 w-full h-full opacity-0  hover-gradient flex justify-center align-center flex-col text-center xl:group-hover:opacity-90">
            <div>
              <img src="/image/work/ico.png" alt="icon" className="mx-auto" />
            </div>
            <p className="uppercase font-MontserratBold my-2">creatively designed</p>
            <p className="font-RobotoLightItalic">Lorem ipsum dolor sit</p>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default Work;
