import React from 'react';

const AccordionItem = ({
  title,
  content,
  image,
  imageFormat,
  isActive,
  onClick,
}) => (
  <div className="my-4 max-w-[600px]  border border-gray-300">
    <div
      className="uppercase flex items-center justify-between span border-b-[1px] p-4 cursor-pointer"
      onClick={onClick}
      aria-label="open accordion"
    >
      <span className="flex items-center">
        <picture>
          <source srcSet={image + '.avif'} type="image/avif" />
          <source srcSet={image + '.webp'} type="image/webp" />
          <img alt="Image" src={image + imageFormat} className="mr-4" />
        </picture>

        {title}
      </span>
      <span
        className={`transition duration-500 transform ${
          isActive ? 'rotate-180' : ''
        }`}
      >
        <picture>
          <source srcSet="image/global/arrow-down.avif" type="image/avif" />
          <source srcSet="image/global/arrow-down.webp" type="image/webp" />
          <img alt="arrow" src="image/global/arrow-down.png" />
        </picture>
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
