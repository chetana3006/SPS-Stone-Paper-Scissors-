import React from 'react';
import Chart from 'react-apexcharts';

const SafetyTrainingHoursAreaChart = () => {
  // Sample data for cumulative safety training hours
  const trainingHoursData = {
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
      },
      yaxis: {
        title: {
          text: 'Training Hours',
        },
      },
      colors: ['#2ecc71'], // Custom color for the area chart
    },
    series: [
      {
        name: 'Cumulative Training Hours',
        data: [50, 120, 200, 300, 400],
      },
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Cumulative Safety Training Hours Area Chart</h2>
      <Chart
        options={trainingHoursData.options}
        series={trainingHoursData.series}
        type="area"
        width="1000"
        height="350"
      />
    </div>
  );
};

export default SafetyTrainingHoursAreaChart;
