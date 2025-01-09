import styles from './Home.module.css';

const Home = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => (
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
            className="btn btn-primary me-3 btn-lg"
          >
            {locale.discoverProjects}
          </button>
          <button
            onClick={() => setSection('contact')}
            className="btn btn-outline-light btn-lg"
          >
            {locale.getInTouch}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
