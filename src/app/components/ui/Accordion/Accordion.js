import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = React.useRef(null);

  // Прибираємо розділювальну риску на останнтому елементі
  const accordions = document.querySelectorAll(".filter .accordion");
  if (accordions.length > 1) {
    accordions[accordions.length - 1].style.borderBottom = "0px";
    accordions[accordions.length - 1].style.marginBottom = "0px";
  }

  const openAndClose = (event) => {
    setIsOpen(!isOpen);
    event.target.classList.toggle("accordion__open-close--open");
  };

  React.useEffect(() => {
    if (contentRef.current) {
      const contentElement = contentRef.current;
      if (isOpen) {
        if (contentElement.scrollHeight > 200) {
          contentElement.style.maxHeight = "200px";
          contentElement.style.overflowY = "auto";
        } else {
          contentElement.style.maxHeight = contentElement.scrollHeight + "px";
        }
      } else {
        contentElement.style.maxHeight = "0";
      }
    }
  }, [isOpen]);
  return (
    <div className="accordion">
      <div className="accordion__head">
        <h2 className="accordion__title">{title}</h2>
        <div className="accordion__open-close" onClick={openAndClose}></div>
      </div>
      <div
        ref={contentRef}
        className={`accordion__content`}
        style={{ overflow: "hidden", transition: "max-height 0.5s" }}
      >
        {content}
      </div>
    </div>
  );
};

export { Accordion };
