import React from 'react';
import Chart from 'chart.js/auto';

const WeatherImpactBarChart = () => {
  // Sample data (expanded for more data points)
  const days = Array.from({ length: 50 }, (_, i) => i + 1);
  const temperature = Array.from({ length: 50 }, () => Math.floor(Math.random() * 40) + 10);
  const windSpeed = Array.from({ length: 50 }, () => Math.floor(Math.random() * 30));
  const precipitation = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));
  const laborProductivity = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);

  const ctx = document.getElementById('weatherImpactChart');

  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperature,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Wind Speed (km/h)',
            data: windSpeed,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'Precipitation (mm)',
            data: precipitation,
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
          },
          {
            label: 'Labor Productivity',
            data: laborProductivity,
            type: 'line',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            yAxisID: 'y-axis-2',
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            title: {
              display: true,
              text: 'Temperature, Wind, Precipitation',
            },
          },
          y2: {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            grid: {
              drawOnChartArea: false,
            },
            title: {
              display: true,
              text: 'Labor Productivity',
            },
          },
        },
      },
    });
  }

  return (
    <div>
      <h2>Weather Impact on Labor Productivity</h2>
      
    </div>
  );
};

export default WeatherImpactBarChart;
