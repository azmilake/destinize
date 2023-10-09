import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function AccordionBody({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-item shadow-lg border-b-2 last:border-b-0 font-semibold text-base">
        <div
          className="accordion-title bg-white text-black shadow-orange-50 w-full h-16 flex justify-between items-center p-2 lg:p-6 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <button className="transition-all duration-500 px-5">{title}</button>
          <button>{isActive ? '-' : '+'}</button>
        </div>
        {isActive && (
          <div className="accordion-content w-full bg-gray-100 text-black p-10 text-base font-normal">
            {content}
          </div>
        )}
      </div>
    </>
  );
}
