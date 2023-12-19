import React from 'react';
import Chart from 'react-apexcharts';

const FuelConsumptionChart = () => {
  // Sample fuel consumption data for a single JCB, considering 8 days
  const fuelConsumptionData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'], // Update with actual day labels
      },
      dataLabels: {
        enabled: false,
        offsetY: -10, // Adjust the offset if needed
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ['#040732'],
      legend: {
        position: 'left',
      },
    },
    series: [{
      name: 'Fuel Consumption',
      data: [20, 22, 18, 25, 20, 23, 19, 26], // Update with actual fuel consumption data for each day
    }],
  };

  return (
    <Chart
      options={fuelConsumptionData.options}
      series={fuelConsumptionData.series}
      type="bar"
      width="850"
      height="250"
    />
  );
};

export default FuelConsumptionChart;
