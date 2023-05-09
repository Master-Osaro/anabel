import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import anabelPhoto from './assets/Images/main_character.png';

function App() {

  return (
    <>
      <Header></Header>
      <main className='movie'>
        <div className="movie__name">anabel</div>
        <div className="movie__media">
          <div className="movie__media-photo">
            <img src={anabelPhoto} alt="" />
          </div>
          <div className="movie__media-video"></div>
          <div className="movie__media-summary"></div>
        </div>
      </main>
      <div className="magic-eye"></div>
    </>
  )
}

export default App
