import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHardHat, faLightbulb, faComments, faClock } from '@fortawesome/free-solid-svg-icons';

import './Resume.css';

const Resume = ({ locale }: { locale: any }) => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">🚀 {locale.aboutMeTitle}</h1>
        <p>🌌 {locale.aboutMeSubtitle}</p>
        <div className="content">
            <ul className="project-list">
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">💻 {locale.whatIDoTitle}</h2>
                <div className="project-sublist d-flex flex-column align-items-center">
                  <div className="project-text mb-4 mt-4">
                    <p>{locale.whatIDoDescription1}</p>
                    <p>{locale.whatIDoDescription2}</p>
                  </div>
                  <div className="project-image text-center">
                    <img src="/assets/img/profile_picture.webp" alt="Marcos Reyes" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
                    <p className="text-center mt-3">{locale.profilePictureCaption}</p>
                  </div>
                </div>
              </div>
            </li>


            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">🌠 {locale.travelToProgrammingTitle}</h2>
                <div className="project-text mb-4 mt-4">
                    <p>{locale.travelToProgrammingDescription1}</p>
                    <p>{locale.travelToProgrammingDescription2}</p>
                  </div>
              </div>
            </li>

            
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">🎨 {locale.hobbiesTitle}</h2>
                <p>🎉 {locale.hobbiesSubtitle}</p>
              </div>
            </li>

          </ul>

            <div className="rounded overflow-hidden">
            <Carousel className="w-100">
              <Carousel.Item>
              <img
                className="w-100 carousel-image"
                src="/assets/img/hobbies/image_edition.jpg"
                alt="Image Edition"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.imageEditionTitle}</h3>
                <p className="carousel-caption-text">{locale.imageEditionDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/video_edition.avif"
                alt="Video Edition"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.videoEditionTitle}</h3>
                <p className="carousel-caption-text">{locale.videoEditionDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/coding.gif"
                alt="Programming"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.programmingTitle}</h3>
                <p className="carousel-caption-text">{locale.programmingDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/hardware.gif"
                alt="Hardware"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.hardwareTitle}</h3>
                <p className="carousel-caption-text">{locale.hardwareDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/extra.gif"
                alt="Extra"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.extraTitle}</h3>
                <p className="carousel-caption-text">{locale.extraDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>    

        <ul className="project-list mt-5">

          <li className="project-item">
            <div className="project-details">
              <h2 className="project-title text-center mb-4">{locale.skillsTitle}</h2>
              <div className="skills-section">
                <h3>{locale.softSkillsTitle}</h3>
                <div className="soft-skills">
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faBriefcase} size="2x" className="fa-icon" />
                    <p><strong>{locale.professionalismTitle}</strong></p>
                    <p>{locale.professionalismDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faHardHat} size="2x" className="fa-icon" />
                    <p><strong>{locale.hardworkingTitle}</strong></p>
                    <p>{locale.hardworkingDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faLightbulb} size="2x" className="fa-icon" />
                    <p><strong>{locale.solutionOrientedTitle}</strong></p>
                    <p>{locale.solutionOrientedDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faComments} size="2x" className="fa-icon" />
                    <p><strong>{locale.thoughtfulCommunicatorTitle}</strong></p>
                    <p>{locale.thoughtfulCommunicatorDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faClock} size="2x" className="fa-icon" />
                    <p><strong>{locale.timeManagementTitle}</strong></p>
                    <p>{locale.timeManagementDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        
        <ul className="project-list mt-5">
          <li className="project-item">
            <div className="project-details">
              <div className="skills-section">
                <h3 className="text-center mb-4">Hard Skills</h3>
                <div className="row">
                  {/* Frontend Development */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>Frontend Development</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/html.png" alt="HTML Icon" className="skill-icon" />
                      <img src="/assets/img/icons/css.png" alt="CSS Icon" className="skill-icon" />
                      <img src="/assets/img/icons/javascript.png" alt="JavaScript Icon" className="skill-icon" />
                      <img src="/assets/img/icons/typescript.png" alt="TypeScript Icon" className="skill-icon" />
                      <img src="/assets/img/icons/react.webp" alt="React Icon" className="skill-icon" />
                      <img src="/assets/img/icons/angular.png" alt="Angular Icon" className="skill-icon" />
                      <img src="/assets/img/icons/vite.svg" alt="Vite Icon" className="skill-icon" />
                      <img src="/assets/img/icons/electron.svg" alt="Electronjs Icon" className="skill-icon" />
                      <img src="/assets/img/icons/ionic.webp" alt="Ionic Icon" className="skill-icon" />
                      <img src="/assets/img/icons/bootstrap.png" alt="Bootstrap Icon" className="skill-icon" />
                      <img src="/assets/img/icons/bulma.png" alt="Bulma Icon" className="skill-icon" />
                    </div>
                  </div>
                  {/* Backend Development */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>Backend Development</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/python.png" alt="Python Icon" className="skill-icon" />
                      <img src="/assets/img/icons/django.png" alt="Django Icon" className="skill-icon" />
                      <img src="/assets/img/icons/nodejs.png" alt="Node.js Icon" className="skill-icon" />
                      <img src="/assets/img/icons/flask.png" alt="Flask Icon" className="skill-icon" />
                      <img src="/assets/img/icons/java.png" alt="Java Icon" className="skill-icon" />
                      <img src="/assets/img/icons/php.png" alt="PHP Icon" className="skill-icon" />
                    </div>
                  </div>
                  {/* DevOps */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>DevOps</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/docker.png" alt="Docker Icon" className="skill-icon" />
                      <img src="/assets/img/icons/github-actions.png" alt="GitHub Actions Icon" className="skill-icon" />
                      <img src="/assets/img/icons/firebase.png" alt="Firebase Icon" className="skill-icon" />
                    </div>
                  </div>
                  {/* Databases */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>Databases</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/mysql.png" alt="MySQL Icon" className="skill-icon" />
                      <img src="/assets/img/icons/mariadb.png" alt="MariaDB Icon" className="skill-icon" />
                      <img src="/assets/img/icons/mongodb.svg" alt="MongoDB Icon" className="skill-icon" />
                      <img src="/assets/img/icons/sqlite.png" alt="SQLite Icon" className="skill-icon" />
                      <img src="/assets/img/icons/oracle-sql.png" alt="Oracle Icon" className="skill-icon" />
                    </div>
                  </div>
                  {/* Tools & Frameworks */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>Tools & Frameworks</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/git.png" alt="Git Icon" className="skill-icon" />
                      <img src="/assets/img/icons/github.png" alt="GitHub Icon" className="skill-icon" />
                      <img src="/assets/img/icons/vscode.png" alt="Visual Studio Code Icon" className="skill-icon" />
                    </div>
                  </div>
                  {/* Embedded Systems & IoT */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>Embedded Systems & IoT</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <img src="/assets/img/icons/arduino.svg" alt="Arduino Icon" className="skill-icon" />
                      <img src="/assets/img/icons/linux.png" alt="Linux Icon" className="skill-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
      </ul>

        <div className="final-section d-flex flex-column align-items-center mt-5">
          <div className="final-message text-center">
            <h4>🚀 {locale.finalMessageTitle}</h4>
            <p>- {locale.finalMessageAuthor}</p>
          </div>
          <div className="final-gif mt-3">
            <img src="/assets/img/fumo-fumo-fumo.gif" alt="Fumo Fumo Fumo" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Resume;
