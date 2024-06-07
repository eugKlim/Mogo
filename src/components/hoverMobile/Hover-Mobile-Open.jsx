import React from 'react';

const HoverMobileOpen = ({ index, hoverMobileState, openOrHiddenHover }) => {
  return (
    <button
      className={`${
        hoverMobileState[index] ? 'show-hover' : ''
      } absolute right-1 bottom-3 bg-teal-400 p-2 rounded-full lg:hidden`}
      onClick={() => openOrHiddenHover(index)}
      aria-label="open more info"
    >
      <img src="image/global/hand.svg" alt="hand show more" className="w-6" />
    </button>
  );
};

export default HoverMobileOpen;
