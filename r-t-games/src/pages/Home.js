import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()
  return user && authenticated ? (
    <div>
      <header id="showcase">
        <h1>Welcome to R & T Games!</h1>
        <p>
          You can look at our listing of Video Games that could possibly peak your interest.
        </p>
        <p>
          As fellow avid gamers we hope that you find something worth while in this list we created.
        </p>
        <p>
          If you click on Video Games, you should be able to see a listing of games that the community has put together along with a description and rating.
        </p>
        <button id="read-me-button" onClick={() => navigate('/about_us')}>
          About Us
        </button>
      </header>
      <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one">
          <div>
             {/* <img src='https://pixelz.cc/wp-content/uploads/2017/11/borderlands-2-logo-uhd-4k-wallpaper.jpg' alt='borderlands 2' />  */}
          </div>
        </div>
       
        <div class="swiper-slide swiper-slide--two">
          <div>
              {/* <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank">explore</a> */}
          </div>
        </div>

        <div class="swiper-slide swiper-slide--three">
          <div>
               {/* <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank">explore</a> */}
          </div>
        </div>

        <div class="swiper-slide swiper-slide--four">
          <div>
               {/* <a href="https://en.wikipedia.org/wiki/Shark" target="_blank">explore</a>  */}
          </div>
        </div>

        <div class="swiper-slide swiper-slide--five">
          <div>
               {/* <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank">explore</a>  */}
          </div>
        </div>
      </div>
      {/* <!-- Add Pagination --> */}
      <div class="swiper-pagination"></div>
      <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" class="bg2" />

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script src="/script.js"></script>
      </div>
     </div>
      
  ) : (
    <div className="protected">
      <h3 className="please-signin">
        Oops! You must be logged in to have access to the community!
      </h3>
      <button className="form-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Home
