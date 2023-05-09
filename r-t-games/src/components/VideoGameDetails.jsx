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
        const response = await axios.get(`${BASE_URL}/review/`)
        setComments(response.data)
    }

    useEffect(() => {
        getVideoGameById()
        getReviews()
    }, [])

    return (
        <div className="details-container">
            <header className='details-header'>
                <h1>Video Games</h1>
            </header>
            <button onClick={handleDelete} id="delete-edit-button1">
                Delete Game
            </button>
            <main className='details-main'>
                <div className='details-card'>
                    <h2 className='details-name'><span className='details-title'>Title:&nbsp;</span> {videoGame.title}</h2>
                    <img src={videoGame.image} alt='game-image' id='details-pic'></img>
                    <h3><span className='details-title'>Rating:</span>&nbsp;{videoGame.rating}</h3>
                    <h3><span className='details-title'>Year:</span> &nbsp;{videoGame.year}</h3>
                    <h3><span className='details-title'>Description:</span> &nbsp;{videoGame.description}</h3>
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
            <button
                id="view-game-button"
                onClick={() => navigate(`/new_review/user/${user.id}/listing/${id}`)}
            >
                Add A Review
            </button>
        </div>

    )
}

export default VideoGameDetails