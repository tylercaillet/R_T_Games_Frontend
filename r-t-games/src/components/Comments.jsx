import React from 'react'
import { DestroyComment } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Comments = ({ id, userId, listingId, comment, getComments }) => {

    let navigate = useNavigate()

    const handleDelete = async () => {
        await DestroyComment({ id })
        getComments()
    }

    return (
        <div className='comment-container'>
            <h3 className='comment-comment'><span className='anonymous-posted'>Anonymous posted:</span> {comment}</h3>
            <div id='button-container'>
                <button id='delete-edit-button' onClick={() => navigate(`/edit_comment/user/${userId}/listing/${listingId}/comment/${id}`)}>Edit</button>
                <span className='comment-link-divider'>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
                <button onClick={handleDelete} id='delete-edit-button'>Delete</button>
            </div>
        </div>
    )
}

export default Comments