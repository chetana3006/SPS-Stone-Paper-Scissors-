import React from 'react';
import Chart from 'react-apexcharts';

const NoiseLevelChart = () => {
  const mainColor = '#040732'; // Replace with your desired color

  const noiseLevelData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'],
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Noise Level (dB)',
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: 0,
              to: 100,
              color: mainColor,
            }],
          },
        },
      },
      legend: {
        position: 'left',
      },
      annotations: {
        points: [{
          x: 'Day 1',
          y: 0,
          marker: {
            size: 0,
          },
          label: {
            borderColor: '#000',
            borderWidth: 1,
            text: 'Noise Level', // Label text
            offsetY: 10,
            style: {
              background: mainColor,
              color: '#fff',
              padding: 5,
            },
          },
        }],
      },
    },
    series: [{
      name: 'Noise Level',
      data: [80, 85, 82, 88, 90, 67, 12, 45],
    }],
  };

  return (
    <Chart
      options={noiseLevelData.options}
      series={noiseLevelData.series}
      type="bar"
      width="900"
      height="250"
    />
  );
};

export default NoiseLevelChart;
