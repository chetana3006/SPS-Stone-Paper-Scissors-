import React from 'react';
import ApexCharts from 'react-apexcharts';

const ROPvsDepthChart = () => {
  const data = [
    { x: 10, y: 80 }, // Green zone
    { x: 25, y: 70 }, // Yellow zone
    { x: 40, y: 50 }, // Red zone
    { x: 55, y: 85 }, // Green zone recovery
  ];

  const options = {
    chart: {
      title: 'Rate of Penetration vs. Depth',
      xaxis: {
        label: 'Depth (m)',
      },
      yaxis: {
        label: 'Rate of Penetration (m/min)',
        min: 0,
        max: 120,
      },
    },
    series: [
      {
        name: 'ROP',
        data,
        type: 'line',
        color: '#2980B9',
      },
    ],
    dataLabels: {
      enabled: false,
    },
    annotations: {
      yaxis: [
        {
          x: 0,
          y: 80,
          fillColor: '#4CAF50',
          opacity: 0.2,
          label: {
            text: 'Optimal ROP',
            position: 'top',
            horizontalAlign: 'left',
          },
        },
        {
          x: 0,
          y: 60,
          fillColor: '#FFC107',
          opacity: 0.2,
          label: {
            text: 'Potential Issues',
            position: 'top',
            horizontalAlign: 'left',
          },
        },
        {
          x: 0,
          y: 0,
          fillColor: '#FF0000',
          opacity: 0.2,
          label: {
            text: 'Stop Drilling!',
            position: 'bottom',
            horizontalAlign: 'left',
          },
        },
      ],
    },
  };

  return (
    <div>
      <ApexCharts
        options={options}
        series={data}
        type="line"
        width="600"
        height="300"
      />
    </div>
  );
};

export default ROPvsDepthChart;
