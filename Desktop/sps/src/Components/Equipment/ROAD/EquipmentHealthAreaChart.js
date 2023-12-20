import React from 'react';
import Chart from 'react-apexcharts';

const EquipmentHealthChart = () => {
  const mainColor = '#6F81AF';

  const equipmentHealthData = {
    options: {
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Replace with actual day labels
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Equipment Health',
        },
      },
      stroke: {
        curve: 'smooth',
        colors: [mainColor], // Set the main color for the series
      },
      fill: {
        type: 'solid',
        colors: [mainColor], // Set the main color for the area fill
      },
      markers: {
        size: 6,
        hover: {
          size: 10,
        },
        colors: [mainColor], // Set the main color for the markers
      },
    },
    series: [{
      name: 'Equipment Health',
      data: [90, 85, 88, 92, 87], // Replace with actual equipment health data for each day
    }],
  };

  return (
    <Chart
      options={equipmentHealthData.options}
      series={equipmentHealthData.series}
      type="area"
      width="400"
      height="250"
    />
  );
};

export default EquipmentHealthChart;
