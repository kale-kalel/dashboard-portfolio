import { kpiData } from '../../data/kpi-data.js';

const KPI = ({ value, text }) => {
  return (
    <div className="kpi-item">
      <span className="kpi-value">{value}</span>
      <span className="kpi-label">{text}</span>
    </div>
  );
};

const WelcomeKpi = () => {
  return (
    <div className="welcome-section">
      <div className="greeting-wrapper">
        <h1 className="greeting-text">
          Hi, I’m <span className="text-purple">Kalel</span>
        </h1>
        <p className="greeting-subtext">Aspiring Data Analyst</p>
      </div>
      
      <div className="kpi-container">
        {kpiData.map((item) => (
          <KPI key={item.id} value={item.value} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default WelcomeKpi;