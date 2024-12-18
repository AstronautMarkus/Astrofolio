import './Home.css';

const Home = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box text-center">
        <div className="header-image mb-4 animate-fade-in">
          <img
            src="/src/assets/img/astronaut.png"
            alt="Astronaut"
            className="astronaut-image"
          />
        </div>
        <h1 className="title text-white mb-3">
          Welcome to <span className="text-glow-title">My Universe!</span>
        </h1>
        <p className="intro text-light">
          I’m <span className="highlight">Marcos Reyes</span>, a passionate full-stack developer crafting stellar applications and
          innovative software solutions with creativity and precision.
        </p>
        <div className="cta-buttons mt-4">
          <a href="#projects" className="btn btn-primary me-3 btn-lg">
            Discover My Projects
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
