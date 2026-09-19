import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextLogo from './components/atom/text-logo.jsx';
import NavigationBar from './components/organism/navbar.jsx';
import Dashboard from './pages/dashboard.jsx';
import './App.css';

const Experience = () => <div><h2>Experience</h2></div>;
const Projects = () => <div><h2>Projects</h2></div>;

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="top-header">
          <TextLogo />
          <NavigationBar />
        </header>

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