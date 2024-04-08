import React, { useEffect, useState } from "react";
import axios from "axios";
import "../showLocations.css";
import { Link } from 'react-router-dom';

function ShowLocations() {
  const [showLocations, setShowLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/locations");
        setShowLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div >
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4 mr-50">Registered locations</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {showLocations.map((Location, index) => (
          <div className="wrapper" key={index}>
            <div className="container">
              <div
                className="top"
                style={{
                  height: "60%",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="text-3xl font-semibold mb-4">{Location.name}</h1>
              </div>
              <div className="bottom w-full">
    <Link to={`/registerDevice/${Location._id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg block w-full text-center">Add Device</Link>
    <Link to={`/devicesView/${Location._id}`} className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg block w-full text-center">View Devices</Link>
</div>

            </div>
            <div className="inside">
              <div className="icon">
                <i className="material-icons">Address :{Location.address}</i>
                
                <i className="material-icons">Phone Number :{Location.phone}</i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowLocations;
