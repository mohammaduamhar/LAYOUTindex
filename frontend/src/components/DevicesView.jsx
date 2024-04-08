import React, { useEffect, useState } from "react";
import axios from "axios";
import "../showLocations.css";
import { Link, useParams, useNavigate } from 'react-router-dom';

function DevicesView() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [devices, setDevices] = useState([]);

    const deleteDevice = async (deviceId) =>{
        try {
            const response = await axios.delete(`http://localhost:8000/api/deleteDeviceById/${deviceId}`);
            navigate("/showLocations")
        } catch (error) {
            console.error("Error deleting device:", error);
        }
    }

    useEffect(() => {
        const fetchDevices = async () => {
            try {
              const response = await axios.get(`http://localhost:8000/api/getDevicesByLocationID/${id}`);
              setDevices(response.data);
            } catch (error) {
              console.error("Error fetching products:", error);
            }
          };
      
          fetchDevices();
    },[])

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4 text-center">Associated Devices</h1> {/* Add this line for the heading */}
      <div style={{ display: 'flex', width: '90%', flexWrap: 'wrap' }}>
        {devices.map((device, index) => (
          <div className="wrapper" key={index}>
            <div className="container">
              <div className="top" style={{
                height: '60%',
                width: '100%',
                backgroundSize: 'cover'
              }}>
               
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    
                  </div>
                  <button className="btn flex flex-row bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md" onClick={() => deleteDevice(device._id)}>Delete</button>

                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon"><i className="material-icons">SerialNumber:{device.serialNumber}</i>
              <i className="material-icons">Type :{device.type}</i>
            
              <i className="material-icons">Status :{device.status}</i>
             
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DevicesView;
