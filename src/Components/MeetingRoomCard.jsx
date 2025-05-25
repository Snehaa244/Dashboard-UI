import React from 'react';

const MeetingRoomCard = ({ room, isActive }) => {
  return (
    <div
      className={`p-4 rounded border mb-4 text-white transition-all ${
        isActive ? 'bg-purple-600' : 'bg-black/40'
      } w-full sm:w-[20rem]`}
    >
      <h3 className="font-semibold text-base sm:text-lg">
        {room.name}{' '}
        <span className="text-xs text-white/80">
          ⭐ {room.positions} Positions
        </span>
      </h3>
      <p className="text-sm text-white/70 mt-1">
        Start from {room.start} – Ends at {room.end}
      </p>
    </div>
  );
};

export default MeetingRoomCard;
