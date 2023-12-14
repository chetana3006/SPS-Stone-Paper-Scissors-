import React from 'react';
import Chart from 'react-apexcharts';

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
