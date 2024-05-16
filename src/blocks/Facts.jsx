import React from 'react';

const Facts = () => {
  return (
    <div className="flex flex-wrap justify-center bg-cyan-400 text-white p-4">
      {/* 1 */}
      <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10">
        <p className="font-MontserratRegular text-7xl">42</p>
        <p className="uppercase text-sm">Web Design Projects</p>
      </div>
      {/* 2 */}
      <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10">
        <p className="font-MontserratRegular text-7xl">123</p>
        <p className="uppercase text-sm">happy client</p>
      </div>
      {/* 3 */}
      <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10">
        <p className="font-MontserratRegular text-7xl">15</p>
        <p className="uppercase text-sm">award winner</p>
      </div>
      {/* 4 */}
      <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10">
        <p className="font-MontserratRegular text-7xl">99</p>
        <p className="uppercase text-sm">cup of coffee</p>
      </div>
      {/* 5 */}
      <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10">
        <p className="font-MontserratRegular text-7xl">24</p>
        <p className="uppercase text-sm">members</p>
      </div>

      {/* / */}
    </div>
  );
};

export default Facts;
