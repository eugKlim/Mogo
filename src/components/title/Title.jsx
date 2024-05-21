import React from 'react';

const Title = ({ uptitle, title, text }) => {
  return (
    <div className="pt-24">
      <h2 className="upTitle">{uptitle}</h2>
      <h3 className="title title-line">{title}</h3>
      <p className="down-text">{text}</p>
    </div>
  );
};

export default Title;
