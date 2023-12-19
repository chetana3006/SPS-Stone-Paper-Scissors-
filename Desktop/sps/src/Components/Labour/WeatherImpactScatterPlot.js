import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ScatterPlot = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'scatter',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },

        toolbar: {
          show: false,
        }
      },
      xaxis: {
        title: {
          text: 'Temperature (°F)',
        },
      },
      yaxis: {
        title: {
          text: 'Productivity',
        },
      },
      colors: ['#0D1282'], // Set the color for the scatter points
    },
    series: [
      {
        name: 'Productivity',
        data: [
          { x: 70, y: 85 },
          { x: 75, y: 80 },
          { x: 80, y: 75 },
          { x: 85, y: 70 },
          { x: 90, y: 65 },
          { x: 95, y: 60 },
          { x: 100, y: 55 },
          { x: 105, y: 50 },
          { x: 110, y: 45 },
          { x: 115, y: 40 },
        ],
      },
    ],
  });

  return (
    <div>
      <h1 className='text-gray-500 font-medium text-xl px-4 py-2'>Labour Productivity</h1>
      <Chart options={chartData.options} series={chartData.series} type="scatter" width="500" />
    </div>
  );
};

export default ScatterPlot;
