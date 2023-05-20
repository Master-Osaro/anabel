import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import anabelPhoto from './assets/Images/main_character.png';
import magicHat from './assets/Images/magician-hat.png';
import bgVideo from './assets/Video/land10p.mp4';

function App() {

  return (
    <>
      <Header></Header>
      <main className='movie'>
        <div className="movie__name">
          <h1 className="movie__name-text">anabel</h1>
          <div className="movie__name__magic">
            <img src={magicHat} alt="" className="movie__name__magic-hat"/>
            <div className="circle_shadow"></div>
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
              </div>
            </div>
            
          </div>
          <div className="movie__media-summary"></div>
        </div>
      </main>
      <div className="magic-eye"></div>
    </>
  ) 
}

export default App
