import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faChartLine, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import './Transitions.css';
import Home from './views/Home';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

const App = () => {
  const [section, setSection] = useState('home');

  const renderContent = () => {
    switch (section) {
      case 'home':
        return <Home setSection={setSection} />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'stats':
        return <Stats />;
      case 'contact':
        return <Contact />;
      default:
        return <div className="content-section">Select an option</div>;
    }
  };
  

  return (
    <div className="d-flex vh-100">

      <div className="dashboard-sidebar d-flex flex-column p-3 shadow">
        <div className="dashboard-logo text-center mb-4">
          <img
            src="https://github.com/AstronautMarkus.png"
            alt="Logo"
            className="rounded-circle mb-2"
            width="80"
          />
          <h5 className="m-0">AstronautMarkus</h5>
        </div>


        <ul className="nav flex-column mb-auto">
          <li className={`nav-item ${section === 'home' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('home')}>
              <FontAwesomeIcon icon={faUser} className="me-2" /> Home
            </button>
          </li>
          <li className={`nav-item ${section === 'projects' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> Projects
            </button>
          </li>
          <li className={`nav-item ${section === 'resume' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('resume')}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Resume
            </button>
          </li>
          <li className={`nav-item ${section === 'stats' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('stats')}>
              <FontAwesomeIcon icon={faChartLine} className="me-2" /> Stats
            </button>
          </li>
          <li className={`nav-item ${section === 'contact' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('contact')}>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact Me
            </button>
          </li>
        </ul>


        <div className="dashboard-footer mt-auto text-center">
            <a href="https://github.com/AstronautMarkus" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light w-100">
              <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
            </a>
          <small className="d-block mt-2">&copy; 2024 AstronautMarkus</small>
        </div>
      </div>

      <div className="flex-grow-1 p-4 overflow-auto">
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
