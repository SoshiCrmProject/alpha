import React, { useState, useRef } from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Accordion = ({ title, children, type = 'close', arrowSize = 'text-base', titleSize = 'text-base' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {type === 'close' ? (
        <div>
          <button
            onClick={toggleAccordion}
            className="flex items-center w-full py-2 px-4 focus:outline-none"
          >
            <span>
              <FaAngleRight className={`${isOpen ? 'rotate-90' : ''} transition-all duration-200 mr-2`} />
            </span>
            <span className="font-semibold">{title}</span>
          </button>

          <div
            ref={contentRef}
            style={{
              maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
              opacity: isOpen ? 1 : 0,
              transition: 'max-height 0.3s ease, opacity 0.3s ease',
            }}
            className="overflow-hidden"
          >
            <div className="py-2 px-4">{children}</div>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={toggleAccordion}
            className="flex items-center justify-between w-full py-2 px-3 focus:outline-none"
          >
            <span className={`font-semibold ${titleSize}`}>{title}</span>
            <span>
              <FaAngleRight className={`${isOpen ? 'rotate-90' : ''} transition-all duration-200 mr-2 ${arrowSize}`} />
            </span>
          </button>

          <div
            ref={contentRef}
            style={{
              maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
              opacity: isOpen ? 1 : 0,
              transition: 'max-height 0.3s ease, opacity 0.3s ease',
            }}
            className="overflow-hidden"
          >
            <div className="py-2 px-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
