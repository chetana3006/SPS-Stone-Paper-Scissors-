import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LabourGanttChart = () => {
  // Sample data (replace with your actual data)
  const tasks = [
    { taskName: 'Task 1', efficiency: 80 },
    { taskName: 'Task 2', efficiency: 60 },
    { taskName: 'Task 3', efficiency: 30 },
  ];

  // Transform data for Radial Bar Chart
  const series = tasks.map(task => task.efficiency);

  const options = {
    chart: {
      type: 'radialBar',
      height: 400,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Total Efficiency',
            color: '#333', // Color for the total label
          },
          value: {
            show: true,
            fontSize: '20px', // Font size for the efficiency value label
            formatter: function (val) {
              return val + '%';
            },
            color: '#555', // Color for the efficiency value label
          },
        },
        hollow: {
          size: '40%', // Adjust the inner size of the bars
        },
      },
    },
    labels: tasks.map(task => task.taskName), // Custom labels based on task names
    colors: ['#008FFB', '#FFC107', '#36B37E'], // Custom colors for each label
  };

  return (
    <div>
      <h2>Radial Bar Chart</h2>
      <ReactApexChart options={options} series={series} type="radialBar" height={400} />
    </div>
  );
};

export default LabourGanttChart;
