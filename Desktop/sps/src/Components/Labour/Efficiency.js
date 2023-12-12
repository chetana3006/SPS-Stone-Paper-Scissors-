import DonutChart from "./DonutChart";
const EfficiencyDashboard = () => {
    // Sample efficiency data for three weeks
    const week1Efficiency = 80;
    const week2Efficiency = 65;
    const week3Efficiency = 90;
  
    return (
      <div>
        <h2>Efficiency Dashboard</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'column' }}>
          <DonutChart efficiency={week1Efficiency} />
          <DonutChart efficiency={week2Efficiency} />
          
        </div>
      </div>
    );
  };
  
  export default EfficiencyDashboard;