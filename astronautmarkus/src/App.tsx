import { useState, useEffect } from 'react';
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
import enLocale from './locales/en.json';
import esLocale from './locales/es.json';

const App = () => {
  const [section, setSection] = useState(localStorage.getItem('lastSection') || 'home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locale, setLocale] = useState(enLocale);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    setLocale(browserLanguage === 'es' ? esLocale : enLocale);
  }, []);

  useEffect(() => {
    localStorage.setItem('lastSection', section);
  }, [section]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleLanguage = () => {
    setLocale(locale === enLocale ? esLocale : enLocale);
  };

  const renderContent = () => {
    switch (section) {
      case 'home':
        return <Home setSection={setSection} locale={locale} />;
      case 'projects':
        return <Projects locale={locale} />;
      case 'resume':
        return <Resume locale={locale} />;
      case 'stats':
        return <Stats locale={locale} />;
      case 'contact':
        return <Contact locale={locale} />;
      default:
        return <div className="content-section">Select an option</div>;
    }
  };

  return (
    <div className="d-flex vh-100">
      <button className={`rounded sidebar-toggle ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`dashboard-sidebar d-flex flex-column p-3 shadow ${sidebarOpen ? 'open' : ''}`}>
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
              <FontAwesomeIcon icon={faUser} className="me-2" /> {locale.home}
            </button>
          </li>
          <li className={`nav-item ${section === 'projects' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> {locale.projects}
            </button>
          </li>
          <li className={`nav-item ${section === 'resume' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('resume')}>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> {locale.resume}
            </button>
          </li>
          <li className={`nav-item ${section === 'stats' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('stats')}>
              <FontAwesomeIcon icon={faChartLine} className="me-2" /> {locale.stats}
            </button>
          </li>
          <li className={`nav-item ${section === 'contact' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('contact')}>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> {locale.contact}
            </button>
          </li>
        </ul>


        <div className="dashboard-footer mt-auto text-center">
          <button onClick={toggleLanguage} className="btn btn-outline-light w-100 mb-2">
            {locale === enLocale ? '🇪🇸 Español' : '🇬🇧 English'}
          </button>
          <a href="https://github.com/AstronautMarkus" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light w-100">
            <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
          </a>
          <small className="d-block mt-2">&copy; {currentYear} AstronautMarkus</small>
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
