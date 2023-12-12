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
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2],
    },
    title: {
      text: 'Dual Axis Line Chart',
    },
    xaxis: {
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    },
    yaxis: [
      {
        title: {
          text: 'Assigned Workers (%)',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Unassigned Workers (%)',
        },
      },
    ],
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
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default DualAxisLineChart;
