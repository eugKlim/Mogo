import React, { useState } from 'react';
import Popup from '../components/popup/Popup';

const Map = () => {
  // popup ophitos
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  // popup ophitos /
  return (
    <>
      <section onClick={togglePopup} className="bg-map-bg bg-cover xl:bg-options flex justify-center items-center flex-col cursor-pointer" aria-label="Open map" title="Open map">
        <div className="dark:bg-dark w-full h-full py-[50px]">
          <div className="text-center flex justify-center items-center flex-col">
            <img src="/image/map/map-ico.svg" alt="map icon" />
            <h2 className="uppercase text-red-500 my-2">Open map</h2>
            <div className="w-[50px] h-1 bg-red-400"></div>
          </div>
          {/* popup */}
          <Popup isOpen={isOpen} onClose={closePopup}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d48792.48116306089!2d36.36776055672034!3d50.00500273315374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d50.02854836970335!2d36.37531377089909!5e0!3m2!1sru!2sua!4v1716640791801!5m2!1sru!2sua" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 h-full w-full"></iframe>
          </Popup>
          {/* / */}
        </div>
      </section>
    </>
  );
};

export default Map;
