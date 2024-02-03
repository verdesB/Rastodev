import logo from './logo.svg';
import './App.css';
import bgImage from './voiturekevin.jpg';
import './App.css'
import mokup from './mockuphondaphoto.jpg'
function App() {
  return (
      <>
        <div  style={{height: '100vh', width: '100%',backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: '25% 75%'}}>

        </div>
          <div className='grid' style={{height: '100vh', width: '100%', backgroundColor: 'rgba(0,0,0,0.85)', padding: '1rem', boxSizing: 'border-box',}}>
              <div style={{ borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px'}}>

              </div>
              <div style={{ borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px'}}>

              </div>
              <div style={{ borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px'}}>

              </div>
              <div style={{ borderRadius: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', boxShadow: 'rgba(255, 255, 255, 0.16) 0px 2px 8px 0px'}}>

              </div>

          </div>
          <div style={{height: '100vh', width: '100%', backgroundColor: '#a8a8a8',backgroundImage: `url(${mokup})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

        </div>
        <div style={{height: '100vh', width: '100%', backgroundColor: 'rgba(0,0,0,0.85)'}}>

        </div>

      </>
  );
}

export default App;
