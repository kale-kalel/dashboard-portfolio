import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TextLogo from './components/atom/text-logo.jsx';
import NavigationBar from './components/organism/navbar.jsx';
import Modal from './components/organism/modal.jsx';

import Dashboard from './pages/dashboard.jsx';
import Experience from './pages/experience.jsx';
import Projects from './pages/projects.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <BrowserRouter>
      <div className="px-4 py-3">

        <header className="top-header mb-3">
          <TextLogo />
          <NavigationBar />
        </header>

        <main className="main-content">
          <Routes>

            <Route
              path="/"
              element={
                <Dashboard
                  onCardClick={setActiveModal}
                />
              }
            />

            <Route
              path="/experience"
              element={
                <Experience
                  onCardClick={setActiveModal}
                />
              }
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

          </Routes>
        </main>

        <Modal
          activeModal={activeModal}
          onClose={() => setActiveModal(null)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;