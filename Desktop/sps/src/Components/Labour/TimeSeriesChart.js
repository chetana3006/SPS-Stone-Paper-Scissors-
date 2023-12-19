import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TimeSeriesChart = ({ timePoints, fatigueLevels, stressLevels }) => {
  const options = {
    chart: {
      id: 'time-series-chart',
      stacked: false,
      toolbar: {
        show: false,
      }
    },
    xaxis: {
      categories: timePoints,
    },
    fill: {
      opacity: 0.7,
    },
    dataLabels: {
      enabled: false, // Set to false to hide data labels
    },
    grid: {
      show: false, // Set to false to hide grid lines
    },
    legend:{
      position:'left'
    },
    colors: ['#536AA9', '#3853A2'],
  };

  const series = [
    {
      name: 'Fatigue Levels',
      data: fatigueLevels,
    },
    {
      name: 'Stress Levels',
      data: stressLevels,
    },
  ];

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl '>Health Wellbeing</h2>
      <ReactApexChart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default TimeSeriesChart;