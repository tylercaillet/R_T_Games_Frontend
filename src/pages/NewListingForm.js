import React from 'react'
import { CreateListing } from '../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewListingForm = () => {
  let navigate = useNavigate()

  const initialState = {
    title: '',
    rating: '',
    description: '',
    year: '',
    image: '',
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await CreateListing({ ...formState })
    navigate(`/listing`)
  }

  return (
    <div className="center1">
      <h1>Got A Hot Game?</h1>
      <form onSubmit={handleSubmit}>
      <div className="inputbox1">
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={formState.title}
            required
            placeholder="title"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleChange}
            value={formState.rating}
            required
            placeholder="Give it a Rating"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            name="description"
            cols="60"
            rows="3"
            id="description"
            onChange={handleChange}
            value={formState.description}
            required
            placeholder="Description"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="year"
            id="year"
            onChange={handleChange}
            value={formState.year}
            required
            placeholder="Year the game was made"
            className="input1"
          />
        </div>
        <div className="inputbox1">
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            value={formState.image}
            required
            placeholder="Image"
            className="input1"
          />
        </div>
        <button id="form-button1" onClick={() => navigate(`/listing`)}>
          Go Back
        </button>
        <button type="submit" id="form-button1">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewListingForm