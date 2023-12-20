import React from 'react';
import Chart from 'react-apexcharts';

const LTIRateTrendsLineChart = () => {
  // Sample data for LTI rate trends
  const ltiRateData = {
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        title: {
          text: 'LTI Rate',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ['#e74c3c'], // Custom color for the line
    },
    series: [{
      name: 'LTI Rate',
      data: [0.5, 0.7, 0.3, 0.6, 0.4, 0.8, 0.5, 0.9, 0.7, 1.0, 0.6, 0.8], // Sample LTI rate data
    }],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Lost Time Injury (LTI) Rate Trends</h2>
      <Chart
        options={ltiRateData.options}
        series={ltiRateData.series}
        type="line"
        width="600"
        height="300"
      />
    </div>
  );
};

export default LTIRateTrendsLineChart;
