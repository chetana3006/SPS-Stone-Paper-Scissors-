import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const BodyTemperatureChart = () => {
  const [series, setSeries] = useState([Math.random() * (99 - 97) + 97]); // Initial random temperature
  const [options, setOptions] = useState({
    chart: {
      id: 'body-temperature-chart',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val.toFixed(1) + ' °F';
            },
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
        gradientToColors: ['#FFD700'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    labels: ['Body Temperature'],
  });

  // Simulate real-time body temperature data
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = Math.random() * (99 - 97) + 97; // Simulating body temperature data
      setSeries([newDataPoint]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body-temperature-chart">
      <Chart options={options} series={series} type="radialBar" height={300} />
    </div>
  );
};

export default BodyTemperatureChart;
