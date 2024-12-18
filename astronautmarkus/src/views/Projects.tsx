import './Projects.css';

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
              <h2 className="project-title">AbbyBot</h2>
                <p className="project-description text-center">
                A multi-functional app designed to be your faithful companion on your Discord server, offering a wide variety of management and entertainment features to improve your experience on your server.
                </p>
              <ul className="project-sublist">
                <li>
                <strong>Discord AbbyBot:</strong> Multi-purpose tool for Discord with moderation, entertainment, and utility commands.
                </li>
                <li>
                <strong>AbbyBot Website:</strong> Informative site with bot details and updates.
                </li>
                <li>
                <strong>AbbyBot Dashboard:</strong> Admin panel for managing guild configurations and statistics.
                </li>
              </ul>
                <div className="text-center project-links">
                <a href="https://github.com/username/AbbyBot-API" target="_blank" rel="noopener noreferrer" className="card-link text-glow">AbbyBot API Repo</a>
                <a href="https://github.com/username/AbbyBot-Website" target="_blank" rel="noopener noreferrer" className="card-link text-glow">AbbyBot Website Repo</a>
                <a href="https://github.com/username/AbbyBot-Dashboard" target="_blank" rel="noopener noreferrer" className="card-link text-glow">AbbyBot Dashboard Repo</a>
                </div>
              </div>
              <div className="project-image">
              <img src="/src/assets/img/abbybot_logo.png" alt="AbbyBot" />
              </div>
            </li>
            <li className="project-item">
              <h2 className="project-title">MofuLunches-API</h2>
              <p className="project-description">
                Modular backend following Service Oriented Architecture principles. Built with Flask to ensure scalability and interoperability.
              </p>
            </li>
            <li className="project-item">
              <h2 className="project-title">MofuLunches-Web</h2>
              <p className="project-description">
                Dynamic front-end application with Flask, featuring an intuitive dashboard for administrators and cooks.
              </p>
            </li>
            <li className="project-item">
              <h2 className="project-title">MofuLunches-Totem</h2>
              <p className="project-description">
                Digital totem system designed for seamless integration within the ordering ecosystem, utilizing Vite, Electron, and React.
              </p>
            </li>
            <li className="project-item">
              <h2 className="project-title">Mofu Store</h2>
              <p className="project-description">
                E-commerce site built with Django, themed around "fumofumo" stuffed animals from the Touhou Project saga.
              </p>
            </li>
            <li className="project-item">
              <h2 className="project-title">CONSTRU_MIC</h2>
              <p className="project-description">
                Web system for household item sales, featuring user accounts, product listings, and an admin module.
              </p>
            </li>
            <li className="project-item">
              <h2 className="project-title">CamellosFood-Repartidor</h2>
              <p className="project-description">
                Mobile application system for food delivery, focusing on a delivery driver module.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
