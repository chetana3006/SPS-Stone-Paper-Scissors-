// OccupancyChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const OccupancyChart = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: 'occupancy-chart',
      type: 'heatmap',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      type: 'categories',
      categories: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4'],
      labels: {
        show: true,
      },
    },
    yaxis: {
      type: 'datetime',
      labels: {
        show: true,
      },
      title: {
        text: 'Time',
      },
    },
    plotOptions: {
      heatmap: {
        radius: 25,
      },
    },
  });

  // Simulate real-time occupancy data
  useEffect(() => {
    const interval = setInterval(() => {
      const newOccupancyData = Array.from({ length: 4 }, () => Math.random() < 0.5 ? 1 : 0);

      setSeries([{
        name: 'Occupancy',
        data: [
          { x: 'Sector 1', y: new Date().getTime(), value: newOccupancyData[0] },
          { x: 'Sector 2', y: new Date().getTime(), value: newOccupancyData[1] },
          { x: 'Sector 3', y: new Date().getTime(), value: newOccupancyData[2] },
          { x: 'Sector 4', y: new Date().getTime(), value: newOccupancyData[3] },
        ],
      }]);
    }, 5000); // Simulating data every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="occupancy-chart">
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  );
};

export default OccupancyChart;
