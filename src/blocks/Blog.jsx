import React from 'react';

const Blog = () => {
  return (
    <div className="pt-[98px] pb-[20px] container">
      <h2 className="upTitle">We work with</h2>
      <h3 className="title title-line mb-20">Latest blog</h3>

      <div className="flex sm:flex-wrap sm:justify-center xl:flex-nowrap justify-between space-x-8">
        {/* 1 */}
        <div className="max-w-[340px] mb-20">
          <div className="relative">
            <img src="/image/blog/1.jpg" alt="image" />
            <div className="absolute bottom-4 -left-2 inline-block text-center bg-cyan-400 text-white py-1 px-2">
              <div className="uppercase font-MontserratBold text-2xl">
                5 <span className="block font-RobotoLightItalic text-base">Jan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-MontserratBold text-slate-800 uppercase pt-4 pb-3">Lorem ipsum dolor sit amet</h4>
            <p className="text-gray-500">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full h-[1px] bg-gray-400 my-3"></div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <img src="/image/global/watch-ico.svg" alt="icon watch" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">12</span>
              </div>
              <div className="flex space-x-2 items-center">
                <img src="/image/global/comment-ico.svg" alt="icon comment" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">8</span>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="max-w-[340px] mb-20">
          <div className="relative">
            <img src="/image/blog/2.jpg" alt="image" />
            <div className="absolute bottom-4 -left-2 inline-block text-center bg-cyan-400 text-white py-1 px-2">
              <div className="uppercase font-MontserratBold text-2xl">
                8 <span className="block font-RobotoLightItalic text-base">Jan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-MontserratBold text-slate-800 uppercase pt-4 pb-3">sed do eiusmod tempor</h4>
            <p className="text-gray-500">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full h-[1px] bg-gray-400 my-3"></div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <img src="/image/global/watch-ico.svg" alt="icon watch" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">22</span>
              </div>
              <div className="flex space-x-2 items-center">
                <img src="/image/global/comment-ico.svg" alt="icon comment" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">1</span>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="max-w-[340px] mb-20">
          <div className="relative">
            <img src="/image/blog/3.jpg" alt="image" />
            <div className="absolute bottom-4 -left-2 inline-block text-center bg-cyan-400 text-white py-1 px-2">
              <div className="uppercase font-MontserratBold text-2xl">
                15 <span className="block font-RobotoLightItalic text-base">Jan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-MontserratBold text-slate-800 uppercase pt-4 pb-3">incididunt ut labore et dolore</h4>
            <p className="text-gray-500">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="w-full h-[1px] bg-gray-400 my-3"></div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <img src="/image/global/watch-ico.svg" alt="icon watch" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">772</span>
              </div>
              <div className="flex space-x-2 items-center">
                <img src="/image/global/comment-ico.svg" alt="icon comment" className="h-[15px]" />
                <span className="font-RobotoLightItalic text-base">223</span>
              </div>
            </div>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default Blog;
