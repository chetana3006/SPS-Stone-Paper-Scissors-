import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const LocationTrackingChart = () => {
  const [locationTrackingData, setLocationTrackingData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/equipment');
      const data = response.data.locationTracking;

      setLocationTrackingData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartOptions = {
    // Customize options based on the chart type
  };

  return (
    <div>
      <h2>Location Tracking Chart</h2>
      <Chart options={chartOptions} series={[{ data: locationTrackingData }]} type="scatter" />
    </div>
  );
};

export default LocationTrackingChart;
