import React from 'react';

const Say = () => {
  return (
    <div className="bg-feature-bg bg-cover xl:bg-options pt-[100px] pb-[30px]">
      <div className="container">
        <h2 className="upTitle">What we do</h2>
        <h3 className="title title-line">What people say</h3>
        <p className="down-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className="grid sm:grid-cols-1 xl:grid-cols-2 xl:space-x-8">
          {/* 1 */}
          <div className="flex max-w-[520px] mb-20 sm:mx-auto">
            <div className="mr-[32px]">
              <img src="/image/say/1.png" alt="image" className="min-w-[110px] h-[110px]" />
            </div>
            <div>
              <p className="font-MontserratBold text-lg">Nick Karvounis</p>
              <p className="font-RobotoLightItalic pt-1">Graphic Design</p>
              <div className="w-20 h-1 bg-red-400 my-5"></div>
              <p className="font-RobotoRegular text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex max-w-[520px] mb-20 sm:mx-auto">
            <div className="mr-[32px]">
              <img src="/image/say/2.png" alt="image" className="min-w-[110px] h-[110px]" />
            </div>
            <div>
              <p className="font-MontserratBold text-lg">Jaelynn Castillo </p>
              <p className="font-RobotoLightItalic pt-1">Graphic Design</p>
              <div className="w-20 h-1 bg-red-400 my-5"></div>
              <p className="font-RobotoRegular text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex max-w-[520px] mb-20 sm:mx-auto">
            <div className="mr-[32px]">
              <img src="/image/say/3.png" alt="image" className="min-w-[110px] h-[110px]" />
            </div>
            <div>
              <p className="font-MontserratBold text-lg">Mike Petrucci</p>
              <p className="font-RobotoLightItalic pt-1">Graphic Design</p>
              <div className="w-20 h-1 bg-red-400 my-5"></div>
              <p className="font-RobotoRegular text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex max-w-[520px] mb-20 sm:mx-auto">
            <div className="mr-[32px]">
              <img src="/image/say/4.png" alt="image" className="min-w-[110px] h-[110px]" />
            </div>
            <div>
              <p className="font-MontserratBold text-lg">Matthew Dix</p>
              <p className="font-RobotoLightItalic pt-1">Graphic Design</p>
              <div className="w-20 h-1 bg-red-400 my-5"></div>
              <p className="font-RobotoRegular text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </div>
  );
};

export default Say;
