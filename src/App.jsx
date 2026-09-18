import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Placeholder Pages (we will build the real ones in Step 4)
const Dashboard = () => <div className="page-header"><h2>Overview Metrics</h2></div>;
const Experience = () => <div className="page-header"><h2>Work Experience</h2></div>;
const Projects = () => <div className="page-header"><h2>Project Portfolio</h2></div>;

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="logo">DataDash.</div>
          <nav className="nav-menu">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Dashboard
            </NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Experience
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Projects
            </NavLink>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;