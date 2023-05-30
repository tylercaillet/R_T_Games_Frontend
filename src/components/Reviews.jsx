import React from 'react'
import { DestroyReview } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const usedUsernames = [];

const generateRandomUsername = () => {
    const prefixes = ['Pro', 'Master', 'Epic', 'Ninja', 'Gaming', 'Shadow', 'Cyber', 'Legend', 'Rapid', 'Savage', 'Mighty', 'Elite', 'Atomic', 'Stealthy', 'Mega', 'Super'];
    const suffixes = ['Player', 'Gamer', 'Hunter', 'Warrior', 'Champion', 'Hero', 'Enforcer', 'Slayer', 'Assassin', 'Crusader', 'Gladiator', 'Wizard', 'Phantom', 'Commander', 'Sniper', 'Warlock'];

    let username;
    do {
        const prefixIndex = Math.floor(Math.random() * prefixes.length);
        const suffixIndex = Math.floor(Math.random() * suffixes.length);
        username = `${prefixes[prefixIndex]}${suffixes[suffixIndex]}`;
    } while (usedUsernames.includes(username));

    usedUsernames.push(username);
    return username;
};

const Reviews = ({ id, userId, listingId, review, getReviews }) => {

    let navigate = useNavigate()

    const handleDelete = async () => {
        await DestroyReview({ id })
        getReviews()
    }

    const randomUsername = generateRandomUsername()
    // const randomReview = generateRandomReview()

    return (
        <div className='review-container'>
            <h3 className='review-review'><span className='anonymous-posted'>{randomUsername}</span>: {review}</h3>
            <div id='button-container'>
                <button id='delete-edit-button2' onClick={() => navigate(`/edit_review/user/${userId}/listing/${listingId}/review/${id}`)}>Edit</button>
                <span className='review-link-divider'>&nbsp;&nbsp;or&nbsp;&nbsp;</span>
                <button onClick={handleDelete} id='delete-edit-button'>Delete</button>
            </div>
        </div>
    )
}

export default Reviews