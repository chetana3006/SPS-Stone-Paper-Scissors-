import React from 'react';
import ReactApexChart from 'react-apexcharts';


// Certainly! Here are a few more green shades that you might find suitable for a professional color palette:

// Olive Green:

// HEX: #808000
// RGB: 128, 128, 0
// Teal Green:

// HEX: #008080
// RGB: 0, 128, 128
// Sage Green:

// HEX: #BCD68D
// RGB: 188, 214, 141
// Mint Green:

// HEX: #98FB98
// RGB: 152, 251, 152
// Emerald Green:

// HEX: #50C878
// RGB: 80, 200, 120
// Lime Green:

// HEX: #00FF00
// RGB: 0, 255, 0

const LabourGanttChart = () => {
  // Sample data (replace with your actual data)
  const tasks = [
    { taskName: 'Week 1', efficiency: 20 },
    { taskName: 'Week 2', efficiency: 15 },
    
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
    colors: ['#091061', '#536AA9', '#36B37E'], // Custom colors for each label
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Task Efficiency</h2>
      <ReactApexChart options={options} series={series} type="radialBar" height={400} />
    </div>
  );
};

export default LabourGanttChart;
