import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import anabelPhoto from './assets/Images/main_character.png';
import magicHat from './assets/Images/magician-hat.png';
import bgVideo from './assets/Video/land10p.mp4';
import eyeGif from './assets/GIFS/magic-eye.gif';
import eyePNG from './assets/GIFS/magic-eye.png';
import brushGif from './assets/GIFS/brush.gif';

function App() {

  const [animate, setAnimate] = useState(false)

  return (
    <>
      <Header></Header>
      <main className='movie'>
        <div className="movie__name">
          <h1 className="movie__name-text">anabel</h1>
          <div className="movie__name__magic">
            <img src={magicHat} alt="" className={`${animate?"undo-tilt":"tilted"} movie__name__magic-hat`}/>
            <div className={`${animate?"undo-tilt":"tilted"} circle_shadow`}></div>
          </div>
        </div>
        
        <div className="movie__media">
          <div className="movie__media-photo">
            <div className="photo__wrapper">
              <img src={anabelPhoto} alt="" className="movie__media-photo media-photo__anabel"/>
              <div className="movie__media-video">
                <div className="video-container">
                  <video src={bgVideo} autoPlay loop></video>
                </div>
                <div className={`${animate?"shadow":""} plot`}>
                  <p>Anabel, a young artist discovers her magical brush can bring paintings to life, thrusting her into an enchanting adventure to save a vibrant, imperiled world hidden within her art.</p>
                  <div className="play__controls">
                    <button className="play__icon"></button>
                    <p>Watch Trailer</p>
                  </div>
                  <div className={`brush__icon ${animate?"":"brush__move_right"}`}>
                    <img src={`${animate?brushGif:""}`} alt="" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="movie__media-summary"></div>
        </div>
      </main>
      <button className="btn-magic-eye" onClick={()=>setAnimate(!animate)}><img src={`${animate?eyeGif:eyePNG}`} alt="" /></button>
    </>
  ) 
}

export default App
