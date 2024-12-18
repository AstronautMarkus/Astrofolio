import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faChartLine, faCogs, faProjectDiagram, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Transitions.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';

const App = () => {
  const [section, setSection] = useState('home');

  const renderContent = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'stats':
        return <Stats />;
      default:
        return <div className="content-section">Seleccione una sección</div>;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="dashboard-sidebar bg-dark text-light d-flex flex-column p-3 shadow">
        <div className="dashboard-logo text-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Logo"
            className="rounded-circle mb-2"
            width="80"
          />
          <h5 className="m-0">AstronautMarkus</h5>
        </div>

        {/* Navegación */}
        <ul className="nav flex-column mb-auto">
          <li className={`nav-item ${section === 'home' ? 'active' : ''}`}>
            <button className="btn btn-dark text-start w-100" onClick={() => setSection('home')}>
              <FontAwesomeIcon icon={faUser} className="me-2" /> Home
            </button>
          </li>
          <li className={`nav-item ${section === 'projects' ? 'active' : ''}`}>
            <button className="btn btn-dark text-start w-100" onClick={() => setSection('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> Projects
            </button>
          </li>
          <li className={`nav-item ${section === 'resume' ? 'active' : ''}`}>
            <button className="btn btn-dark text-start w-100" onClick={() => setSection('resume')}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Resume
            </button>
          </li>
          <li className={`nav-item ${section === 'stats' ? 'active' : ''}`}>
            <button className="btn btn-dark text-start w-100" onClick={() => setSection('stats')}>
              <FontAwesomeIcon icon={faChartLine} className="me-2" /> Stats
            </button>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-auto text-center">
          <button className="btn btn-outline-light w-100">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
          </button>
          <small className="d-block mt-2">&copy; 2024 AstronautMarkus</small>
        </div>
      </div>

      {/* Contenido principal con transiciones */}
      <div className="flex-grow-1 p-4 bg-light overflow-auto">
        <TransitionGroup>
          <CSSTransition key={section} timeout={300} classNames="fade">
            <div>{renderContent()}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
