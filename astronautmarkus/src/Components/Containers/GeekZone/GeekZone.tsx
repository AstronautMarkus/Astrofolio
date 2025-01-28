import styles from './GeekZone.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const GeekZone = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => {
  const animeRecommendations = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      whyILikeIt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pros: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cons: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com"
    },
    {
      title: "Dolor Sit Amet",
      description: "Dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      whyILikeIt: "Dolor sit amet, consectetur adipiscing elit.",
      pros: "Dolor sit amet, consectetur adipiscing elit.",
      cons: "Dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com"
    }
  ];

  return (
    <div className={`${styles.verticalCenter}`}>
      <div className="template-container d-flex justify-content-center align-items-center">
        <div className="square-container">
          <div className="content-box text-center">
            <h1 className='title text-center'>🤓 AstronautMarkus Geek Zone</h1>
            <p className='text-center'>{locale.geekZoneDescription}</p>
            

            <div className="content">
              <ul className="project-list">
                <li className="project-item d-flex flex-column flex-md-row">
                  <ul className='project-list'>
                    <li>
                      <div className="text-center">

                        <p>
                          {locale.geekZoneInfo}
                        </p>
                        
                        <div className="project-image">
                          <img src="/assets/img/geekzone/hi-aya-shameimaru.gif" className='rounded' alt="hi-aya-shameimaru" />
                        </div>

                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="content playlist-carousel mt-5 mb-5">
              <h5 className='text-center'>{locale.geekZoneMusic}</h5>
              <div id="playlistCarousel" className="mt-5 carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <iframe style={{ borderRadius: '12px', width: '70%' }} src="https://open.spotify.com/embed/playlist/03OXOTX3VQyHLpQMb0lVwW?utm_source=generator" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="carousel-item">
                <iframe style={{ borderRadius: '12px', width: '70%' }} src="https://open.spotify.com/embed/playlist/2XAXSFbOpDxa0FEFxoalLL?utm_source=generator" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="carousel-item">
                <iframe style={{ borderRadius: '12px', width: '70%' }} src="https://open.spotify.com/embed/playlist/7JNAaUot7j1z9gYcRDW98D?utm_source=generator" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#playlistCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#playlistCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              </div>
            </div>

            <h1 className="title text-center mt-2">🤖 {locale.geekZoneMarkusRecommendationsTitle}</h1>
            <p className='text-center'>Hell yeah!</p>

            <div className="content">
              <ul className="project-list">
                <li className="project-item d-flex flex-column flex-md-row">
                  <ul className='project-list'>
                    <li>
                      <div className="text-center">
                        <p>{locale.geekZoneMarkusRecommendationsDescription}</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <h1 className="title text-center mt-2">🎥 {locale.geekZoneMarkusRecommendationsAnime}</h1>
            <p className='subtitle mb-5'>{locale.geekZoneMarkusRecommendationsAnimeDescription} </p>

            <div id="animeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {animeRecommendations.map((anime, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="text-center">
                      <h3>{anime.title}</h3>
                      <p>{anime.description}</p>
                      <div>
                        <img src={anime.image} className={styles.anime_image} alt={anime.title} />
                      </div>
                      <p><strong>Why I like it</strong>: {anime.whyILikeIt}</p>
                      <p><strong>Pros</strong>: {anime.pros}</p>
                      <p><strong>Cons</strong>: {anime.cons}</p>
                      <a href={anime.link} target="_blank" rel="noopener noreferrer">More about {anime.title}</a>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#animeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#animeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="cta-buttons mt-4">
              <button onClick={() => setSection('home')}className={`${styles.purpleButton} me-3 btn-lg mb-3`}>
                <FontAwesomeIcon icon={faHome} className="me-2" />
                {locale.home}
              </button>
            </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default GeekZone;