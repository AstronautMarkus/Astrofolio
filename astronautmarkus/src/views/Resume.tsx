import Carousel from 'react-bootstrap/Carousel';

import './Resume.css';

const Resume = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">🚀 About Me: Marcos Reyes</h1>
        <p>🌌 The story of the 'astronautmarkus'</p>
        <div className="content">
            <ul className="project-list">
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">💻 What I do</h2>
                <div className="project-sublist d-flex flex-column align-items-center">
                  <div className="project-text mb-4 mt-4">
                    <p>
                      I specialize in full-stack development derived more from the use of back-end technologies such as Flask, Node.js and Python, I also use front-end technologies such as Bootstrap, Bulma, and some others.
                    </p>
                    <p>
                      In addition to programming, I enjoy working on hardware projects, such as assembling servers or computer components, and from time to time I do some systems administration. I consider that each small step has helped me gain more experiences in other sectors, combining everything and achieving much better solutions, like this page!
                    </p>
                  </div>
                  <div className="project-image text-center">
                    <img src="/src/assets/img/profile_picture.webp" alt="Marcos Reyes" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
                    <p className="text-center mt-3">That's me! ᗜ˰ᗜ</p>
                  </div>
                </div>
              </div>
            </li>


            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">🌠 My travel to Programming Universe</h2>
                <div className="project-text mb-4 mt-4">
                    <p>
                      I started programming at 19, my main aspirations were to develop a video game, which I still have in mind to do. I studied at <a href="https://www.duoc.cl/" className="text-glow" target="_blank" rel="noopener noreferrer">Duoc UC</a>, where I met great people, classmates and teachers, who helped shape who I am now. As these years went by, I learned different facets of programming, which helped me understand more how things in our daily lives work. 
                    </p>
                    <p>
                    In my social ties I was always the "computer guy", when we were students I used to be the one who created the "servers" for multiplayer video games together, I have always had that "natural talent" with computers, now that I am a developer fullstack I can make the most of my skills.
                    </p>
                  </div>
              </div>
            </li>

            
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">🎨 My Hobbies</h2>
                <p>🎉 Some things I usually do in my free time!</p>
              </div>
            </li>
          </ul>
            <div className="rounded overflow-hidden">
            <Carousel className="w-100">
              <Carousel.Item>
              <img
                className="w-100 carousel-image"
                src="/src/assets/img/hobbies/image_edition.jpg"
                alt="Image Edition"
              />
              <Carousel.Caption>
                <h3>Image Edition</h3>
                <p>I use image editing tools like Photoshop or Lightroom for personal purposes, such as video game screenshots, environment images, etc.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/src/assets/img/hobbies/video_edition.avif"
                alt="Video Edition"
              />
              <Carousel.Caption>
                <h3>Video Edition</h3>
                <p>Previously, I used to create stories in video games like GTA: San Andreas, narrated with dialogues and animations to create interesting machinimas for the viewer.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/src/assets/img/hobbies/coding.gif"
                alt="Programming"
              />
              <Carousel.Caption>
                <h3>Programming</h3>
                <p>Programming is not only my job, but also my hobby. I like to create small projects, like this page, to learn new things and improve my skills.</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/src/assets/img/hobbies/hardware.gif"
                alt="Hardware"
              />
              <Carousel.Caption>
                <h3>Hardware</h3>
                <p>I enjoy working with Linux, setting up servers, building computers, and experimenting with Arduino projects, among many other things!</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/src/assets/img/hobbies/extra.gif"
                alt="Extra"
              />
              <Carousel.Caption>
                <h3>And hmm...</h3>
                <p>There are many things I like and am passionate about, but I guess these are the most important ones!</p>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>        
      </div>
    </div>
  </div>
);

export default Resume;
