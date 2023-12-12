import React from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import ComparisonsChart from './ComparisonsChart';

const HealthWellnessDashboard = () => {
  // Sample data (replace with your actual data)
  const timePoints = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  const fatigueLevels = [30, 40, 35, 50, 45, 25, 30];
  const stressLevels = [20, 25, 30, 15, 10, 28, 22];

  return (
    <div>
      <TimeSeriesChart timePoints={timePoints} fatigueLevels={fatigueLevels} stressLevels={stressLevels} />
      {/* <ComparisonsChart timePoints={timePoints} fatigueLevels={fatigueLevels} stressLevels={stressLevels} /> */}
    </div>
  );
};

export default HealthWellnessDashboard;
