import React from "react";
import {Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-full border border-gray-800">
      <nav className="flex items-center justify-between px-4 py-1 rounded-full">
        <div className="text-gray-800 text-lg font-bold">Location Master</div>
        <div className="hidden md:flex space-x-4 text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition duration-300">Home</Link>
          <Link to="/ShowLocations" className="hover:text-gray-600 transition duration-300">View Locations</Link>
         
         <Link to="/registerPage" className="hover:text-gray-600 transition duration-300">Add Location</Link>

        </div>
      </nav>
    </div>
  );
};

export default Header;
