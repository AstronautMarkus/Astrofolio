import './Home.css';

const Home = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="content-box text-center">
      <div className="header-image mb-4">
        <img
          src="/src/assets/img/astronaut.png"
          alt="Astronaut"
          className="astronaut-image animate-float"
        />
      </div>
      <h1 className="title text-white">
        <span className="text-glow">Fix Your Little Problem</span> and <span className="text-glow-alt">Light This Candle!</span>
      </h1>
      <p className="intro text-light mt-3">
        Hello! I'm <span className="highlight">Marcos Reyes</span>, also known as{' '}
        <span className="highlight-alt">AstronautMarkus</span>. I'm a passionate full-stack developer who loves creating stellar web applications and innovative software solutions.
      </p>
      <div className="cta-buttons mt-4">
        <a href="#projects" className="btn btn-primary me-3">
          Explore Projects
        </a>
        <a href="#contact" className="btn btn-outline-light">
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

export default Home;
