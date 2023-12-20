import React from 'react';
import Chart from 'react-apexcharts';

const SafetyIncidentHistoryLineChart = () => {
  // Sample data for safety incident history
  const incidentHistoryData = {
    options: {
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
      },
      yaxis: {
        title: {
          text: 'Number of Incidents',
        },
      },
      colors: ['#e74c3c'], // Custom color for the line chart
    },
    series: [
      {
        name: 'Safety Incidents',
        data: [5, 8, 6, 10, 7],
      },
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Safety Incident History Line Chart</h2>
      <Chart
        options={incidentHistoryData.options}
        series={incidentHistoryData.series}
        type="line"
        width="900"
        height="300"
      />
    </div>
  );
};

export default SafetyIncidentHistoryLineChart;
