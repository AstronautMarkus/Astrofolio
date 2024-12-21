import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ locale }: { locale: any }) => (
  <div className="contact-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box text-center">
        <h1 className="title text-white mt-5">
          📞 {locale.contact}
        </h1>
        <div className="row">
          <div className="col-md-6">
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> marcosreyesmartinez2003@gmail.com
            </p>
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faPhone} /> <strong>{locale.phone}:</strong> +56 95036 9308
            </p>
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faGithub} /> <strong>GitHub:</strong> <a href="https://github.com/astronautmarkus" className="text-glow">github.com/astronautmarkus</a>
            </p>
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faLinkedin} /> <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/markusreyes" className="text-glow">linkedin.com/in/markusreyes</a>
            </p>
          </div>
          <div className="col-md-6">
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faInstagram} /> <strong>Instagram:</strong> <a href="https://instagram.com/sky._marc" className="text-glow">@sky._marc</a>
            </p>
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faDiscord} /> <strong>Discord:</strong> <a href="https://discord.com" className="text-glow">AstronautMarkus</a>
            </p>
            <p className="contact-info text-light">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>{locale.location}:</strong> Santiago de Chile
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
