import React from 'react';
import Chart from 'react-apexcharts';

const EngineLoadAreaChart = () => {
  // Sample engine load data for a single JCB, considering 8 days
  const engineLoadData = {
    options: {
      chart: {
        type: 'area',
        toolbar: {
          show: false,
        },
      },
    
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'], // Update with actual day labels
      },
      yaxis: {
        title: {
          text: 'Engine Load (%)',
        },
      },
      
      colors: ['#091061'], 
    },
    series: [{
      name: 'Engine Load', // Legend label for the series
      data: [60, 70, 65, 80, 75, 78, 72, 85], // Update with actual engine load data for each day
    }],
  };

  return (
    <Chart
      options={engineLoadData.options}
      series={engineLoadData.series}
      type="area"
      width="900"
      height="250"
    />
  );
};

export default EngineLoadAreaChart;
