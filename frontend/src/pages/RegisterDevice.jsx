import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegisterDevice = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    serialNumber: generateSerialNumber(),
    type: 'pos',
    image: '',
    status: 'active',
    locationID: id
  });

  const [errors, setErrors] = useState({});

  function generateSerialNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 12;
    let serialNumber = '';
    for (let i = 0; i < length; i++) {
      serialNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return serialNumber;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData({ ...formData, image: event.target.result });
    };

    const upload =() =>{
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      axios.post('http://localhost:8000/upload',formData)
        .then(res =>{})
        .catch(err => console.log(err));
  
     }
  
     upload();

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.image) {
      errors.image = 'Please select an image';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const res = await axios.post('http://localhost:8000/api/registerDevice', formData, { headers: { "Content-Type": "application/json" } });
      console.log(res.data);
      console.log(formData);
      navigate(`/showLocations`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4  rounded-sm max-w-md mx-auto">
      <label className="block mb-4">
        Serial Number:
        <input type="text" name="serialNumber" value={formData.serialNumber} readOnly className="block w-full mt-1 p-2 border rounded-md focus:outline-none" />
      </label>
      <label className="block mb-4">
        Type:
        <select name="type" value={formData.type} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md focus:outline-none">
          <option value="pos">POS</option>
          <option value="kiosk">Kiosk</option>
          <option value="signage">Signage</option>
        </select>
      </label>
      <label className="block mb-4">
        Image:
        <input type="file" accept="image/*" name="image" onChange={handleImageChange} className="block mt-1 p-2 border rounded-md focus:outline-none" />
        {errors.image && <span className="text-red-500">{errors.image}</span>}
      </label>
      {formData.image && (
        <div className="flex justify-center">
          <img src={formData.image} alt="Uploaded" className="max-w-full" />
        </div>
      )}
      <label className="block mb-4">
        Status:
        <select name="status" value={formData.status} onChange={handleChange} className="block w-full mt-1 p-2 border rounded-md focus:outline-none">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
    </form>
  );
};

export default RegisterDevice;
