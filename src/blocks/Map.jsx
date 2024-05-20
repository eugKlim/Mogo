import React from 'react';

const Map = () => {
  return (
    <div className="bg-map-bg bg-cover xl:bg-options flex justify-center items-center flex-col py-[50px] cursor-pointer hover:opacity group">
      <div className="text-center flex justify-center items-center flex-col transition-scale duration-1000 ease-in-out lg:group-hover:scale-150">
        <img src="/image/map/map-ico.svg" alt="map icon" />
        <h2 className="uppercase text-red-500 my-2">Open map</h2>
        <div className="w-[50px] h-1 bg-red-400"></div>
      </div>
    </div>
  );
};

export default Map;
