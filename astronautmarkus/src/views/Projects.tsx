import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">📂 My Projects</h1>
        <p>Take a look at my most recent projects!</p>
        <div className="content">
          <ul className="project-list">
            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">Featured project: AbbyBot</h2>
                <p className="project-description text-center">
                  Multi-functional Discord app with management and entertainment features.
                </p>
                <ul className="project-sublist">
                  <li>
                    <strong>Discord AbbyBot:</strong> Multi-purpose tool for Discord with moderation and entertainment.
                  </li>
                  <li>
                    <strong>AbbyBot Website:</strong> Informative site with bot details and updates.
                  </li>
                  <li>
                    <strong>AbbyBot Dashboard:</strong> Admin panel for managing guild configurations and statistics.
                  </li>
                </ul>
                <div className="text-center project-links">
                  <a href="https://github.com/AbbyBot/AbbyBot-API" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot API
                  </a>
                  <a href="https://github.com/AbbyBot/AbbyBot-Website" target="_blank" rel="noopener noreferrer" className="btn btn-secondary m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot Website
                  </a>
                  <a href="https://github.com/AbbyBot/AbbyBot-Dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-success m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot Dashboard
                  </a>
                  <a href="https://www.abbybotproject.com" target="_blank" rel="noopener noreferrer" className="btn btn-info m-2">
                    Visit AbbyBot Project
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src="/src/assets/img/abbybot_logo.png" alt="AbbyBot" />
                <p className='text-center mt-3'>Hello world!</p>
              </div>
            </li>

            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">📝 University Projects</h2>
                <p className="project-description">
                  Compilation of most of the projects carried out in my years as a computer science student.
                </p>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-API</h2>
                <img src="/src/assets/img/project_img/mofulunches_api.png" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">Modular backend following Service Oriented Architecture principles. Built with Flask to ensure scalability and interoperability.</p>
                <p className="card-text"><small className="text-light">Semester: 2 Year: 2024</small></p>
                <div className="d-flex justify-content-center">
                  <img src="/src/assets/img/icons/flask.png" alt="Flask" className="tech-icon" />
                  <img src="/src/assets/img/icons/python.png" alt="Python" className="tech-icon" />
                  <img src="/src/assets/img/icons/mongodb.svg" alt="Mongo" className="tech-icon" />
                  <img src="/src/assets/img/icons/docker.png" alt="Docker" className="tech-icon" />
                  <img src="/src/assets/img/icons/dotenv.png" alt="Dotenv" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-Web</h2>
                <img src="/src/assets/img/project_img/mofulunches_web.jpg" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">Dynamic front-end application with Flask, featuring an intuitive dashboard for administrators and cooks.</p>
                <p className="card-text"><small className="text-light">Semester: 2 Year: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <img src="/src/assets/img/icons/flask.png" alt="Flask" className="tech-icon" />
                  <img src="/src/assets/img/icons/python.png" alt="Python" className="tech-icon" />
                  <img src="/src/assets/img/icons/bootstrap.png" alt="Bootstrap" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-Totem</h2>
                <img src="/src/assets/img/project_img/mofulunches_totem.png" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">Digital totem system for order pickup using API, implemented with Arduino microcontrollers, built with Electron + Vite.</p>
                <p className="card-text"><small className="text-light">Semester: 2 Year: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <img src="/src/assets/img/icons/react.webp" alt="React" className="tech-icon" />
                  <img src="/src/assets/img/icons/vite.svg" alt="Vite" className="tech-icon" />
                  <img src="/src/assets/img/icons/electron.svg" alt="Electron" className="tech-icon" />
                  <img src="/src/assets/img/icons/arduino.svg" alt="Arduino" className="tech-icon" />
                  <img src="/src/assets/img/icons/bootstrap.png" alt="Bootstrap" className="tech-icon" />
                  <img src="/src/assets/img/icons/python.png" alt="Python" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/src/assets/img/project_img/mofustore.png" alt="Mofu Store" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">Mofu Store</h2>
                <p className="card-text">E-commerce site built with Django, themed around "fumofumo" stuffed animals from the Touhou Project saga.</p>
                <p className="card-text"><small className="text-light">Semester: 1 Year: 2023</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <img src="/src/assets/img/icons/django.png" alt="Django" className="tech-icon" />
                  <img src="/src/assets/img/icons/python.png" alt="Python" className="tech-icon" />
                  <img src="/src/assets/img/icons/bootstrap.png" alt="Bootstrap" className="tech-icon" />
                  <img src="/src/assets/img/icons/mysql.png" alt="Bootstrap" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/src/assets/img/project_img/construmic.jpg" alt="CONSTRU_MIC" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">CONSTRU_MIC</h2>
                <p className="card-text">Web system for household item sales, featuring user accounts, product listings, and an admin module.</p>
                <p className="card-text"><small className="text-light">Semester: 1 Year: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <img src="/src/assets/img/icons/django.png" alt="Django" className="tech-icon" />
                  <img src="/src/assets/img/icons/python.png" alt="Python" className="tech-icon" />
                  <img src="/src/assets/img/icons/bootstrap.png" alt="Bootstrap" className="tech-icon" />
                  <img src="/src/assets/img/icons/mysql.png" alt="Bootstrap" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/src/assets/img/project_img/camellosfood.png" alt="CamellosFood-Repartidor" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">CamellosFood-Repartidor</h2>
                <p className="card-text">Mobile application system for food delivery, focusing on a delivery driver module.</p>
                <p className="card-text"><small className="text-light">Semester: 2 Year: 2023</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <img src="/src/assets/img/icons/ionic.webp" alt="Ionic" className="tech-icon" />
                  <img src="/src/assets/img/icons/angular.png" alt="Angular" className="tech-icon" />
                  <img src="/src/assets/img/icons/nodejs.png" alt="Node.js" className="tech-icon" />
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
              <h2>Check Out More Projects on My GitHub</h2>
            <img src="https://github.com/astronautmarkus.png" alt="GitHub Profile" className="github-profile-picture mt-3 mb-3" style={{ width: '100px', borderRadius: '50%' }} />
            <p>@astronautmarkus</p>
            <p>You can explore more of my open-source projects and contributions by visiting my GitHub profile.</p>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                <FontAwesomeIcon icon={faGithub} /> GitHub Profile
              </a>
              <a href="/" className="btn btn-secondary m-2">
                Home
              </a>
            </div>
              </div>
            </li>
          </ul>
        </div>        
      </div>
    </div>
  </div>
);

export default Projects;
