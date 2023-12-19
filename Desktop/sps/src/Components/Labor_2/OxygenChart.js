import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const OxygenChart = () => {
  const [series, setSeries] = useState([85]); // Initial simulated oxygen level
  const [options, setOptions] = useState({
    chart: {
      id: 'oxygen-level-radial-chart',
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '13px',
          },
          value: {
            color: '#111',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    colors: ['#008080'], // Teal color for oxygen levels
    labels: ['Oxygen Level'],
  });

  // Simulate real-time oxygen level data
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = Math.round(Math.random() * (100 - 95) + 95); // Rounded whole number
      setSeries([newDataPoint]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="oxygen-level-radial-chart">
      <Chart options={options} series={series} type="radialBar" />
    </div>
  );
};

export default OxygenChart;
