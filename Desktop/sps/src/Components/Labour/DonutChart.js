import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ efficiency }) => {
    const getColor = (efficiency) => {
        if (efficiency >= 80) {
          return '#4CAF50'; // Green for high efficiency
        } else if (efficiency >= 60) {
          return '#FFC107'; // Yellow for moderate efficiency
        } else {
          return '#F44336'; // Red for low efficiency
        }
      };
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Efficiency'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%', // Adjust the size of the donut
        },
      },
    },
  };

  const series = [efficiency];

  return (<ReactApexChart options={options} series={series} type="donut" height={100} />);
};
export default DonutChart;