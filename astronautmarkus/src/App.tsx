import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import CookiesAlert from './Components/CookiesAlert/CookiesAlert';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locale, setLocale] = useState(enLocale);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Load language from cookies or detect browser language
  useEffect(() => {
    // Check if cookies have been accepted
    const cookiesConsent = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookiesAccepted='))
      ?.split('=')[1];
  
    if (cookiesConsent === 'true') {
      setCookiesAccepted(true);
    }
  
    // Check language from cookies or detect from browser
    const savedLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1];
  
    if (savedLocale) {
      setLocale(savedLocale === 'es' ? esLocale : enLocale);
    } else {
      const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
      setLocale(browserLanguage === 'es' ? esLocale : enLocale);
    }
  }, []);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAcceptCookies = () => {
    document.cookie = `locale=${locale === esLocale ? 'es' : 'en'}; path=/; max-age=31536000`; // Save language from cookies for 1 year
    document.cookie = `cookiesAccepted=true; path=/; max-age=31536000`; // Save consent for 1 year
    setCookiesAccepted(true);
  };

  const handleRejectCookies = () => {
    setCookiesAccepted(false);
  };

  const renderContent = () => {
    switch (location.pathname) {
      case '/':
        return <Home setSection={(section) => navigate(`/${section}`)} locale={locale} />;
      case '/projects':
        return <Projects locale={locale} setSection={(section) => navigate(`/${section}`)} />;
      case '/resume':
        return <Resume locale={locale} />;
      case '/stats':
        return <Stats locale={locale} />;
      case '/contact':
        return <ContactMe setSection={(section) => navigate(`/${section}`)} locale={locale} />;
      case '/geekzone':
        return <GeekZone setSection={(section) => navigate(`/${section}`)} locale={locale} />;
      default:
        navigate('/');
        return null;
    }
  };

  return (
    <div className="d-flex vh-100">
      <Sidebar
        section={location.pathname === '/' ? 'home' : location.pathname.slice(1)}
        setSection={(section) => navigate(section === 'home' ? '/' : `/${section}`)}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        locale={locale}
        setLocale={setLocale}
      />
      <div className="flex-grow-1 p-4 overflow-auto">
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={300} classNames="fade">
            <div>{renderContent()}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {!cookiesAccepted && (
        <CookiesAlert onAccept={handleAcceptCookies} onReject={handleRejectCookies} locale={locale}/>
      )}
    </div>
  );
};

export default App;
