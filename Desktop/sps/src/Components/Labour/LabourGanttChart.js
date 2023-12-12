import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LaborGanttChart = () => {
  // Generate random data for the Gantt chart
  const generateRandomTasks = (numTasks) => {
    const tasks = [];

    for (let i = 0; i < numTasks; i++) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + i);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 5) + 1); // Random duration up to 5 days
      const efficiency = Math.floor(Math.random() * 100) + 1; // Random efficiency percentage

      tasks.push({
        taskName: `Task ${i + 1}`,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        efficiency: efficiency,
      });
    }

    return tasks;
  };

  const tasks = generateRandomTasks(5); // You can adjust the number of tasks

  // Transform data for Gantt chart
  const series = [
    {
      data: tasks.map((task) => ({
        x: task.taskName,
        y: [
          new Date(task.startDate).getTime(),
          new Date(task.endDate).getTime(),
        ],
        efficiency: task.efficiency,
      })),
    },
  ];

  // ApexCharts options
  const options = {
    chart: {
      type: 'rangeBar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const task = tasks[dataPointIndex];
        return `<div class="tooltip-container">
                  <span>${task.taskName}</span>
                  <br>
                  <span>Start Date: ${task.startDate}</span>
                  <br>
                  <span>End Date: ${task.endDate}</span>
                  <br>
                  <span>Efficiency: ${task.efficiency}%</span>
                </div>`;
      },
    },
  };

  return (
    <div>
      <h2>Labor Gantt Chart</h2>
      <ReactApexChart options={options} series={series} type="rangeBar" height={350} />
    </div>
  );
};

export default LaborGanttChart;
