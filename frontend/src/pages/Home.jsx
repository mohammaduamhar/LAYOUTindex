import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ShowLocations from "../components/ShowLocations";

const Home = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <FaMapMarkerAlt className="text-6xl md:text-10xl text-yellow-500 mr-2" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Location Manager
          </h1>
        </div>
        <p className="text-lg md:text-xl mb-8">
          Easily manage and organize locations with our intuitive Location Manager tool. Keep track of your places, add details, and streamline your operations effortlessly.
        </p>
      
      </div>
      <ShowLocations /> {/* Place the ShowProduct component here */}
    </div>
  );
};

export default Home;
