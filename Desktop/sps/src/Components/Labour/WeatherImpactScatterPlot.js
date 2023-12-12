import React from 'react';
import ReactApexChart from 'react-apexcharts';

const WeatherImpactScatterPlot = () => {
  // Sample data (replace with your actual data)
  const days = Array.from({ length: 20 }, (_, i) => i + 1);
  const productivity = [50, 65, 80, 45, 60, 75, 40, 55, 70, 85, 30, 45, 60, 75, 90, 35, 50, 65, 80, 95];
  const temperature = [20, 25, 30, 18, 22, 28, 16, 20, 25, 30, 15, 18, 23, 28, 33, 14, 18, 24, 30, 35];
  const precipitation = [0, 5, 10, 2, 0, 8, 0, 3, 6, 12, 0, 1, 5, 10, 15, 0, 2, 7, 12, 18];

  // ApexCharts options
  const options = {
    chart: {
      type: 'scatter',
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      title: {
        text: 'Days',
      },
    },
    yaxis: {
      title: {
        text: 'Labor Productivity',
      },
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const day = w.globals.seriesX[seriesIndex][dataPointIndex];
        const productivityValue = w.globals.seriesY[seriesIndex][dataPointIndex];
        const temperatureValue = w.globals.seriesZ[seriesIndex][dataPointIndex];
        const precipitationValue = w.globals.seriesPrecipitation[seriesIndex][dataPointIndex];

        return `<div class="tooltip-container">
                  <span>Day: ${day}</span>
                  <br>
                  <span>Productivity: ${productivityValue}</span>
                  <br>
                  <span>Temperature: ${temperatureValue}°C</span>
                  <br>
                  <span>Precipitation: ${precipitationValue}mm</span>
                </div>`;
      },
    },
  };

  // ApexCharts series
  const series = [
    {
      name: 'Scatter Plot',
      data: days.map((day, index) => ({
        x: day,
        y: productivity[index],
        z: temperature[index],
        size: precipitation[index], // Use precipitation as the size attribute
      })),
    },
  ];

  return (
    <div>
      <h2>Weather Impact Scatter Plot</h2>
      <ReactApexChart options={options} series={series} type="scatter" height={350} />
    </div>
  );
};

export default WeatherImpactScatterPlot;
