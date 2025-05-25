import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const EventRequestsTable = () => {
  // Generate 150 fake rows
  const allRows = Array(150).fill().map((_, i) => ({
    eventName: `Event ${i + 1}`,
    eventStart: "Jan 12, 2024",
    eventEnd: "Jan 14, 2024",
    clientName: `Client ${String.fromCharCode(65 + (i % 26))}${i + 1}`,
    contactInfo: "+1234 566 7890",
    venue: `Venue ${i + 1}`,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtered rows based on search
  const filteredRows = allRows.filter((row) =>
    row.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRows = filteredRows.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to page 1 after new search
  };

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8 text-white">
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Event Requests</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by client"
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 px-4 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded shadow"
          >
            <Plus className="mr-2 h-4 w-4" /> Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-pink-500 rounded-xl shadow-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-pink-400 text-white text-left">
            <tr>
              <th className="px-4 md:px-6 py-3">Event Name</th>
              <th className="px-4 md:px-6 py-3">Start</th>
              <th className="px-4 md:px-6 py-3">End</th>
              <th className="px-4 md:px-6 py-3">Client</th>
              <th className="px-4 md:px-6 py-3 hidden sm:table-cell">Contact</th>
              <th className="px-4 md:px-6 py-3 hidden md:table-cell">Venue</th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-gray-700">
            {currentRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#2c2c3d]">
                <td className="px-4 md:px-6 py-4">{row.eventName}</td>
                <td className="px-4 md:px-6 py-4">{row.eventStart}</td>
                <td className="px-4 md:px-6 py-4">{row.eventEnd}</td>
                <td className="px-4 md:px-6 py-4">{row.clientName}</td>
                <td className="px-4 md:px-6 py-4 hidden sm:table-cell">{row.contactInfo}</td>
                <td className="px-4 md:px-6 py-4 hidden md:table-cell">{row.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-white flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 text-sm rounded-full ${
                  currentPage === i + 1 ? "bg-pink-500" : "bg-gray-700"
                } hover:bg-pink-600`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Event</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-black hover:text-red-600"
              >
                <X />
              </button>
            </div>

            <form className="space-y-4">
              <input type="text" placeholder="Event Name" className="w-full px-4 py-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Client Name" className="w-full px-4 py-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Contact Info" className="w-full px-4 py-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Venue" className="w-full px-4 py-2 border border-gray-300 rounded" />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventRequestsTable;
