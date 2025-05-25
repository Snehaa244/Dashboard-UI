import React, { useState } from 'react';

const EventInfo = () => {
  const [startDate, setStartDate] = useState('2023-12-12');
  const [endDate, setEndDate] = useState('2023-12-15');
  const [venue, setVenue] = useState('Some Location 12, Name Here, City, State');

  return (
    <div className="text-white p-3 bg-black/20 rounded-lg border border-purple-700 max-w-lg mx-auto md:mx-0">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center">
          <label htmlFor="start-date" className="text-xs min-w-[50px]">Start:</label>
          <input
            id="start-date"
            type="date"
            className="bg-black/30 border border-purple-700 rounded px-2 py-1 ml-2 text-white text-sm"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="end-date" className="text-xs min-w-[50px]">End:</label>
          <input
            id="end-date"
            type="date"
            className="bg-black/30 border border-purple-700 rounded px-2 py-1 ml-2 text-white text-sm"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="venue" className="text-xs block mb-1">Venue Address:</label>
        <input
          id="venue"
          type="text"
          className="w-full p-1.5 rounded border border-purple-700 bg-black/30 text-white text-sm"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          placeholder="Enter venue address"
        />
      </div>
    </div>
  );
};

export default EventInfo;
