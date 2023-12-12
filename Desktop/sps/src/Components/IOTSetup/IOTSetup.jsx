import React, { useState } from 'react';
import axios from 'axios';

const IOTSetup = () => {
  const [formData, setFormData] = useState({
    vehicle: '',
    type: '',
    sensorName: '',
    sensorType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/iot',formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="max-w-4xl m-auto p-10 border border-solid border-white"  onSubmit={handleSubmit}>
      <label className="block mb-5" htmlFor="vehicle">Vehicle:</label>
      <input className="min-w-full p-5 mb-6" type="text" id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} required /><br />

      <label className="block mb-5" htmlFor="type">Type:</label>
      <input className="min-w-full p-5 mb-6" type="text" id="type" name="type" value={formData.type} onChange={handleChange} required /><br />

      <label className="block mb-5" htmlFor="sensorName">Sensor Name:</label>
      <input className="min-w-full p-5 mb-6" type="text" id="sensorName" name="sensorName" value={formData.sensorName} onChange={handleChange} required /><br />

      <label className="block mb-5" htmlFor="sensorType">Sensor Type:</label>
      <input className="min-w-full p-5 mb-6" type="text" id="sensorType" name="sensorType" value={formData.sensorType} onChange={handleChange} required /><br />

      <button className="bg-green-300 text-white px-5 py-2 border cursor-pointer" type="submit">Submit</button>
    </form>
  );
};

export default IOTSetup;
