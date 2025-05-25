import React, { useState } from 'react';

const Tabs = () => {
  const tabs = ['Event Details', 'Assign Coordinator/Coordinator', 'Session Management', 'Generate SOW'];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-wrap mt-4 px-2 sm:px-4">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`
            px-3 sm:px-4 py-2
            bg-transparent
            border border-purple-500
            text-purple-500
            hover:bg-purple-700 hover:text-white
            focus:outline-none
            ${idx === 0 ? 'sm:rounded-l-2xl' : ''}
            ${idx === tabs.length - 1 ? 'sm:rounded-r-2xl' : ''}
            ${idx !== 0 ? '-ml-px' : ''}
            whitespace-nowrap
            ${activeIndex === idx ? 'bg-purple-700 text-white' : ''}
            text-xs sm:text-sm
            flex-1 sm:flex-none
            text-center
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
