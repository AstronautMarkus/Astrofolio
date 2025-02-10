import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHardHat, faLightbulb, faComments, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Resume.css';

const Resume = ({ locale }: { locale: any }) => (
  <div className="home-container d-flex justify-content-center align-items-center">
    <div className="square-container">
      <div className="content-box">
        <h1 className="title text-center">🚀 {locale.aboutMeTitle}</h1>
        <p className='text-center'>🌌 {locale.aboutMeSubtitle}</p>
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
                    <img src="/assets/img/profile_picture.jpg" alt="Marcos Reyes" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
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

        <li className="project-item d-flex mt-4">
          <div className="project-details">
            <h2 className="project-title">📜 {locale.certificationsTitle}</h2>
            <div className="project-text mb-4 mt-4">
              <ul>
          <li>
            <FontAwesomeIcon icon={faBriefcase} className="fa-icon" /> <strong>-{locale.softwareArchitecture}</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faHardHat} className="fa-icon" /> <strong>-{locale.dataModeling}</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faLightbulb} className="fa-icon" /> <strong>-{locale.softwareProgramming}</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="fa-icon" /> <strong>-{locale.softwareQuality}</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} className="fa-icon" /> <strong>-{locale.requirementsAnalysis}</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="fa-icon" /> <strong>-{locale.intermediateEnglish}</strong>
          </li>
              </ul>
            </div>
          </div>
        </li>

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
                <h3 className="text-center mb-4">{locale.hardSkills}</h3>
                <div className="row">
                  {/* Frontend Development */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.frontEndDevelopment}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/html.png" alt="HTML Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/css.png" alt="CSS Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/javascript.png" alt="JavaScript Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/typescript.png" alt="TypeScript Icon" className="skill-icon" />
                      </a>
                      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/react.webp" alt="React Icon" className="skill-icon" />
                      </a>
                      <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/angular.png" alt="Angular Icon" className="skill-icon" />
                      </a>
                      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/vite.svg" alt="Vite Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/electron.svg" alt="Electronjs Icon" className="skill-icon" />
                      </a>
                      <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/ionic.webp" alt="Ionic Icon" className="skill-icon" />
                      </a>
                      <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/bootstrap.png" alt="Bootstrap Icon" className="skill-icon" />
                      </a>
                      <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/bulma.png" alt="Bulma Icon" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                  {/* Backend Development */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.backEndDevelopment}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/python.png" alt="Python Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/django.png" alt="Django Icon" className="skill-icon" />
                      </a>
                      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/nodejs.png" alt="Node.js Icon" className="skill-icon" />
                      </a>
                      <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/flask.png" alt="Flask Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/java.png" alt="Java Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/php.png" alt="PHP Icon" className="skill-icon" />
                      </a>
                      <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/laravel.png" alt="Laravel Icon" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                  {/* DevOps */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.devOps}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/docker.png" alt="Docker Icon" className="skill-icon" />
                      </a>
                      <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/github-actions.png" alt="GitHub Actions Icon" className="skill-icon" />
                      </a>
                      <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/firebase.png" alt="Firebase Icon" className="skill-icon" />
                      </a>
                      <a href="https://systemd.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/systemd.png" alt="Systemd" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                  {/* Databases */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.databases}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/mysql.png" alt="MySQL Icon" className="skill-icon" />
                      </a>
                      <a href="https://mariadb.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/mariadb.png" alt="MariaDB Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/mongodb.svg" alt="MongoDB Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/sqlite.png" alt="SQLite Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.oracle.com/database/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/oracle-sql.png" alt="Oracle Icon" className="skill-icon" />
                      </a>
                      <a href="https://cassandra.apache.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/cassandra.png" alt="Cassandra Icon" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                  {/* Tools & Frameworks */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.toolsAndFrameworks}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/git.png" alt="Git Icon" className="skill-icon" />
                      </a>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/github.png" alt="GitHub Icon" className="skill-icon" />
                      </a>
                      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/vscode.png" alt="Visual Studio Code Icon" className="skill-icon" />
                      </a>
                      <a href="https://visualstudio.microsoft.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/visual-studio.png" alt="Visual Studio Icon" className="skill-icon" />
                      </a>
                      <a href="https://trello.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/trello.png" alt="Trello Icon" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                  {/* Embedded Systems & IoT */}
                  <div className="col-lg-4 col-md-6 text-center mb-4">
                    <p><strong>{locale.embededSystemsAndIot}</strong></p>
                    <div className="d-flex justify-content-center flex-wrap">
                      <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/arduino.svg" alt="Arduino Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/linux.png" alt="Linux Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/debian.png" alt="Debian Icon" className="skill-icon" />
                      </a>
                      <a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/arch.png" alt="Arch Icon" className="skill-icon" />
                      </a>
                      <a href="https://manjaro.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/manjaro.png" alt="Manjaro Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/postman.webp" alt="Postman Icon" className="skill-icon" />
                      </a>
                      <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/icons/bash.png" alt="Bash Icon" className="skill-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="final-section d-flex flex-column align-items-center mt-5">
          <div className="final-message text-center">
            <h4>🚀 {locale.resumeEnd}</h4>
            <p>{locale.resumeLinkStart} <Link to={"/projects"} className='text-info'>{locale.resumeLinkButton}</Link> {locale.resumeLinkEnd}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Resume;