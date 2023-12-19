// BodyTemperatureChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const BodyTemperatureChart = () => {
  const [series, setSeries] = useState([{ name: 'Body Temperature', data: [] }]);
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
    xaxis: {
      type: 'datetime',
      labels: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
      title: {
        text: 'Body Temperature',
      },
    },
  });

  // Simulate real-time body temperature data
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        x: new Date().getTime(),
        y: Math.random() * (99 - 97) + 97, // Simulating body temperature data
      };

      setSeries([{ data: [...series[0].data, newDataPoint] }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [series]);

  return (
    <div className="body-temperature-chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default BodyTemperatureChart;
