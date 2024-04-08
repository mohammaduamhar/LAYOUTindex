import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "flowbite-react";
import '../index.css';

const LocationRegisterForm = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for the field being edited
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (formData.name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (formData.address.trim() === '') {
      validationErrors.address = 'Address is required';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(validationErrors);

    // If there are no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post("http://localhost:8000/api/registerLocation", formData, {
          headers: { "Content-Type":  "application/json" },
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
      console.log(formData);
      navigate('/');
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Location Registration Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          {errors.address && <span className="text-red-500">{errors.address}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} pattern="^\d{10}$" title="Please enter a valid 10-digit phone number" required className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>
        <Button gradientDuoTone="purpleToPink" className='forced-color-adjust-none rounded'>hellow</Button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
      </form>
    </div>
  );
};

export default LocationRegisterForm;
