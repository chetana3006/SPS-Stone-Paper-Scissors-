// HeartRateChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const HeartRateChart = () => {
  const [series, setSeries] = useState([{ name: 'Heart Rate', data: [] }]);
  const [options, setOptions] = useState({
    chart: {
      id: 'heart-rate-chart',
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
        text: 'Heart Rate',
      },
    },
  });

  // Simulate real-time heart rate data
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        x: new Date().getTime(),
        y: Math.floor(Math.random() * (100 - 60 + 1) + 60), // Simulating heart rate data
      };

      setSeries([{ data: [...series[0].data, newDataPoint] }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [series]);

  return (
    <div className="heart-rate-chart">
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
};

export default HeartRateChart;
