import React from 'react';
import Chart from 'react-apexcharts';

// Lighter Blue Shades:

// #3853A2
// #536AA9
// #6F81AF
// Darker Blue Shades:

// #091061
// #070A4A
// #040732

const EmissionChart = () => {
  // Sample emission data for a single JCB
  const emissionData = {
    options: {
      labels: ['CO', 'NOx', 'Particulate Matter'],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return `${val}%`;
          },
        },
      },
      legend:{
        position:'left'
      },
      colors: ['#3853A2', '#6F81AF', '#091061'],  

    },
    series: [10, 15, 8],
  };

  return (
    <Chart
      options={emissionData.options}
      series={emissionData.series}
      type="pie"
      width="450"
    />
  );
};

export default EmissionChart;
