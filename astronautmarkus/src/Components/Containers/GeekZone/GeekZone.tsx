import styles from './GeekZone.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const GeekZone = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => (
  <div className={`${styles.verticalCenter}`}>
    <div className="template-container d-flex justify-content-center align-items-center">
      <div className="square-container">
        <div className="content-box text-center">
            <p>
            This page is a work in progress. Please check back later ᗜ_ᗜ
            </p>
            <img src="/assets/img/fumo-fumo-fumo.gif" alt="Penguin" />
            <div className="cta-buttons mt-4">
            <button
              onClick={() => setSection('home')}
              className={`${styles.purpleButton} me-3 btn-lg mb-3`}
            >
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </button>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default GeekZone;