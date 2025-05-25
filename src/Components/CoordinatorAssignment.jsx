import React, { useState } from 'react';

const CoordinatorAssignment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNew = () => {
    alert('Add New Coordinator clicked! Implement your logic here.');
  };

  return (
    <div className="p-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
      <label
        htmlFor="coordinator-search"
        className="block text-white mb-2 text-sm font-semibold"
      >
        Assign Coordinator
      </label>
      <input
        id="coordinator-search"
        type="text"
        placeholder="Search Coordinator"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 rounded bg-black/30 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
      <p
        className="text-sm text-pink-400 mt-2 cursor-pointer hover:underline"
        onClick={handleAddNew}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') handleAddNew(); }}
      >
        Add New Coordinator
      </p>
    </div>
  );
};

export default CoordinatorAssignment;
