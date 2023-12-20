import React from 'react';
import Chart from 'react-apexcharts';

const AttendanceTrendsLineChart = () => {
  // Sample data for absenteeism and attendance trends
  const attendanceData = {
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
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      },
      yaxis: {
        title: {
          text: 'Rate (%)',
        },
      },
      colors: ['#3498db', '#2ecc71'], // Custom colors for absenteeism and attendance lines
    },
    series: [
      {
        name: 'Absenteeism Rate',
        data: [5, 8, 6, 10, 7],
      },
      {
        name: 'Attendance Rate',
        data: [95, 92, 94, 90, 93],
      },
    ],
  };

  return (
    <div>
      <h2 className='text-gray-500 font-medium text-xl'>Attendance Trends Line Chart</h2>
      <Chart
        options={attendanceData.options}
        series={attendanceData.series}
        type="line"
        width="800"
        height="300"
      />
    </div>
  );
};

export default AttendanceTrendsLineChart;
