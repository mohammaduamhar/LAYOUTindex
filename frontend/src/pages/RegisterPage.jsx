import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const LocationRegisterForm = () => {
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
       
          }
      console.log(formData);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Location Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} pattern="^\d{10}$" title="Please enter a valid 10-digit phone number" required style={{ width: '100%', padding: '8px' }} />
          {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
  );
};

export default LocationRegisterForm;
