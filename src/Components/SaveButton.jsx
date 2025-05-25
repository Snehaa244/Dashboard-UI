import React from 'react';

const SaveButton = () => {
  return (
    <div className="text-center mt-4 mb-6 px-4 sm:px-0">
      <button className="
        bg-pink-600 text-white
        px-4 py-2 sm:px-6 sm:py-2.5
        rounded
        hover:bg-pink-700
        shadow-lg
        w-full sm:w-auto
        max-w-xs sm:max-w-none
        transition-colors duration-200
        text-sm sm:text-base
      ">
        Save Edits
      </button>
    </div>
  );
};

export default SaveButton;

