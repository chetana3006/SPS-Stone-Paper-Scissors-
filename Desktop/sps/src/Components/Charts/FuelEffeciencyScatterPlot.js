import React from 'react';
import Chart from 'react-apexcharts';

const FuelEfficiencyScatterPlot = () => {
  // Sample data for fuel efficiency
  const fuelEfficiencyData = {
    options: {
      chart: {
        id: 'scatter',
        type: 'scatter',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        title: {
          text: 'Fuel Consumption',
        },
      },
      yaxis: {
        title: {
          text: 'Utilization Rate',
        },
      },
      colors: ['#2ecc71'], // Custom color for scatter points
    },
    series: [{
      name: 'Fuel Efficiency',
      data: [
        { x: 20, y: 75 },
        { x: 25, y: 80 },
        { x: 18, y: 65 },
        { x: 22, y: 70 },
        { x: 15, y: 60 },
        // Add more data points as needed
      ],
    }],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Fuel Efficiency Scatter Plot</h2>
      <Chart
        options={fuelEfficiencyData.options}
        series={fuelEfficiencyData.series}
        type="scatter"
        width="600"
        height="350"
      />
    </div>
  );
};

export default FuelEfficiencyScatterPlot;
