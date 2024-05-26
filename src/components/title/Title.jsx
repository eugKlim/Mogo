import React from 'react';

const Title = ({ uptitle, title, text }) => {
  return (
    <div className="pt-24">
      <h2 className="upTitle dark:text-white">{uptitle}</h2>
      <h3 className="title title-line dark:text-white">{title}</h3>
      <p className="down-text dark:text-teal-500">{text}</p>
    </div>
  );
};

export default Title;
