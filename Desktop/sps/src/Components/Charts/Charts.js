import React, { useState, useEffect } from 'react';
import { useWebSocket } from './WebSocketContext';
import ReactApexChart from 'react-apexcharts';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const [safetyIncidents, setSafetyIncidents] = useState([]);
  const socket = useWebSocket();

  const initialChartData = {
    options: {
      chart: {
        id: 'realtime',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'Fall',
        data: [],
      },
      {
        name: 'Chemical Spill',
        data: [],
      },
      {
        name: 'Equipment Malfunction',
        data: [],
      },
    ],
  };

  const [chartData, setChartData] = useState(initialChartData);

  useEffect(() => {
    if (!socket) return;

    // Listen for safety incident updates
    socket.on('incident_update', (data) => {
      setSafetyIncidents((prevIncidents) => [...prevIncidents, data]);

      // Update chart data
      setChartData((prevChartData) => {
        const newCategories = [...prevChartData.options.xaxis.categories, new Date().toLocaleTimeString()];
        const newDataFall = [...prevChartData.series[0].data, prevIncidents.filter((incident) => incident === 'Fall').length];
        const newDataChemicalSpill = [...prevChartData.series[1].data, prevIncidents.filter((incident) => incident === 'Chemical Spill').length];
        const newDataEquipmentMalfunction = [...prevChartData.series[2].data, prevIncidents.filter((incident) => incident === 'Equipment Malfunction').length];

        return {
          options: {
            ...prevChartData.options,
            xaxis: { categories: newCategories },
          },
          series: [
            { ...prevChartData.series[0], data: newDataFall },
            { ...prevChartData.series[1], data: newDataChemicalSpill },
            { ...prevChartData.series[2], data: newDataEquipmentMalfunction },
          ],
        };
      });
    });

    return () => {
      // Clean up event listeners when the component unmounts
      socket.off('incident_update');
    };
  }, [socket]);

  return (
    <div>
      <h1>Safety Dashboard</h1>
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      <Line data={chartData} height={350} />
      <ul>
        {safetyIncidents.map((incident, index) => (
          <li key={index}>{incident}</li>
        ))}
      </ul>
    </div>
  );
};

export default Charts;
