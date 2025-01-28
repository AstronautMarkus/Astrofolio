import styles from './ContactMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactMe = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => (
  <div className={`${styles.verticalCenter}`}>
    <div className="d-flex justify-content-center align-items-center">
      <div className="square-container d-flex flex-column-reverse flex-md-row">
        <div className={styles.imageContainer}>
          <img src="/assets/img/astronaut_relax.webp" alt="Astronaut" className={styles.ContactAstronautImage} />
        </div>
        <div className="content-box text-center">
            <div className={styles.contactCard}>
              <h2>{locale.contact}</h2>
              <p>{locale.contact_subtitle}</p>
              <ul className={styles.contactList}>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span> Santiago de Chile</span>
                </li>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span> +56 9 5036 9308</span>
                </li>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faGithub} />
                  <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className={styles.hiddenLink}>
                    {" "}astronautmarkus
                  </a>
                </li>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faInstagram} />
                  <a href="https://instagram.com/sky._marc" target="_blank" rel="noopener noreferrer" className={styles.hiddenLink}>
                    {" "}sky._marc
                  </a>
                </li>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faSteam} />
                  <a href="https://steamcommunity.com/id/astronautmarkus" target="_blank" rel="noopener noreferrer" className={styles.hiddenLink}>
                    {" "}astronautmarkus
                  </a>
                </li>
                <li className={styles.hiddenLink}>
                  <FontAwesomeIcon icon={faDiscord} />
                  <span> astronautmarkus</span>
                </li>
              </ul>
            </div>
          <div className="cta-buttons mt-4">
            <button
              onClick={() => setSection('')}
              className={`${styles.purpleButton} btn-lg`}
            >
              <FontAwesomeIcon icon={faHome} className="me-2" />
              {locale.home}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactMe;
