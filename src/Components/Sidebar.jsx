import { useState } from "react";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({
    events: true,
    users: false,
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const linkStyle =
    "flex items-center gap-2 cursor-pointer transition hover:border-purple-500 hover:text-white";

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="p-2 bg-transparent border border-pink-500 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <X className="text-pink-400" /> : <Menu className="text-pink-400" />}
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-transparent border border-purple-500 text-white p-4
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block md:h-auto md:rounded-2xl md:mt-28 md:mb-3 md:mx-3 shadow-xl
          `}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-6">
            {/* Events Section */}
            <div
              className={`font-bold text-xl flex items-center justify-between cursor-pointer border-l-4 pl-2 transition-all duration-300 ${
                openSections.events
                  ? "border-pink-500 text-pink-400"
                  : "border-transparent text-white"
              } hover:border-purple-500 hover:text-white`}
              onClick={() => toggleSection("events")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleSection("events")}
            >
              <span>Events</span>
            </div>

            {openSections.events && (
              <div className="pl-4 text-sm space-y-3 transition-all duration-300">
                <Link to="/" className={linkStyle}>
                  <PiArrowBendDownRightBold className="text-lg" />
                  Dashboard
                </Link>
                <Link to="/estimate" className={linkStyle}>
                  <PiArrowBendDownRightBold className="text-lg" />
                  Estimate
                </Link>
                <Link to="/event" className={linkStyle}>
                  <PiArrowBendDownRightBold className="text-lg" />
                  Events
                </Link>
                <Link to="/requests" className={linkStyle}>
                  <PiArrowBendDownRightBold className="text-lg" />
                  Partial Requests
                </Link>
              </div>
            )}

            {/* Static Links */}
            <Link
              to="/positions"
              className="font-semibold text-lg border-l-4 pl-2 border-transparent text-white hover:border-purple-500 block"
            >
              Positions
            </Link>
            <Link
              to="/contractor"
              className="font-semibold text-lg border-l-4 pl-2 border-transparent text-white hover:border-purple-500 block"
            >
              Contractors
            </Link>

            {/* Users Section */}
            <div
              className={`font-semibold text-xl flex items-center justify-between cursor-pointer mt-4 border-l-4 pl-2 transition-all duration-300 ${
                openSections.users
                  ? "border-pink-500 text-pink-400"
                  : "border-transparent text-white"
              } hover:border-purple-500 hover:text-white`}
              onClick={() => toggleSection("users")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleSection("users")}
            >
              <div>Users</div>
            </div>

            {openSections.users && (
              <div className="pl-4 text-xs space-y-2 text-white/70">
                <Link to="/admins" className="flex items-center gap-2">
                  <PiArrowBendDownRightBold className="text-base" />
                  Admins
                </Link>
                <Link to="/clients" className="flex items-center gap-2">
                  <PiArrowBendDownRightBold className="text-base" />
                  Clients
                </Link>
                <Link to="/coordinator" className="flex items-center gap-2">
                  <PiArrowBendDownRightBold className="text-base" />
                  Coordinators
                </Link>
              </div>
            )}

            <Link
              to="/profile"
              className="font-semibold text-lg border-l-4 pl-2 border-transparent text-white hover:border-purple-500 block mt-4"
            >
              Profile
            </Link>
          </div>

          <button className="bg-black bg-opacity-70 px-4 py-2 rounded border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white transition mt-6 shadow-md">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
