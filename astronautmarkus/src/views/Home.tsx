import './Home.css';

const Home = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="content-box text-center">
      <div className="header-image mb-4">
        <img
          src="/src/assets/img/astronaut.png"
          alt="Astronaut"
          className="astronaut-image"
        />
      </div>
      <h1 className="title text-white">Fix Your Little Problem and Light This Candle!</h1>
      <p className="intro text-light mt-3">
        Hello! I'm <span className="highlight">Marcos Reyes</span>, also known as{' '}
        <span className="highlight-alt">AstronautMarkus</span>. As a passionate developer and space enthusiast,
        I'm on a mission to create innovative projects while exploring the vast universe of technology.
      </p>
    </div>
  </div>
);

export default Home;
