import React from 'react';
import Chart from 'react-apexcharts';

const PPEComplianceTimelineChart = () => {
  // Sample data for PPE compliance timeline
  const complianceTimelineData = {
    options: {
      chart: {
        type: 'timeline',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ['#27ae60', '#e74c3c', '#3498db'], // Custom colors for compliant, non-compliant, and unknown data points
      xaxis: {
        type: 'datetime',
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        title: {
          text: 'PPE Compliance',
        },
      },
    },
    series: [
      {
        data: [
          {
            x: '2023-01-01',
            y: 'Compliant',
            fillColor: '#27ae60',
          },
          {
            x: '2023-02-01',
            y: 'Non-Compliant',
            fillColor: '#e74c3c',
          },
          {
            x: '2023-03-01',
            y: 'Unknown',
            fillColor: '#3498db',
          },
          {
            x: '2023-04-01',
            y: 'Compliant',
            fillColor: '#27ae60',
          },
          {
            x: '2023-05-01',
            y: 'Non-Compliant',
            fillColor: '#e74c3c',
          },
          // Add more data points as needed
        ],
      },
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>PPE Compliance Timeline Chart</h2>
      <Chart
        options={complianceTimelineData.options}
        series={complianceTimelineData.series}
        type="timeline"
        width="600"
        height="350"
      />
    </div>
  );
};

export default PPEComplianceTimelineChart;
