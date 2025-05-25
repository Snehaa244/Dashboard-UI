import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-4 bg-transparent text-white rounded-t-2xl">
      {/* Left side: Logo touching left edge */}
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8578/8578893.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          style={{ marginLeft: 0 }} // ensure no margin
        />
        <span className="text-lg font-semibold hidden sm:inline">Bitcoin</span>
      </div>

      {/* Right side: profile image, name, notification */}
      <div className="flex items-center gap-2 sm:gap-4 mr-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-white"
        />
        <span className="text-sm font-medium hidden sm:inline">Sneha Parmar</span>
        <button className="relative text-white hover:text-cyan-400 focus:outline-none">
          <IoMdNotifications size={22} />
          <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
