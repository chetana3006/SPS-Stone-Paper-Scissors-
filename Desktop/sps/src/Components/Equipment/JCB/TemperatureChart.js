import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import io from 'socket.io-client';


const TemperatureChart = () => {
  const [currentTemperature, setCurrentTemperature] = useState(200); // Initial temperature value
  const [equipmentDatastate , setEquipmentData] = useState(null);

  // Simulate temperature changes over time (for demonstration purposes)
  useEffect(() => {
    axios.get('http://localhost:8000/e/api/equipment/OHMYGOD_RASPI_WIN')
      .then(response => {
        const e = response.data.equipmentData;
        console.log('The equipment is ', e);

        // Update state with equipment data
        setEquipmentData(e);
        console.log('The equipment data is ', equipmentDatastate);
      })
      .catch(error => {
        console.error('Error fetching equipment data:', error);
      });

      const socket = io('http://localhost:5000', { transports: ['websocket'] }); // Update with your server URL

      socket.on('connect', () => {
        console.log('Connected to server');
      });
  
      // Listen for real-time sensor data updates
      socket.on('sensorDataUpdate', (newData) => {
        try {
          console.log('Received sensorDataUpdate:', newData);
          // Update state with the new data
          console.log('Updating state with new data');
          
          setEquipmentData(newData);
          // setCurrentTemperature(JSON.stringify(newData.sensor[0].data[0].value));
          console.log('State updated successfully');
        } catch (error) {
          console.error('Error updating state:', error);
        }
      });
      
      
  
      // Clean up the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };

  }, [equipmentDatastate?.updated_at]);

  const options = {
    chart: {
      id: 'temperature-gauge-chart',
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#FF4500'], // Gradient color for high temperatures (e.g., orange/red)
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    labels: [`${currentTemperature}°C`], // Corrected labels as an array of strings
  };

  const series = [Number(JSON.stringify(equipmentDatastate?.sensors[0].data[0].value)) ?? 50];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      { <h2>{currentTemperature}</h2>}
    </div>
  );
};

export default TemperatureChart;