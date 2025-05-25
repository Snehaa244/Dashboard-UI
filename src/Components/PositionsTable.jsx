import React from 'react';

const PositionsTable = () => {
  const rows = Array(6).fill({
    position: 'Camera 1 (Video)',
    time: '9 am - 7 pm',
    info: 'LP default',
    qty: 20,
  });

  return (
    <div className="p-4 text-white flex justify-center w-full">
      <div className="w-full max-w-full sm:max-w-7xl">
        {/* Heading */}
        <h2 className="text-xl text-white mb-4">Positions</h2>

        {/* Table container with horizontal scroll on small screens */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border rounded-md border-purple-700 text-sm mt-2">
            <thead className="bg-black text-purple-100">
              <tr>
                <th className="p-2 text-left whitespace-nowrap">Position</th>
                <th className="p-2 text-left whitespace-nowrap">Time</th>
                <th className="p-2 text-left whitespace-nowrap">Info</th>
                <th className="p-2 text-left whitespace-nowrap">Quantity</th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-t bg-black border-purple-700">
                  <td className="p-2 whitespace-nowrap">{row.position}</td>
                  <td className="p-2 whitespace-nowrap">{row.time}</td>
                  <td className="p-2 whitespace-nowrap">{row.info}</td>
                  <td className="p-2 whitespace-nowrap">{row.qty}</td>
                  <td className="p-2">
                    <select className="bg-black/40 p-1 rounded border border-purple-600 text-white w-full max-w-xs">
                      <option>Select Contractor</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-3">
          <button className="text-white bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-600 transition">
            ◀
          </button>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <button className="text-white bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-purple-600 transition">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionsTable;
