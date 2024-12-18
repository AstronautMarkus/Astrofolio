import './Home.css';

const Home = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">📂 My Projects</h1>
        <div className="content">
          <p>
            Here are some of the projects I've been working on:
          </p>
          <ul className="project-list">
            <li className="project-item">
              <h2 className="project-title">Project 1</h2>
              <p className="project-description">Description of project 1.</p>
            </li>
            <li className="project-item">
              <h2 className="project-title">Project 2</h2>
              <p className="project-description">Description of project 2.</p>
            </li>
            <li className="project-item">
              <h2 className="project-title">Project 3</h2>
              <p className="project-description">Description of project 3.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
