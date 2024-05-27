import React, { useState, useEffect } from 'react';

const ToggleBtn = ({ lightIco, darkIco }) => {
  const [isToggled, setToggled] = useState(() => {
    const savedState = localStorage.getItem('dark');
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isToggled]);

  const handleToggle = () => {
    setToggled((prevState) => {
      const newState = !prevState;
      localStorage.setItem('dark', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div
      className={`toggle-switch ${
        isToggled ? 'toggle-switch-on' : 'toggle-switch-off'
      }`}
      onClick={handleToggle}
    >
      <div className="toggle-switch-img">
        <img
          className=""
          src={isToggled ? lightIco : darkIco}
          alt="Icon mode"
        />
      </div>
    </div>
  );
};

export default ToggleBtn;
