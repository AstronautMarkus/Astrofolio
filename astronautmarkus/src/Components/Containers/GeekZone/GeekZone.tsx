import styles from './GeekZone.module.css';

const GeekZone = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => (
  <div className={`${styles.verticalCenter}`}>
    <div className="template-container d-flex justify-content-center align-items-center">
      <div className="square-container">
        <div className="content-box text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="cta-buttons mt-4">
            <button
              onClick={() => setSection('projects')}
              className={`${styles.purpleButton} me-3 btn-lg mb-3`}
            >
              🚀 {locale.discoverProjects}
            </button>
            <button
              onClick={() => setSection('contact')}
              className={`${styles.purpleButton} btn-lg`}
            >
              ✉️ {locale.getInTouch}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GeekZone;