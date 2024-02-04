
import './App.css';
import bgImage from './voiturekevin.jpg';
import './App.css'
import mokup from './mockuphondaphoto.jpg'
import logo from './logokevin.svg';
import video1 from './presacri.mp4';
import video2 from './Final.mp4'
function App() {
  return (
      <>
        <div  style={{height: '100vh', width: '100%',backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: '25% 75%', display: 'flex', justifyContent: 'center'}}>

        </div>
          <div className='grid' style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.85)', padding: '1rem', boxSizing: 'border-box',}}>
              <div style={{
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',
                  display: 'flex',
                  justifyContent: 'center'
              }}>

                  <video style={{borderRadius: '1rem', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', width: '100%', height: '100%', objectFit: 'cover'}}  src={video1} autoPlay loop muted/>


              </div>
              <div style={{
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
                      padding: '2rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  }}>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>La photographie capturée présente une Honda Civic Type R FL5 rougeoyante, mise en évidence grâce son allure solitaire au sein d' une piste d'aéroport, nichée dans la montagne.</p>

                         <p style={{color: '#474747',fontSize: '1.4rem'}}> Le format panoramique de l'image accentue l'impression de vaste horizon, permettant ainsi à la voiture de se démarquer davantage. La brillance de sa teinte rouge contraste habilement avec le paysage environnant, créant ainsi une focalisation visuelle immanquable.</p>
                      <p style={{color: '#474747', fontSize: '1.4rem'}}>Le choix d'  un tirage grand format permet de mettre en valeur tous les détails de l'image et d'apprécier pleinement les nuances de couleurs. Grâce à cette technique, j' ai pu reproduire fidèlement les textures et les contrastes présents dans la photo, offrant ainsi une expérience visuelle immersive.</p>
                          <p style={{color: '#474747', fontSize: '1.4rem'}}>Le grand format crée également une présence physique de l’ image dans le lieu où elle est exposée, attirant l'attention du spectateur et favorisant ainsi son impact visuel.</p>

                  </div>

              </div>
              <div style={{
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px',

              }}>
                  <div style={{
                      backgroundColor: '#b9b8b7',
                      width: '100%',
                      height: '100%',
                      borderRadius: '1rem',
                      boxSizing: 'border-box',
                      padding: '1rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                  }}>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>La technique du High Dynamic Range (HDR) a été utilisée pour capturer une gamme étendue de
                          luminosité et
                          produire une image avec des détails riches et équilibrés.</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Du fait de la fusion de plusieurs expositions, allant des zones les plus sombres aux zones les
                          plus
                          lumineuses, chaque détail de la scène est préservé, des ombres les plus profondes aux hautes
                          lumières
                          éclatantes.</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Le tirage de la photo est réalisé sous un verre acrylique, ce qui lui confère un effet de
                          profondeur
                          saisissant. À l’ aide de cette technique l’image prend vie, ce qui lui donne une impression
                          tridimensionnelle, captivant ainsi le regard du spectateur. Le verre acrylique offre également
                          une
                          brillance et une clarté exceptionnelles, ce qui harmonise l’esthétique de la photographie.</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Toutes les photographies seront numérotées et signées à la main et accompagnées d’ un
                          certificat
                          d’authenticité ainsi qu’un dossier descriptif de la photographie seront fournis avec le
                          tableau.</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Photographie 120x67cm, impression sur papier photo contrecollée entre une plaque de dibond et
                          un verre
                          acrylique de 3mm.</p>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Outils Utilisés :</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Canon 1D-C</p>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>24-70mm F/8</p>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>1/1600s</p>
                      <p style={{color: '#474747',fontSize: '1.4rem'}}>500 ISO</p>

                      <p style={{color: '#474747',fontSize: '1.4rem'}}>Photoshop / Lightroom</p>
                  </div>
              </div>
              <div style={{
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px'
              }}>
                  <video style={{
                      borderRadius: '1rem',
                      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                  }} src={video2} autoPlay loop muted/>
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)'
              }}><img src={logo} style={{width: '100%', color: 'rgba(255,255,255,0.03)'}}/></div>
          </div>
<p style={{textAlign: 'center'}}>KEVIN RASTODER -
    (+33) 7 87 18 91 52 -
    kevin.rastoder@gmail.com</p>
      </>
  );
}

export default App;
