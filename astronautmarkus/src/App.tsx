import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      {/* Lateral bar */}
      <div className="sidebar bg-dark text-light d-flex flex-column p-4 shadow">
        <h4 className="text-center mb-4">AstronautMarkus</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <button className="btn btn-outline-light w-100" onClick={() => setSection('home')}>
              Home
            </button>
          </li>
          <li className="nav-item mb-3">
            <button className="btn btn-outline-light w-100" onClick={() => setSection('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item mb-3">
            <button className="btn btn-outline-light w-100" onClick={() => setSection('resume')}>
              Resume
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light w-100" onClick={() => setSection('stats')}>
              Stats
            </button>
          </li>
        </ul>
        <p className="text-center small mt-auto">© 2024 AstronautMarkus</p>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4 bg-light overflow-auto">
        <TransitionGroup>
          <CSSTransition key={section} timeout={300} classNames="fade">
            {renderContent()}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
