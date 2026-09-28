import WelcomeKpi from '../components/molecule/kpi.jsx';

const Dashboard = () => {
  return (
    <div>
      <WelcomeKpi />
      <div className="dashboard-row">
        <div className="dash-card">Dashboard 1</div>
        <div className="dash-card">Dashboard 2</div>
        <div className="dash-card">Dashboard 3</div>
        <div className="dash-card dash-wide">Dashboard 3</div>
      </div>
      <div className="dashboard-row">
        <div className="dash-card">Dashboard 1</div>
        <div className="dash-card dash-wide">Dashboard 2</div>
        <div className="dash-card">Dashboard 3</div>
      </div>
    </div>
  );
};

export default Dashboard;