import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ComparisonsChart = ({ timePoints, fatigueLevels, stressLevels }) => {
  const options = {
    chart: {
      id: 'comparisons-chart',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: timePoints,
      title: {
        text: 'Days',
      },
    },
    yaxis: {
      title: {
        text: 'Health Metrics',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
    colors: ['#00E396', '#FEB019'], // Bar colors
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
      <h2>Comparisons</h2>
      <ReactApexChart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default ComparisonsChart;
