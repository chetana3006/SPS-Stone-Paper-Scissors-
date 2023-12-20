import React from 'react';
import Chart from 'react-apexcharts';

const CombinedDowntimeAreaChart = () => {
  // Sample data for combined downtime
  const downtimeData = {
    options: {
      chart: {
        type: 'area',
        stacked: true,
        height: 350,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      },
      yaxis: {
        title: {
          text: 'Downtime Duration (hours)',
        },
      },
      colors: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12'], // Custom colors for different downtime reasons
    },
    series: [
      {
        name: 'Equipment 1',
        data: [10, 15, 8, 12, 20],
      },
      {
        name: 'Equipment 2',
        data: [8, 10, 15, 18, 25],
      },
      {
        name: 'Equipment 3',
        data: [5, 12, 10, 15, 22],
      },
      // Add more series for additional equipment
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Combined Downtime Stacked Area Chart</h2>
      <Chart
        options={downtimeData.options}
        series={downtimeData.series}
        type="area"
        width="600"
        height="350"
      />
    </div>
  );
};

export default CombinedDowntimeAreaChart;
