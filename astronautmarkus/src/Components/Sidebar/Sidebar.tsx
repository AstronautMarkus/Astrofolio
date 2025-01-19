import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faChartLine, faProjectDiagram, faEnvelope, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Sidebar.css';
import enLocale from '../../locales/en.json';
import esLocale from '../../locales/es.json';

interface SidebarProps {
  section: string;
  setSection: (section: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  locale: typeof enLocale;
  setLocale: React.Dispatch<React.SetStateAction<typeof enLocale>>;
}

const Sidebar = ({ section, setSection, sidebarOpen, toggleSidebar, locale, setLocale }: SidebarProps) => {
  const currentYear = new Date().getFullYear();

  // Leer si el usuario aceptó cookies
  const cookiesAccepted = document.cookie
    .split('; ')
    .find((row) => row.startsWith('cookiesAccepted='))
    ?.split('=')[1] === 'true';

  const toggleLanguage = () => {
    const newLocale = locale === enLocale ? esLocale : enLocale;
    setLocale(newLocale);

    // Guardar el idioma solo si el usuario aceptó cookies
    if (cookiesAccepted) {
      document.cookie = `locale=${newLocale === esLocale ? 'es' : 'en'}; path=/; max-age=31536000`;
    }
  };

  return (
    <>
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
          <li className={`special-nav-item ${section === 'special' ? 'active' : ''}`}>
            <button className="btn text-start w-100" onClick={() => setSection('geekzone')}>
              <FontAwesomeIcon icon={faSpaceShuttle} className="me-2" /> {locale.marcosreyesgeekzone}
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
            <img
              src={locale === enLocale ? '/assets/img/flags/spanish_flag.svg' : '/assets/img/flags/english_flag.svg'}
              alt={locale === enLocale ? 'Español' : 'English'}
              className="language-flag"
            />
            {locale === enLocale ? ' Español' : ' English'}
          </button>
          <a href="https://github.com/AstronautMarkus" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light w-100">
            <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
          </a>
          <small className="d-block mt-2">&copy; {currentYear} AstronautMarkus</small>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
