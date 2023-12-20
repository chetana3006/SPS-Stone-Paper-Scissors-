import React from 'react';
import Chart from 'react-apexcharts';

const OvertimeDistributionPieChart = () => {
  // Sample data for overtime distribution
  const overtimeData = {
    options: {
      labels: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5'],
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return `${val}%`;
        },
      },
      legend: {
        position: 'bottom',
      },
      colors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'], // Custom colors for each slice
    },
    series: [20, 15, 25, 10, 30], // Sample overtime distribution percentages
  };

  return (
    <div>
        <h2 className='text-gray-500 font-medium text-xl'>Overtime Distribution Pie Chart</h2>
    <Chart
      options={overtimeData.options}
      series={overtimeData.series}
      type="pie"
      width="400"
    />
    </div>
  );
};

export default OvertimeDistributionPieChart;
