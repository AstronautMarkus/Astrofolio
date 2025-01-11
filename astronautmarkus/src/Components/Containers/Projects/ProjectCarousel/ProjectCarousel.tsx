import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './ProjectCarousel.module.css';

type Project = {
  image: string;
  title: string;
  description: string;
  details?: string[];
  technologies?: string[];
  githubLink: string;
};

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  return (
    <div className={styles.projectCarousel}>
      <Carousel>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className={styles.projectItem}>
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.details && (
                  <ul className={styles.projectDetails}>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                {project.technologies && (
                  <div className={styles.techIcons}>
                    {project.technologies.map((tech, i) => (
                      <img
                        key={i}
                        src={tech}
                        alt="Technology Icon"
                        className={styles.skillIcon}
                      />
                    ))}
                  </div>
                )}

                <div className={styles.githubButtonContainer}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                  >
                    <FontAwesomeIcon icon={faGithub} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
