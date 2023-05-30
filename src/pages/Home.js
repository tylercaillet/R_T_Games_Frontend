import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Footer from '../components/Footer'
// import 'swiper/css';
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()

  return (
    <div>
      <header id="showcase">
        <h1>Welcome to R & T Games!</h1>
        <p>
          You can look at our listing of Video Games that could possibly peak
          your interest.
        </p>
        <p>
          As fellow avid gamers we hope that you find something worth while in
          this list we created.
        </p>
        <p>
          If you click on Video Games, you should be able to see a listing of
          games that the community has put together along with a description and
          rating.
        </p>
        <button id="read-me-button" onClick={() => navigate('/about')}>
          About Us
        </button>
      </header>
      <h2 id="reunited">Fan Favorites</h2>
      <p id="swipe-p">*swipe to see games</p>
      <div id="swiper-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
              src="https://cdn.realsport101.com/images/ncavvykf/realsport-production/8daef9e845763dda5386768dc05f52a6d4318c06-1280x720.png?rect=0,0,1279,720&w=700&h=394&dpr=2"
              alt="god-of-war"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.nicepng.com/png/detail/145-1456343_batman-arkham-city-logo-batman-arkham-city-title.png"
              alt="Batman: Arkham City"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Halo_3_Logo.png"
              alt="Halo 3"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdna.artstation.com/p/assets/images/images/011/891/874/large/chx-king-logo-04.jpg?1531954283"
              alt="BioShock"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/790fc838044305.5754741e8bce0.jpg"
              alt="Undertale"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.nintendolife.com/164b10bdd71f4/metroid-prime-logo.large.jpg"
              alt="Metroid Prime"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/d2/Gears_of_War_logo.PNG"
              alt="Gears Of War"
              className="home-image"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392"
              alt="The Witcher 3: Wild Hunt"
              className="home-image"
            ></img>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <footer>
        <Footer authenticated={authenticated} user={user} />
      </footer>
    </div>
  )
}

export default Home
