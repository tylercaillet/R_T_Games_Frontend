import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'
import { DestroyListing } from '../services/Auth'
import { BASE_URL } from '../globals'

const VideoGameDetails = ({ user }) => {
    let navigate = useNavigate()
    let { id } = useParams()

    const [videoGame, setVideoGame] = useState([])

    const getVideoGameById = async () => {
        const response = await axios.get(`${BASE_URL}/listing/${id}`)
        setVideoGame(response.data)
    }

    const handleDelete = async () => {
        await DestroyListing({ id })
        setVideoGame()
        navigate('/listing')
    }

    const [reviews, setReviews] = useState(null)

    const getReviews = async () => {
        const response = await axios.get(`${BASE_URL}/review`)
        setReviews(response.data)
    }

    useEffect(() => {
        getVideoGameById()
        getReviews()
    }, [])

    return (
        <div className="details-container">
            <header className='details-header'>
                <h1>{videoGame.title}</h1>
            </header>
            <div className="delete-container">
                <button onClick={handleDelete} id="delete-edit-button1">Delete Game</button>
            </div>
            <main className='details-container'>
                <div className='details-card'>
                    <img src={videoGame.image} alt='game-image' id='details-pic'></img>
                    <h1 id='details-name'><span className='details-title'>Title</span>:&nbsp;{videoGame.title}</h1>
                    <h3><span className='details-title'>Rating</span>:&nbsp;&nbsp;{videoGame.rating}</h3>
                    <h3><span className='details-title'>Year:</span> &nbsp;&nbsp;{videoGame.year}</h3>
                    <h3><span className='details-title'>Description</span>:&nbsp;&nbsp;{videoGame.description}</h3>
                    <div>
                        <button
                            id="view-game-button"
                            onClick={() => navigate(`/listing`)}
                        >
                            Go Back
                        </button>
                        <button
                            id="view-game-button"
                            onClick={() => navigate(`/listing/${id}/edit_listing`)}
                        >
                            Edit Game
                        </button>
                    </div>
                </div>
            </main>
            <header className='review-header'>
                <h1 className=''>Reviews</h1>
            </header>
            <section>
                {reviews?.map((review) => (
                    <Reviews
                        id={review?.id}
                        key={review?.id}
                        userId={review?.userId}
                        listingId={review?.listingId}
                        review={review?.review}
                        getReviews={getReviews}
                    />
                ))}
            </section>
            <div className="button-container1">
                <button
                    id="view-game-button1"
                    onClick={() => navigate(`/new_review/user/${user.id}/listing/${id}`)}
                >
                    Add A Review
                </button>
            </div>
        </div>

    )
}

export default VideoGameDetails