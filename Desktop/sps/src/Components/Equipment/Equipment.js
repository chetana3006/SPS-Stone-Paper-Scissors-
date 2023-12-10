import React, { useState, useEffect } from 'react';
import './equipment.css';
import axios from 'axios';

const Equipment = () => {
  const initialFormState = {
    name: '',
    utilizationHours: 0,
    currentLocation: '',
    operationalStatus: 'Operational',
    projectAssociated: '',
    sensors: [],
  };

  const [formData, setFormData] = useState(initialFormState);
  const [equipments, setEquipments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filterCheckboxes, setFilterCheckboxes] = useState({
    name: false,
    utilizationHours: false,
    currentLocation: false,
    operationalStatus: false,
    projectAssociated: false,
  });

  const sensorOptions = [
    { id: 1, name: 'Temperature Sensor 1' },
    { id: 2, name: 'Temperature Sensor 2' },
    { id: 3, name: 'Temperature Sensor 3' },
    { id: 4, name: 'Temperature Sensor 4' },
    { id: 5, name: 'Temperature Sensor 5' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFilterCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddSensor = (selectedSensor) => {
    setFormData((prevData) => ({
      ...prevData,
      sensors: [...prevData.sensors, selectedSensor],
    }));
  };

  const handleChangeSensor = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      sensors: prevData.sensors.map((sensor, i) =>
        i === index ? { ...sensor, [name]: value } : sensor
      ),
    }));
  };

  const handleRemoveSensor = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      sensors: prevData.sensors.filter((_, i) => i !== index),
    }));
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      setEquipments((prevEquipments) => {
        const updatedEquipments = [...prevEquipments];
        updatedEquipments[editIndex] = formData;
        return updatedEquipments;
      });
      setEditIndex(null);
    } else {
      setEquipments((prevEquipments) => [...prevEquipments, formData]);
    }

    setFormData(initialFormState);
  };

  const handleEdit = (index) => {
    setFormData(equipments[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEquipments((prevEquipments) => prevEquipments.filter((_, i) => i !== index));
    setEditIndex(null);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('/equipment/search', { params: { search: formData.name } });
      setEquipments(response.data);
    } catch (error) {
      console.error('Error searching equipments:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    }
  };

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await axios.get('/equipment');
        setEquipments(response.data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    fetchEquipments();
  }, []);

  return (
    <div className='eq-bg'>
      <div className='eq-title-cont'>
        <div className='eq-title-cont-left'>
          <h1 className='eq-title'>Equipments</h1>
        </div>
        <div className='eq-title-cont-right'>
          <button onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
        </div>
      </div>
      <div className='eq-filter-cont'>
        <h3>Search:</h3>
        <div className='filter-checkboxes'>
          <label>
            <input
              type='checkbox'
              name='nameCheckbox'
              checked={filterCheckboxes.name}
              onChange={handleChange}
            />
            Name
          </label>
          <label>
            <input
              type='checkbox'
              name='utilizationHoursCheckbox'
              checked={filterCheckboxes.utilizationHours}
              onChange={handleChange}
            />
            Utilization Hours
          </label>
          <label>
            <input
              type='checkbox'
              name='currentLocationCheckbox'
              checked={filterCheckboxes.currentLocation}
              onChange={handleChange}
            />
            Current Location
          </label>
          <label>
            <input
              type='checkbox'
              name='operationalStatusCheckbox'
              checked={filterCheckboxes.operationalStatus}
              onChange={handleChange}
            />
            Operational Status
          </label>
          <label>
            <input
              type='checkbox'
              name='projectAssociatedCheckbox'
              checked={filterCheckboxes.projectAssociated}
              onChange={handleChange}
            />
            Project Associated
          </label>
        </div>
        <div className='filter-form'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Search by Name'
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='eq-body-cont'>
        <form>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Equipment Name'
          />
          <input
            type='number'
            name='utilizationHours'
            value={formData.utilizationHours}
            onChange={handleChange}
            placeholder='Utilization Hours'
          />
          <input
            type='text'
            name='currentLocation'
            value={formData.currentLocation}
            onChange={handleChange}
            placeholder='Current Location'
          />
          <select name='operationalStatus' value={formData.operationalStatus} onChange={handleChange}>
            <option value='Operational'>Operational</option>
            <option value='Under Repair'>Under Repair</option>
            <option value='Out of Service'>Out of Service</option>
          </select>
          <input
            type='text'
            name='projectAssociated'
            value={formData.projectAssociated}
            onChange={handleChange}
            placeholder='Project Associated'
          />

          <h3>Sensors:</h3>
          {formData.sensors.map((sensor, index) => (
            <div key={index}>
              <input
                type='text'
                name={`sensorName-${index}`}
                value={sensor.name}
                onChange={(e) => handleChangeSensor(index, e)}
                placeholder={`Sensor Name ${index + 1}`}
              />
              <button type='button' onClick={() => handleRemoveSensor(index)}>
                Remove
              </button>
            </div>
          ))}
          <select
            onChange={(e) => handleAddSensor(sensorOptions.find((sensor) => sensor.id === Number(e.target.value)))}
          >
            <option value=''>Select Sensor</option>
            {sensorOptions.map((sensor) => (
              <option key={sensor.id} value={sensor.id}>
                {sensor.name}
              </option>
            ))}
          </select>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Utilization Hours</th>
              <th>Current Location</th>
              <th>Operational Status</th>
              <th>Project Associated</th>
              <th>Sensors</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment, index) => (
              <tr key={index}>
                <td>{equipment.name}</td>
                <td>{equipment.utilizationHours}</td>
                <td>{equipment.currentLocation}</td>
                <td>{equipment.operationalStatus}</td>
                <td>{equipment.projectAssociated}</td>
                <td>
                  {equipment.sensors?.map((sensor, sensorIndex) => (
                    <span key={sensorIndex}>{sensor.name}, </span>
                  ))}
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipment;
