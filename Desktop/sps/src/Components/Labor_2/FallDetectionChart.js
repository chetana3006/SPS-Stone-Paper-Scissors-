// FallDetectionChart.js
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const FallDetectionChart = () => {
  const [series, setSeries] = useState([{ name: 'Fall Detection', data: [] }]);
  const [options, setOptions] = useState({
    chart: {
      id: 'fall-detection-chart',
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
        text: 'Fall Detection',
      },
    },
  });

  // Simulate real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = {
        x: new Date().getTime(),
        y: Math.random() < 0.05 ? 1 : 0, // Simulating a fall detection event
      };

      setSeries([{ data: [...series[0].data, newDataPoint] }]);
    }, 1000);

    return () => clearInterval(interval);
  }, [series]);

  return (
    <div className="fall-detection-chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default FallDetectionChart;
