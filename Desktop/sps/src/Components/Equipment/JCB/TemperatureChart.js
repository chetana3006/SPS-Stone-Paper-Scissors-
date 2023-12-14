import React from 'react';
import Chart from 'react-apexcharts';

const TemperatureChart = () => {
  // Sample temperature data for a single JCB, considering days
  const temperatureData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with actual day labels
      },
    },
    series: [{
      name: 'Engine Temperature',
      data: [70, 72, 75, 78, 80], // Replace with actual temperature data for each day
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
