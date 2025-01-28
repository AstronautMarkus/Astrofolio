import styles from './GeekZone.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const GeekZone = ({ setSection, locale }: { setSection: (section: string) => void, locale: any }) => {
  const animeRecommendations = [
    {
      title: "Initial D (1th stage - final stage)",
      description: locale.initialDDescription,
      image: "/assets/img/recommendations/anime/initiald.jpg",
      whyILikeIt: locale.initialDWhyILikeIt,
      pros: locale.initialDPros,
      cons: locale.initialDCons,
      link: "https://myanimelist.net/anime/185/Initial_D_First_Stage"
    },
    {
      title: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
      description: locale.seishunButaYarouDescription,
      image: "/assets/img/recommendations/anime/93586l.jpg",
      whyILikeIt: locale.seishunButaYarouWhyILikeIt,
      pros: locale.seishunButaYarouPros,
      cons: locale.seishunButaYarouCons,
      link: "https://myanimelist.net/anime/37450/Seishun_Buta_Yarou_wa_Bunny_Girl_Senpai_no_Yume_wo_Minai"
    },
    {
      title: "Sousou no Frieren",
      description: locale.sousouNoFrierenDescription,
      image: "/assets/img/recommendations/anime/138006l.jpg",
      whyILikeIt: locale.sousouNoFrierenWhyILikeIt,
      pros: locale.sousouNoFrierenPros,
      cons: locale.sousouNoFrierenCons,
      link: "https://myanimelist.net/anime/52991/Sousou_no_Frieren"
    },
    {
      title: "Witch Craft Works",
      description: locale.witchCraftWorksDescription,
      image: "/assets/img/recommendations/anime/112982l.jpg",
      whyILikeIt: locale.witchCraftWorksWhyILikeIt,
      pros: locale.witchCraftWorksPros,
      cons: locale.witchCraftWorksCons,
      link: "https://myanimelist.net/anime/21085/Witch_Craft_Works"
    },
    {
      title: "BOCCHI THE ROCK!",
      description: locale.bocchiTheRockDescription,
      image: "/assets/img/recommendations/anime/127956l.jpg",
      whyILikeIt: locale.bocchiTheRockWhyILikeIt,
      pros: locale.bocchiTheRockPros,
      cons: locale.bocchiTheRockCons,
      link: "https://myanimelist.net/anime/47917/Bocchi_the_Rock"
    },
    {
      title: "The Melancholy of Haruhi Suzumiya",
      description: locale.haruhiSuzumiyaDescription,
      image: "/assets/img/recommendations/anime/137929l.jpg",
      whyILikeIt: locale.haruhiSuzumiyaWhyILikeIt,
      pros: locale.haruhiSuzumiyaPros,
      cons: locale.haruhiSuzumiyaCons,
      link: "https://myanimelist.net/anime/849/Suzumiya_Haruhi_no_Yuuutsu"
    },
    {
      title: "Assasination Classroom",
      description: locale.assasinationClassroomDescription,
      image: "/assets/img/recommendations/anime/75639l.jpg",
      whyILikeIt: locale.assasinationClassroomWhyILikeIt,
      pros: locale.assasinationClassroomPros,
      cons: locale.assasinationClassroomCons,
      link: "https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu"
    },
    {
      title: "Little Witch Academia",
      description: locale.littleWitchAcademiaDescription,
      image: "/assets/img/recommendations/anime/120456l.jpg",
      whyILikeIt: locale.littleWitchAcademiaWhyILikeIt,
      pros: locale.littleWitchAcademiaPros,
      cons: locale.littleWitchAcademiaCons,
      link: "https://myanimelist.net/anime/33489/Little_Witch_Academia_TV"
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
                        <img src={anime.image} className={`${styles.anime_image} rounded`} alt={anime.title} />
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