import React from 'react';
import Chart from 'react-apexcharts';

const SafetyViolationHeatmap = () => {
  // Sample data for Safety Violation Heatmap
  const violationHeatmapData = {
    options: {
      chart: {
        type: 'heatmap',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: false,
          colorScale: {
            ranges: [
              {
                from: 1,
                to: 3,
                name: 'Low Severity',
                color: '#3498db',
              },
              {
                from: 4,
                to: 6,
                name: 'Medium Severity',
                color: '#f39c12',
              },
              {
                from: 7,
                to: 10,
                name: 'High Severity',
                color: '#e74c3c',
              },
            ],
          },
        },
      },
      dataLabels: {
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      xaxis: {
        categories: [
          '2023-01-01',
          '2023-01-02',
          '2023-01-03',
          '2023-01-04',
          '2023-01-05',
        ],
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        categories: ['Violation Type 1', 'Violation Type 2', 'Violation Type 3'],
        title: {
          text: 'Violation Types',
        },
      },
      title: {
        text: 'Safety Violation Heatmap',
        align: 'center',
        style: {
          fontSize: '18px',
        },
      },
    },
    series: [
      {
        name: 'Severity Level',
        data: [
          {
            x: 0,
            y: 0,
            value: 3,
          },
          {
            x: 0,
            y: 1,
            value: 7,
          },
          {
            x: 0,
            y: 2,
            value: 5,
          },
          {
            x: 1,
            y: 0,
            value: 2,
          },
          {
            x: 1,
            y: 1,
            value: 5,
          },
          {
            x: 1,
            y: 2,
            value: 8,
          },
          {
            x: 2,
            y: 0,
            value: 6,
          },
          {
            x: 2,
            y: 1,
            value: 3,
          },
          {
            x: 2,
            y: 2,
            value: 9,
          },
          {
            x: 3,
            y: 0,
            value: 4,
          },
          {
            x: 3,
            y: 1,
            value: 8,
          },
          {
            x: 3,
            y: 2,
            value: 6,
          },
          {
            x: 4,
            y: 0,
            value: 7,
          },
          {
            x: 4,
            y: 1,
            value: 4,
          },
          {
            x: 4,
            y: 2,
            value: 5,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={violationHeatmapData.options}
        series={violationHeatmapData.series}
        type="heatmap"
        width="800"
        height="400"
      />
    </div>
  );
};

export default SafetyViolationHeatmap;
