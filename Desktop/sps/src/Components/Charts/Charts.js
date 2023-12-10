import React, { useState } from 'react'
import Chart from "react-apexcharts";
const Charts = () => {
    const [state ,setState] = useState( {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [45, 40, 14, 23, 90, 80, 43, 73]
          }
        ]
      });
  return (
    <div>
         <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
         
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="donut"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="500"
            />
          </div>
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="500"
            />
          </div>
        </div>
        
    </div>
  )
}

export default Charts;