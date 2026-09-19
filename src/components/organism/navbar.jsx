import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="nav-pill">
      <NavLink 
        to="/" 
        end 
        className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Dashboard
      </NavLink>
      <NavLink 
        to="/experience" 
        className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Experience
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        Projects
      </NavLink>
    </nav>
  );
};

export default NavigationBar;