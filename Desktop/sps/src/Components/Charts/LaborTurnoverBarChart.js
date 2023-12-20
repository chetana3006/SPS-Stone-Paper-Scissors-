import React from 'react';
import Chart from 'react-apexcharts';

const LaborTurnoverRateBarChart = () => {
  // Sample data for labor turnover rate
  const turnoverRateData = {
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        title: {
          text: 'Labor Turnover Rate (%)',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ['#3498db'], // Custom color for the bars
    },
    series: [{
      name: 'Labor Turnover Rate',
      data: [10, 15, 8, 20, 12, 18, 14, 22, 17, 25, 10, 15], // Sample turnover rate percentages
    }],
  };

  return (
    <Chart
      options={turnoverRateData.options}
      series={turnoverRateData.series}
      type="bar"
      width="600"
      height="300"
    />
  );
};

export default LaborTurnoverRateBarChart;
