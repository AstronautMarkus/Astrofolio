import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';

type Project = {
  image: string;
  title: string;
  description: string;
  details?: string[]; 
  technologies?: string[];
  githubLink: string;
};


const getUniversityProjects = (locale: any): Project[] => [
  {
    image: '/assets/img/project_img/mofulunches_api.png',
    title: 'MofuLunches-API',
    description: locale.mofuLunchesApiDescription,
    details: [`${locale.semester}: 2`, `${locale.year}: 2024`],
    technologies: [
      '/assets/img/icons/flask.png',
      '/assets/img/icons/python.png',
      '/assets/img/icons/mongodb.svg',
      '/assets/img/icons/docker.png',
      '/assets/img/icons/dotenv.png',
      '/assets/img/icons/requests.png',
    ],
    githubLink: 'https://github.com/astronautmarkus/mofulunches-api',
  },
  {
    image: '/assets/img/project_img/mofulunches_web.jpg',
    title: 'MofuLunches-Web',
    description: locale.mofuLunchesWebDescription,
    details: [`${locale.semester}: 2`, `${locale.year}: 2024`],
    technologies: [
      '/assets/img/icons/flask.png',
      '/assets/img/icons/python.png',
      '/assets/img/icons/bootstrap.png',
      '/assets/img/icons/dotenv.png',
    ],
    githubLink: 'https://github.com/astronautmarkus/mofulunches-web',
  },
  {
    image: '/assets/img/project_img/mofulunches_totem.png',
    title: 'MofuLunches-Totem',
    description: locale.mofuLunchesTotemDescription,
    details: [`${locale.semester}: 2`, `${locale.year}: 2024`],
    technologies: [
      '/assets/img/icons/react.webp',
      '/assets/img/icons/vite.svg',
      '/assets/img/icons/electron.svg',
      '/assets/img/icons/arduino.svg',
      '/assets/img/icons/bootstrap.png',
      '/assets/img/icons/python.png',
    ],
    githubLink: 'https://github.com/astronautmarkus/mofulunches-totem',
  },
  {
    image: '/assets/img/project_img/mofustore.png',
    title: 'Mofu Store',
    description: locale.mofuStoreDescription,
    details: [`${locale.semester}: 1`, `${locale.year}: 2023`],
    technologies: [
      '/assets/img/icons/django.png',
      '/assets/img/icons/python.png',
      '/assets/img/icons/bootstrap.png',
      '/assets/img/icons/mysql.png',
    ],
    githubLink: 'https://github.com/astronautmarkus/mofu-store',
  },
  {
    image: '/assets/img/project_img/construmic.jpg',
    title: 'Constru_MIC',
    description: locale.construMicDescription,
    details: [`${locale.semester}: 1`, `${locale.year}: 2024`],
    technologies: [
      '/assets/img/icons/django.png',
      '/assets/img/icons/python.png',
      '/assets/img/icons/mysql.png',
      '/assets/img/icons/bootstrap.png',
      '/assets/img/icons/sqlite.png',
      '/assets/img/icons/dotenv.png',
    ],
    githubLink: 'https://github.com/astronautmarkus/mofulunches-api',
  },
];


const Projects = ({ locale, setSection }: { locale: any, setSection: (section: string) => void }) => (
  <div className="home-container d-flex justify-content-center align-items-center">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title text-center">📂 {locale.myProjects}</h1>
        <p className='text-center'>{locale.recentProjects}</p>

        <div className="content">
            <ul className="project-list">
              <li className="project-item d-flex flex-column flex-md-row">
                <ul className='project-list'>
                  <li>
                    <div className="text-center">
                      <p>{locale.welcomeVisitor}</p>
                      <div className="project-image">
                        <img src="/assets/img/code-crafted-digital-astronaut.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <p className='text-center'>{locale.welcomeSubtitle}</p>
                  </li>
                </ul>
              </li>
            </ul>
        </div>

        <div className="content">
          <ul className="project-list">
            <li className="project-item d-flex flex-column flex-md-row">
              <div className="project-details">
                <h2 className="project-title">{locale.featuredProject}: AbbyBot</h2>
                <p className="project-description text-center">
                  {locale.abbyBotDescription}
                </p>
                <ul className="project-sublist">
                  <li>
                    <strong>{locale.discordAbbyBot}:</strong> {locale.discordAbbyBotDescription}
                  </li>
                  <li>
                    <strong>{locale.abbyBotWebsite}:</strong> {locale.abbyBotWebsiteDescription}
                  </li>
                  <li>
                    <strong>{locale.abbyBotDashboard}:</strong> {locale.abbyBotDashboardDescription}
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
                  <a href="https://abbybotproject.com" target="_blank" rel="noopener noreferrer" className="btn btn-info m-2">
                    {locale.visitAbbyBotProject}
                  </a>
                </div>
              </div>
              <div className="project-image-rounded">
                <img src="/assets/img/abbybot_logo.png" alt="AbbyBot" />
                <p className='text-center mt-3'>Hello world!</p>
              </div>
            </li>

            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">📝 {locale.universityProjects}</h2>
                <p className="project-description">
                  {locale.universityProjectsDescription}
                </p>
              </div>
            </li>

            <ProjectCarousel projects={getUniversityProjects(locale)} />

            <li className="project-item card text-center text-light">
              <div className="card-body">
              <h2>{locale.moreProjects}</h2>
            <img src="https://github.com/astronautmarkus.png" alt="GitHub Profile" className="github-profile-picture mt-3 mb-3 rounded" width="200"  />
            <p>@astronautmarkus</p>
            <p>{locale.exploreMore}</p>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                <FontAwesomeIcon icon={faGithub} /> {locale.githubProfile}
              </a>
              <button onClick={() => setSection('home')} className="btn btn-secondary m-2">
                {locale.home}
              </button>
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
