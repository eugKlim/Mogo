import React, { useState } from 'react';
import AccordionItem from './Accordion-Item';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} image={item.image} isActive={activeIndex === index} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Accordion;
