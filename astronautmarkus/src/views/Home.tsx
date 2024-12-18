import './Home.css';

const Home = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="content-box shadow">
      <h1 className="title">🚀 Welcome to ReyesAndFriends.cl!</h1>
      <div className="content">
        <p>
          Greetings, visitor! My name is <span className="highlight">Marcos Reyes</span>, also known as{' '}
          <span className="highlight-alt">AstronautMarkus</span>. I am a passionate programmer, constantly exploring
          new technologies and creative projects.
        </p>
        <p>
          If you're curious about what I do, feel free to check out my work or learn more about me below:
        </p>
        <div className="buttons">
          <button className="btn btn-primary me-2">
            🧑‍🚀 Learn More About Me
          </button>
          <button className="btn btn-secondary">
            📂 See My Projects
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
