import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const TemperatureGaugeChart = () => {
  const [currentTemperature, setCurrentTemperature] = useState(200); // Initial temperature value

  // Simulate temperature changes over time (for demonstration purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random change in temperature between -5 and 5°C (for demonstration)
      const temperatureChange = Math.floor(Math.random() * 11) - 5;
      const newTemperature = Math.min(Math.max(currentTemperature + temperatureChange, 0), 200); // Ensure temperature stays between 0 and 150°C
      setCurrentTemperature(newTemperature);
    }, 5000); // Update temperature every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentTemperature]);

  const options = {
    chart: {
      id: 'temperature-gauge-chart',
      type: 'radialBar',
      height: 350,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#FF4500'], // Gradient color for high temperatures (e.g., orange/red)
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    labels: [`${currentTemperature}°C`], // Corrected labels as an array of strings
  };

  const series = [currentTemperature];

  return (
    <div>
      <h2>Temperature Gauge Chart</h2>
      <ReactApexChart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
};

export default TemperatureGaugeChart;
