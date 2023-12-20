import React from 'react';
import Chart from 'react-apexcharts';

const SafeBehaviorScorecardHeatmap = () => {
  // Sample data for Safe Behavior Scorecard Heatmap
  const scorecardHeatmapData = {
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
                from: 0,
                to: 25,
                name: 'Low Adherence',
                color: '#e74c3c',
              },
              {
                from: 26,
                to: 50,
                name: 'Medium Adherence',
                color: '#f39c12',
              },
              {
                from: 51,
                to: 75,
                name: 'High Adherence',
                color: '#3498db',
              },
              {
                from: 76,
                to: 100,
                name: 'Excellent Adherence',
                color: '#27ae60',
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
        categories: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5'],
        title: {
          text: 'Employees',
        },
      },
      yaxis: {
        categories: ['Safety Behavior 1', 'Safety Behavior 2', 'Safety Behavior 3'],
        title: {
          text: 'Safety Behaviors',
        },
      },
      title: {
        text: 'Safe Behavior Scorecard Heatmap',
        align: 'center',
        style: {
          fontSize: '18px',
        },
      },
    },
    series: [
      {
        name: 'Adherence Level',
        data: [
          {
            x: 0,
            y: 0,
            value: 82,
          },
          {
            x: 0,
            y: 1,
            value: 45,
          },
          {
            x: 0,
            y: 2,
            value: 67,
          },
          {
            x: 1,
            y: 0,
            value: 95,
          },
          {
            x: 1,
            y: 1,
            value: 28,
          },
          {
            x: 1,
            y: 2,
            value: 73,
          },
          {
            x: 2,
            y: 0,
            value: 60,
          },
          {
            x: 2,
            y: 1,
            value: 88,
          },
          {
            x: 2,
            y: 2,
            value: 40,
          },
          {
            x: 3,
            y: 0,
            value: 78,
          },
          {
            x: 3,
            y: 1,
            value: 55,
          },
          {
            x: 3,
            y: 2,
            value: 92,
          },
          {
            x: 4,
            y: 0,
            value: 50,
          },
          {
            x: 4,
            y: 1,
            value: 68,
          },
          {
            x: 4,
            y: 2,
            value: 85,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={scorecardHeatmapData.options}
        series={scorecardHeatmapData.series}
        type="heatmap"
        width="800"
        height="400"
      />
    </div>
  );
};

export default SafeBehaviorScorecardHeatmap;
