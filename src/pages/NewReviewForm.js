import React, { useState, useEffect } from 'react'
import { CreateReview, GetUser } from '../services/Auth'
import { useNavigate, useParams } from 'react-router-dom'

const NewReviewForm = () => {
  let navigate = useNavigate()
  let { listingId } = useParams()
  let { userId } = useParams()

  const initialState = {
    userId: userId,
    listingId: listingId,
    review: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser(userId)
      setUsername(user.username)
    }
    fetchUser()
  }, [userId])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateReview({ ...formState, username })
    navigate(`/listing/${listingId}`)
  }

  return (
    <div className="center1">
      <h1>Write A New Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox1">
          <input
            type="description"
            id="review"
            cols="55"
            rows="10"
            onChange={handleChange}
            value={formState.review}
            required
            placeholder="Write a review"
            className="input1"
          />
        </div>
        <button
          id="form-button1"
          onClick={() => navigate(`/listing/${listingId}`)}
        >
          Go Back
        </button>
        <button type="submit" id="form-button1">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewReviewForm