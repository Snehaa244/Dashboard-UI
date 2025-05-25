// MainLayout.jsx
import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      className="flex flex-col md:flex-row h-screen text-white"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `
          radial-gradient(circle at top left, rgba(217, 70, 239, 0.3) 0%, transparent 50%),
          radial-gradient(circle at top right, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          radial-gradient(circle at bottom left, rgba(74, 222, 128, 0.10) 0%, transparent 80%)
        `,
        backgroundBlendMode: "screen",
      }}
    >
      {/* Sidebar becomes collapsible or horizontal depending on screen size */}
      <div className="w-full md:w-auto">
        <Sidebar />
      </div>

      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        <Header />
        <div className="mt-4 bg-transparent border border-purple-500 rounded-2xl p-4 sm:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
