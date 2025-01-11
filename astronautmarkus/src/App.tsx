import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';
import './Transitions.css';

// Containers

import Home from './Components/Containers/Home/Home';
import Projects from './Components/Containers/Projects/Projects';
import Resume from './Components/Containers/Resume/Resume';
import Stats from './Components/Containers/Stats/Stats';
import ContactMe from './Components/Containers/ContactMe/ContactMe';
import GeekZone from './Components/Containers/GeekZone/GeekZone';

// Locales

import enLocale from './locales/en.json';
import esLocale from './locales/es.json';

const App = () => {
  const [section, setSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locale, setLocale] = useState(enLocale);

  

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    setLocale(browserLanguage === 'es' ? esLocale : enLocale);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (section) {
      case 'home':
        return <Home setSection={setSection} locale={locale} />;
      case 'projects':
        return <Projects locale={locale} setSection={setSection} />;
      case 'resume':
        return <Resume locale={locale} />;
      case 'stats':
        return <Stats locale={locale} />;
      case 'contact':
        return <ContactMe setSection={setSection} locale={locale} />;
      case 'special':
        return <GeekZone setSection={setSection} locale={locale} />;
      default:
        return <div className="content-section">Select an option</div>;
    }
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar
        section={section}
        setSection={setSection}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        locale={locale}
        setLocale={setLocale}
      />
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
