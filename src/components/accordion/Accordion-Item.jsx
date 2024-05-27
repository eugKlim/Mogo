import React from 'react';

const AccordionItem = ({ title, content, image, isActive, onClick }) => (
  <div className="my-4 max-w-[600px]  border border-gray-300">
    <div
      className="uppercase flex items-center justify-between span border-b-[1px] p-4 cursor-pointer"
      onClick={onClick}
    >
      <span className="flex items-center">
        <img src={image} alt="Icon" className="mr-4" />
        {title}
      </span>
      <span
        className={`transition duration-500 transform ${
          isActive ? 'rotate-180' : ''
        }`}
      >
        <img src="/image/global/arrow-down.png" alt="icon arrow" />
      </span>
    </div>
    {isActive && (
      <div className="p-5 text-gray-500 font-RobotoLightItalic overflow-y-auto h-[146px] dark:text-white">
        {content}
      </div>
    )}
  </div>
);

export default AccordionItem;
