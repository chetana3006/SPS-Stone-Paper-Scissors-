import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LabourGanttChart = () => {
  // Sample data (replace with your actual data)
  const tasks = [
    { taskName: 'Week 1', efficiency: 80 },
    { taskName: 'Week 2', efficiency: 60 },
    { taskName: 'Week 3', efficiency: 30 },
  ];

  // Transform data for Radial Bar Chart
  const series = tasks.map(task => task.efficiency);

  const options = {
    chart: {
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Total Efficiency',
            color: '#333', // Color for the total label
          },
          value: {
            show: true,
            formatter: function (val) {
              return val + '%';
            },
            color: '#555', // Color for the efficiency value label
          },
        },
      },
    },
    labels: ['Week 1', 'Week 2', 'Week 3'], // Custom labels
    colors: ['#008FFB', '#FFC107', '#36B37E'], // Custom colors for each label
  };

  const legendStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  return (
    <div>
      <h2>Radial Bar Chart</h2>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      <div style={legendStyles}>
        {tasks.map((task, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                backgroundColor: options.colors[index],
                marginRight: '5px',
                borderRadius: '50%',
              }}
            />
            <span>{task.taskName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabourGanttChart;
