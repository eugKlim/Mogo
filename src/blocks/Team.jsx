import React from 'react';
import FacebookIco from '../../public/image/global/facebook-ico';
import TwitterIco from '../../public/image/global/twitter-ico';
import PinterestIco from '../../public/image/global/pinterest-ico';
import InstagramIco from '../../public/image/global/instagram-ico';
const Team = () => {
  return (
    <div className="pt-[90px] pb-8 lg:pb-[100px] container">
      <h2 className="upTitle">Who we are</h2>
      <h3 className="title title-line">Meet our team</h3>
      <p className="down-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

      <div className="flex justify-between space-x-4 sm:justify-center sm:flex-wrap">
        {/* 1 */}
        <div className="mb-10">
          <div className="relative group bg-cyan-400 w-[340px]">
            <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
              <img src="/image/team/1.jpg" alt="Image" />
            </div>
            <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-4">
              <div className="flex mb-[-1px]">
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <FacebookIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <TwitterIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <PinterestIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 hover:text-white">
                  <InstagramIco className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 ">
            <p className="text-slate-800 font-MontserratRegular uppercase">Matthew Dix</p>
            <p className="text-gray-500 font-RobotoLightItalic">Graphic Design</p>
          </div>
        </div>
        {/* 2 */}
        <div className="mb-10">
          <div className="group relative w-[340px] bg-cyan-400">
            <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
              <img src="/image/team/2.jpg" alt="Image" />
            </div>
            <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-4">
              <div className="flex mb-[-1px]">
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <FacebookIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <TwitterIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <PinterestIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 hover:text-white">
                  <InstagramIco className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-slate-800 font-MontserratRegular uppercase">Christopher Campbell</p>
            <p className="text-gray-500 font-RobotoLightItalic">Branding/UX design</p>
          </div>
        </div>
        {/* 3 */}
        <div className="mb-10">
          <div className="group relative w-[340px] bg-cyan-400">
            <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
              <img src="/image/team/3.jpg" alt="Image" />
            </div>
            <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-4">
              <div className="flex mb-[-1px]">
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <FacebookIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <TwitterIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white">
                  <PinterestIco className="w-6 h-6" />
                </a>
                <a href="#" className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 hover:text-white">
                  <InstagramIco className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-slate-800 font-MontserratRegular uppercase">Michael Fertig </p>
            <p className="text-gray-500 font-RobotoLightItalic">Developer</p>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default Team;
