import React, { useState } from 'react';

const useHoverMobile  = (dataItems) => {
  const [hoverMobileState, setHoverMobileState] = useState(
    dataItems.map(() => false)
  );

  const openOrHiddenHover = (index) => {
    setHoverMobileState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return { openOrHiddenHover, hoverMobileState };
};

export default useHoverMobile;
