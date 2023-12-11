import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';

const Charts = () => {
  const [sensorData, setSensorData] = useState([
    {
      name: 'Temperature Sensor',
      type: 'temperature',
      data: [
        { timestamp: '2023-12-10T08:00:00Z', value: 25 },
        { timestamp: '2023-12-10T09:00:00Z', value: 28 },
        { timestamp: '2023-12-10T10:00:00Z', value: 24 },
        // Add more data points as needed
      ],
    },
    {
      name: 'Humidity Sensor',
      type: 'humidity',
      data: [
        { timestamp: '2023-12-10T08:00:00Z', value: 60 },
        { timestamp: '2023-12-10T09:00:00Z', value: 65 },
        { timestamp: '2023-12-10T10:00:00Z', value: 62 },
        // Add more data points as needed
      ],
    },
    {
      name: 'Vibration Sensor',
      type: 'vibration',
      data: [
        { timestamp: '2023-12-10T08:00:00Z', value: 0.5 },
        { timestamp: '2023-12-10T09:00:00Z', value: 0.8 },
        { timestamp: '2023-12-10T10:00:00Z', value: 0.6 },
        // Add more data points as needed
      ],
    },
    {
      name: 'Pressure Sensor',
      type: 'pressure',
      data: [
        { timestamp: '2023-12-10T08:00:00Z', value: 1010 },
        { timestamp: '2023-12-10T09:00:00Z', value: 1012 },
        { timestamp: '2023-12-10T10:00:00Z', value: 1008 },
        // Add more data points as needed
      ],
    },
  ]);

  const [selectedSensor, setSelectedSensor] = useState(null);

  useEffect(() => {
    if (sensorData.length > 0) {
      setSelectedSensor(sensorData[0]);
    }
  }, [sensorData]);

  const handleSensorChange = (e) => {
    const selectedSensor = JSON.parse(e.target.value);
    setSelectedSensor(selectedSensor);
  };

  const chartOptionsMap = {
    temperature: {
      options: {
        chart: {
          id: 'temperature-line-chart',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Temperature (°C)',
          },
        },
      },
    },
    humidity: {
      options: {
        chart: {
          id: 'humidity-line-chart',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Humidity (%)',
          },
        },
      },
    },
    vibration: {
      options: {
        chart: {
          id: 'vibration-line-chart',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Vibration (m/s^2)',
          },
        },
      },
    },
    pressure: {
      options: {
        chart: {
          id: 'pressure-line-chart',
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: 'Pressure (hPa)',
          },
        },
      },
    },
  };

  const getChartOptions = (sensorType) => {
    return chartOptionsMap[sensorType] || {};
  };

  return (
    <div>
      <h1>JCB Equipment - Sensor Data</h1>

      <select onChange={handleSensorChange} value={JSON.stringify(selectedSensor)}>
        {sensorData.map((sensor, index) => (
          <option key={index} value={JSON.stringify(sensor)}>
            {sensor.name}
          </option>
        ))}
      </select>

      {selectedSensor && (
        <div>
          <h2>{selectedSensor.name} Chart</h2>
          <ApexChart
            options={getChartOptions(selectedSensor.type).options}
            series={selectedSensor.data.map((datapoint) => ({
              x: new Date(datapoint.timestamp).getTime(),
              y: datapoint.value,
            }))}
            type="line"
            height={400}
          />
        </div>
      )}
    </div>
  );
};

export default Charts;
