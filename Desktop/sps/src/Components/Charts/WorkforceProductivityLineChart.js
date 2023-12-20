import React from 'react';
import Chart from 'react-apexcharts';

const WorkforceProductivityLineChart = () => {
  // Sample data for workforce productivity
  const productivityData = {
    options: {
      chart: {
        type: 'line',
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
          text: 'Productivity',
        },
      },
      colors: ['#3498db'], // Custom color for the line chart
    },
    series: [
      {
        name: 'Productivity',
        data: [70, 75, 80, 85, 78],
      },
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Workforce Productivity Line Chart</h2>
      <Chart
        options={productivityData.options}
        series={productivityData.series}
        type="line"
        width="600"
        height="350"
      />
    </div>
  );
};

export default WorkforceProductivityLineChart;
