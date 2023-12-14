// Temperature Line Chart
import React from 'react';
import Chart from 'react-apexcharts';

const TemperatureChart = () => {
  const temperatureData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with actual day labels
      },
      yaxis: {
        title: {
          text: 'Temperature (°C)',
        },
      },
    },
    series: [{
      name: 'Temperature',
      data: [25, 28, 24, 26, 27], // Replace with actual temperature data for each day
    }],
  };

  return (
    <Chart
      options={temperatureData.options}
      series={temperatureData.series}
      type="line"
      width="600"
      height="250"
    />
  );
};

export default TemperatureChart;
