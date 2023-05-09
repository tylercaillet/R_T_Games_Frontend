import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

const VideoGameCard = () => {
  const navigate = useNavigate()

  const [videoGames, setVideoGames] = useState([])

  const getVideoGames = async () => {
    const response = await axios.get(`${BASE_URL}/listing`)
    setVideoGames(response.data)
  }

  useEffect(() => {
    getVideoGames()
  }, [])

  return (
    <div className="videoGame-container">
      <header className="videoGame-header">
        <h1>Video Games</h1>
      </header>
      <button
        id="view-game-button"
        onClick={() => navigate(`/listing/new_listing`)}
      >
        Add A Video Game
      </button>
      <main className="videoGame-main">
        {videoGames?.map((videoGame) => (
          <div className="videoGame-card" key={videoGame.id}>
            <h2 id="videoGame-name">{videoGame.title}</h2>
            <button
              id="view-game-button"
              onClick={() => navigate(`/listing/${videoGame.id}`)}
            >
              View Pet
            </button>
            <img src={videoGame.image} alt="videoGame" id="videoGame-pic"></img>
          </div>
        ))}
      </main>
    </div>
  )
}

export default VideoGameCard