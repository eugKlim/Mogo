import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Popup = ({ isOpen, onClose, children }) => {
  const popupOverlayRef = useRef(null);
  const popupContentRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupOverlayRef.current && !popupOverlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.classList.add('noScroll');
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.classList.remove('noScroll');
    };
  }, [isOpen, onClose]);

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="popup-overlay" unmountOnExit nodeRef={popupOverlayRef}>
      <div className="popup-overlay" ref={popupOverlayRef} onClick={onClose} title="">
        <CSSTransition in={isOpen} timeout={300} classNames="popup-content" unmountOnExit nodeRef={popupContentRef}>
          <div className="popup-content sm:w-11/12 xl:w-8/12 dark:bg-slate-700 text-black p-10 dark:text-white overflow-y-auto" ref={popupContentRef} onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              ✕
            </button>
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Popup;
