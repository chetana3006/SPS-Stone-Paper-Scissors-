import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TimeSeriesChart = ({ timePoints, fatigueLevels, stressLevels }) => {
  const options = {
    chart: {
      id: 'time-series-chart',
      stacked: false, 
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: timePoints,
    },
    yaxis: [
      {
        seriesName: 'Fatigue Levels',
        title: {
          text: 'Fatigue Levels',
        },
      },
      {
        seriesName: 'Stress Levels',
        title: {
          text: 'Stress Levels',
        },
      },
    ],
    fill: {
      opacity: 0.7,
    },
    colors: ['#008FFB', '#FFC107'],
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
      <h2>Time Series Analysis</h2>
      <ReactApexChart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default TimeSeriesChart;
