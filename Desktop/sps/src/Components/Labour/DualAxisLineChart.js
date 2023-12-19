import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DualAxisLineChart = () => {
  // Manual data points for two data series
  const assignedWorkersData = [60, 75, 80, 90, 70];
  const unassignedWorkersData = [40, 25, 20, 10, 30];

  // ApexCharts options
  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2],
    },
    xaxis: {
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    },
    legend: {
      position: 'left',
    },
    colors: ['#536AA9', '#0D1282', '#36B37E'], 
  };

  // ApexCharts series
  const series = [
    {
      name: 'Assigned Workers',
      type: 'line',
      data: assignedWorkersData,
    },
    {
      name: 'Unassigned Workers',
      type: 'line',
      data: unassignedWorkersData,
    },
  ];

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl px-4 py-2'>Attendance</h2>
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default DualAxisLineChart;
