// Fuel Consumption Bar Chart
import React from 'react';
import Chart from 'react-apexcharts';

const FuelConsumptionChart = () => {
  const fuelConsumptionData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with actual day labels
      },
      dataLabels:{
        enabled:false
      },
      yaxis: {
        title: {
          text: 'Fuel Consumption (Liters)',
        },
      },
    },
    series: [{
      name: 'Fuel Consumption',
      data: [20, 22, 18, 25, 20], // Replace with actual fuel consumption data for each day
    }],
  };

  return (
    <Chart
      options={fuelConsumptionData.options}
      series={fuelConsumptionData.series}
      type="bar"
      width="900"
      height="250"
    />
  );
};

export default FuelConsumptionChart;
