import React from 'react'
import { UpdateReview } from '../services/Auth'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const EditReviewForm = () => {
  let navigate = useNavigate()
  let { listingId } = useParams()
  let { userId } = useParams()
  let { reviewId } = useParams()

  const initialState = {
    userId: userId,
    listingId: listingId,
    review: ''
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const getReviewById = async () => {
      const response = await axios.get(`${BASE_URL}/review/${reviewId}`)
      setFormState(response.data)
    }
    getReviewById()
  }, [reviewId])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateReview({ ...formState })
    navigate(`/listing/${listingId}`)
  }

  return (
    <div className="center1">
      <h1>Edit Review</h1>
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
            placeholder="Have an update for this game?"
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

export default EditReviewForm