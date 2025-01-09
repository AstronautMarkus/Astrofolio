import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Contact = ({locale}:{locale:any}) => {
  return (
    <div className="home-container d-flex justify-content-center align-items-center">
      <div className="square-container">
        <div className="content-box text-center">
          <h1 className={`${styles.title} text-white mb-3 mt-3`}>{locale.contact}</h1> {/* Use localized text */}
          <p className="text-light mb-4">{locale.contact_subtitle}</p>

          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
            <div className={`mb-4 animate-fade-in text-center text-md-start`}>
              <img
                src="/assets/img/astronaut_relax.webp"
                alt="Astronaut"
                className={styles.astronautImage}
              />
            </div>
            <div className={`${styles.contactInfo} ms-md-4 mt-3 mt-md-0`}>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <span className={styles.label}>Name:</span> Marcos Reyes
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <span className={styles.label}>Email:</span> 
                <a href="mailto:marcosreyesmartinez2003@gmail.com" className={styles.link}>marcosreyesmartinez2003@gmail.com</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <span className={styles.label}>{locale.phone}:</span>
                <a href="tel:+56950369308" className={styles.link}>+56 95036 9308</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                <span className={styles.label}>GitHub:</span> 
                <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className={styles.link}>github.com/astronautmarkus</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                <span className={styles.label}>LinkedIn:</span> 
                <a href="https://linkedin.com/in/markusreyes" target="_blank" rel="noopener noreferrer" className={styles.link}>linkedin.com/in/markusreyes</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                <span className={styles.label}>Instagram:</span> 
                <a href="https://instagram.com/sky._marc" target="_blank" rel="noopener noreferrer" className={styles.link}>@sky._marc</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faDiscord} className={styles.icon} />
                <span className={styles.label}>Discord:</span> AstronautMarkus
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                <span className={styles.label}>{locale.location}:</span> {/* Use localized text */}
                Santiago de Chile
              </div>
            </div>
          </div>

          <div className={`mt-4 d-flex justify-content-center gap-3`}>
            <a href="mailto:marcosreyesmartinez2003@gmail.com" className={styles.purpleButton}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> {locale.contact_email_me}
            </a>
            <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className={styles.purpleButton}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} /> {locale.contact_view_github}
            </a>
            <a href="https://linkedin.com/in/markusreyes" target="_blank" rel="noopener noreferrer" className={styles.purpleButton}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} /> {locale.contact_view_linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;