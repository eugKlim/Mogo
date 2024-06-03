import React from 'react';

const HoverMobileOpen = ({ index, hoverMobileState, openOrHiddenHover }) => {
  return (
    <button
      className={`${
        hoverMobileState[index] ? 'show-hover' : ''
      } absolute right-1 bottom-3 bg-teal-400 p-2 rounded-full lg:hidden`}
      onClick={() => openOrHiddenHover(index)}
    >
      <img
        src="../../public/image/global/hand.svg"
        alt="Icons"
        className="w-6"
      />
    </button>
  );
};

export default HoverMobileOpen;
