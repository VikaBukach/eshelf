import React, { useState } from 'react';

const Accordion = ({title, content}) => {

  const [isOpen, setIsOpen] = useState(false);

  const openAndClose = (event) => {

    event.target.classList.toggle("accordion__open-close--open");
    const content = document.querySelector('.accordion__content');

    if (isOpen) {
      content.style.maxHeight = "0" + 'px';
      setIsOpen(false)
    } else {
      const contentHeight = content.scrollHeight; 
      content.style.maxHeight = contentHeight + 'px';
      setIsOpen(true)
    }
  };


  return (
    <div className="accordion">
      <div className="accordion__head">
        <h2 className="accordion__title">{title}</h2>
        <div className="accordion__open-close" onClick={openAndClose}></div>
      </div>
      <div className={`accordion__content`}>
      1
      {content}
      </div>
    </div>
  );
};

export { Accordion };
