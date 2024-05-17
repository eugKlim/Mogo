import React from 'react';

const Service = () => {
  return (
    <div className="pt-[98px] pb-[40px] container">
      <h2 className="upTitle">We work with</h2>
      <h3 className="title title-line mb-20">Amazing Services</h3>

      {/* 1 row */}
      <div className="flex flex-wrap justify-center space-x-5">
        {/* 1 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/1.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">Photography</h3>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/2.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">Web Design</h3>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/3.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">Creativity</h3>
            <p className="text-slate-500">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>

      {/* 2 row */}
      <div className="flex flex-wrap justify-center space-x-5 lg:border-t-2">
        {/* 4 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/6.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">seo</h3>
            <p className="text-slate-500">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/5.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">Css/Html</h3>
            <p className="text-slate-500">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        {/* 6 */}
        <div className="flex max-w-[346px] my-8">
          <div className="pt-1 pr-3">
            <img src="/image/service/6.png" alt="Image" />
          </div>
          <div className="text-base">
            <h3 className="font-MontserratBold text-slate-900 mb-2 uppercase">digital</h3>
            <p className="text-slate-500">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default Service;
