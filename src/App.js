
import './App.css';
import bgImage from './voiturekevin.jpg';
import './App.css'
import mokup from './mockuphondaphoto.jpg'
import logo from './logo10.svg';
import video1 from './presacri.mp4';
import video2 from './Final.mp4'
import hdr  from './hdr4.svg'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
      <>

        <div className='container_1'  style={{height: '100vh', width: '100%',backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: '25% 75%', display: 'flex', justifyContent: 'center'}}>

        </div>
          <div className='grid' style={{
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.85)',
              boxSizing: 'border-box',
              padding: '1rem 1rem 1rem 2rem',
              display: "flex",
              gap: "1rem",
              flexDirection: 'row',
              flexWrap: 'wrap',

          }}>
              <div className='responbox rb1' style={{
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',
                  display: 'flex',
                  justifyContent: 'center',


              }}>

                  <video style={{
                      borderRadius: '1rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                  }} src={video1} autoPlay loop muted/>


              </div>
              <div className='responbox rb2' style={{
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)', boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',


              }}>
                  <div style={{
                      backgroundColor: '#b9b8b7',
                      width: '100%',
height: '100%',
                      borderRadius: '1rem',
                      boxSizing: 'border-box',
                      padding: '4rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}>
                      <p style={{color: '#474747', fontSize: '1.4rem'}}>La photographie capturée présente une Honda
                          Civic Type R FL5 rougeoyante, mise en évidence grâce son allure solitaire au sein d' une piste
                          d'aéroport, nichée dans la montagne.</p>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}> Le format panoramique de l'image accentue
                          l'impression de vaste horizon, permettant ainsi à la voiture de se démarquer davantage. La
                          brillance de sa teinte rouge contraste habilement avec le paysage environnant, créant ainsi
                          une focalisation visuelle immanquable.</p>
                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Le choix d' un tirage grand format permet de
                          mettre en valeur tous les détails de l'image et d'apprécier pleinement les nuances de
                          couleurs. Grâce à cette technique, j' ai pu reproduire fidèlement les textures et les
                          contrastes présents dans la photo, offrant ainsi une expérience visuelle immersive.</p>
                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Le grand format crée également une présence
                          physique de l’ image dans le lieu où elle est exposée, attirant l'attention du spectateur et
                          favorisant ainsi son impact visuel.</p>

                  </div>

              </div>

              <div className='responbox rb3' style={{

                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',

              }}>
                  <div style={{
                      backgroundColor: '#b9b8b7',
                      width: '100%',
                      height: '100%',

                      padding: '2rem 4rem',
                      borderRadius: '1rem',
                      boxSizing: 'border-box',
                      display: "flex",
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                  }}>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}>La technique du High Dynamic Range (HDR) a été
                          utilisée pour capturer une gamme étendue de
                          luminosité et
                          produire une image avec des détails riches et équilibrés.</p>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Du fait de la fusion de plusieurs expositions,
                          allant des zones les plus sombres aux zones les
                          plus
                          lumineuses, chaque détail de la scène est préservé, des ombres les plus profondes aux hautes
                          lumières
                          éclatantes.</p>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Le tirage de la photo est réalisé sous un verre
                          acrylique, ce qui lui confère un effet de
                          profondeur
                          saisissant. À l’ aide de cette technique l’image prend vie, ce qui lui donne une impression
                          tridimensionnelle, captivant ainsi le regard du spectateur. Le verre acrylique offre également
                          une
                          brillance et une clarté exceptionnelles, ce qui harmonise l’esthétique de la photographie.</p>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Toutes les photographies seront numérotées et
                          signées à la main et accompagnées d’ un
                          certificat
                          d’authenticité ainsi qu’un dossier descriptif de la photographie seront fournis avec le
                          tableau.</p>

                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Photographie 120x67cm, impression sur papier
                          photo contrecollée entre une plaque de dibond et
                          un verre
                          acrylique de 3mm.</p>
                      <img src={hdr} style={{width: '25%', marginBottom: '2rem', marginTop: '2rem'}}/>
                  </div>
              </div>
              <div className='responbox rb4' style={{

                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '1rem'
              }}>
                  <video style={{
                      borderRadius: '1rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'left'

                  }} src={video2} autoPlay loop muted/>
                  <div style={{backgroundColor: '#b9b8b7', width: '100%', borderRadius: '1rem', padding: '0 1rem', boxSizing: 'border-box'}}>

                      <div style={{display: 'flex', flexWrap: 'wrap'}}>

                          <ul style={{display: "flex", flexDirection: 'column', alignItems: 'center', width: '45%',gap: '1rem'}}>
                              <li style={{color: '#474747', fontSize: '1.4rem', textAlign: 'start', width: '100%'}}>Canon 1D-C</li>
                              <li style={{color: '#474747', fontSize: '1.4rem', textAlign: 'start', width: '100%'}}>24-70mm F/8</li>
                              <li style={{color: '#474747', fontSize: '1.4rem', textAlign: 'start', width: '100%'}}>1/1600s</li>
                          </ul>
                          <ul style={{display: "flex", flexDirection: 'column', alignItems: 'center', width: '45%', gap: '1rem'}}>
                              <li style={{color: '#474747', fontSize: '1.4rem', textAlign: 'start', width: '100%'}}>500 ISO</li>

                              <li style={{color: '#474747', fontSize: '1.4rem', textAlign: 'start', width: '100%'}}>Photoshop /
                                  Lightroom</li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
          <div style={{
              height: '100vh',
              width: '100%',
              backgroundColor: '#a8a8a8',
              backgroundImage: `url(${mokup})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
          }}>


          </div>

          <div style={{
              height: '100vh',
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              justifyContent: 'center', alignItems: 'center'
          }}>
              <div style={{
                  backgroundColor: 'rgba(255,255,255,0.2)s',
                  height: '30rem',
                  width: '30rem',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)'
              }}><img className='imghover' src={logo} style={{borderRadius: '50%' ,width: '100%', color: 'rgba(255,255,255,0.03)', marginBottom: '4rem'}}/>
                  <p  style={{
                      textAlign: 'center',
                      color: '#474747',
                      fontSize: '1.5rem', margin: '0'
                  }}>kevin.rastoder@gmail.com</p>

                  <p style={{textAlign: 'center', color: '#474747', fontSize: '1.5rem', margin: '0'}}>(+33) 7 87 18 91
                      52 </p>
                  <p style={{textAlign: 'center', color: '#474747', fontSize: '1.5rem', margin: '0'}}>KEVIN
                      RASTODER </p>
              </div>
          </div>

      </>
  );
}

export default App;
