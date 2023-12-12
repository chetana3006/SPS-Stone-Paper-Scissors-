import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DualAxisLineChart = () => {
  // Generate random percentage data for the chart
  const generateRandomPercentageData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  };

  // Random percentage values for two data series
  const assignedWorkersData = generateRandomPercentageData(5);
  const unassignedWorkersData = generateRandomPercentageData(5);

  // ApexCharts options
  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      }
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
   
    
    legend:{
      position:'left'
    }
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
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default DualAxisLineChart;