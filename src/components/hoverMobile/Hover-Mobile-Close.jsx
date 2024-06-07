import React from 'react';

const HoverMobileClose = ({ index, hoverMobileState, openOrHiddenHover }) => {
  return (
    <button
      className={`${
        hoverMobileState[index] ? 'show-hover' : ''
      } absolute right-1 top-1 bg-teal-500 text-red-500 font-bold text-2xl px-[5px] rounded-full lg:hidden`}
      onClick={() => openOrHiddenHover(index)}
      aria-label="close more info"
    >
      ✕
    </button>
  );
};

export default HoverMobileClose;
