import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => (
  <div className={`${styles.verticalCenter}`}>
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="square-container">
        <div className="content-box text-center">
          <div className={`${styles.headerImage} mb-4 animate-fade-in`}>
            <img
              src="/assets/img/astronaut.png"
              alt="Astronaut"
              className={styles.astronautImage}
            />
          </div>
          <h1 className={`${styles.title} text-white mb-3 mt-3`}>
          🚀 {locale.welcome} <span className={styles.textGlowTitle}>{locale.myUniverse}</span>
          </h1>
          <p className="text-light">
            {locale.introduction}
          </p>
          <p className="text-light">{locale.description}</p>
          <p>{locale.ready}</p>
          <div className="cta-buttons mt-4">
            <button
              onClick={() => setSection('projects')}
              className={`${styles.purpleButton} me-3 btn-lg mb-3`}
            >
              <FontAwesomeIcon icon={faRocket} className="me-2" />
              {locale.discoverProjects}
            </button>
            <button
              onClick={() => setSection('contact')}
              className={`${styles.purpleButton} btn-lg`}
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              {locale.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
