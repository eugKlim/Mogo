import React, { useState } from 'react';

const PopupOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    document.documentElement.style.overflow = '';
  };
  return { isOpen, togglePopup, closePopup };
};

export default PopupOptions;
