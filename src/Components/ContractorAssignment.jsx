import React from 'react';
import MeetingRoomCard from './MeetingRoomCard';

const rooms = [
  { name: 'Meeting Room 1', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 2', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 3', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 4', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
  { name: 'Meeting Room 5', positions: 12, start: '12 Jan, 2023', end: '15 Jan, 2023' },
];

const ContractorAssignment = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading outside the box */}
      <h2 className="text-white text-lg sm:text-xl mb-4 font-semibold">
        Assign Contractor
      </h2>

      {/* Black background box with purple border and rounded corners */}
      <div className="bg-black rounded-lg border-2 border-purple-500 p-4 space-y-4">
        {rooms.map((room, idx) => (
          <MeetingRoomCard key={idx} room={room} isActive={idx === 0} />
        ))}
      </div>
    </div>
  );
};

export default ContractorAssignment;
