import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const StressChart = () => {
  const [chartData, setChartData] = useState({
    timePoints: [],
    fatigueLevels: [],
    stressLevels: [],
  });

  const options = {
    chart: {
      id: 'time-series-chart',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: chartData.timePoints,
    },
    fill: {
      opacity: 0.7,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    legend: {
      position: 'left',
    },
    colors: ['#ffff00', '#adff2f'],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data for an individual labor
      const currentTime = new Date();
      const newTimePoints = [...chartData.timePoints, currentTime.toLocaleTimeString()];
      const newFatigueLevels = [...chartData.fatigueLevels, Math.random() * 100];
      const newStressLevels = [...chartData.stressLevels, Math.random() * 100];

      setChartData({
        timePoints: newTimePoints,
        fatigueLevels: newFatigueLevels,
        stressLevels: newStressLevels,
      });
    }, 5000); // Simulate data update every 5 seconds

    return () => clearInterval(interval);
  }, [chartData]);

  const series = [
    {
      name: 'Fatigue Levels',
      data: chartData.fatigueLevels,
    },
    {
      name: 'Stress Levels',
      data: chartData.stressLevels,
    },
  ];

  return (
    <div>
      
      <ReactApexChart options={options} series={series} type="area" height={250} />
    </div>
  );
};

export default StressChart;
