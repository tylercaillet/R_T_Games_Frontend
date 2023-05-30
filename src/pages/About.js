import React from 'react'
import tylerSuit from '../images/IMG_2136.png'
import tylerSnap from '../images/Tyler Snapchat.png'
import ryanSuit from '../images/Ryan Profile Photo copy.png'
import ryanSnap from '../images/Ryan Snapchat photo copy.png'

const COLORS = [
  '#bbf7d0',
  '#99f6e4',
  '#bfdbfe',
  '#ddd6fe',
  '#f5d0fe',
  '#fed7aa',
  '#fee2e2'
]
const TAGS = [
  <img src={tylerSuit} alt="image" className="about-image"></img>,
  <img src={tylerSnap} alt="image" className="about-image"></img>,
  <img src={ryanSuit} alt="image" className="about-image"></img>,
  <img src={ryanSnap} alt="image" className="about-image"></img>,
  <img
    src="https://m.media-amazon.com/images/I/61wroo0UJZL.jpg"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063709/32b85837beea0eee31220a59e247219662de4011f7a8c18fce61cf99a4933eb7"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-ocarina-of-time-3d-1559683061479.jpg"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/GGyEnCkIXoyiVlN9sRHkzUPo.png"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://assets.xboxservices.com/assets/95/eb/95eb973b-006b-4533-8902-f5a3f8dfd955.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/220px-Gears_of_war_cover_art.jpg"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
    alt="image"
    className="about-image"
  ></img>,
  <img
    src="https://upload.wikimedia.org/wikipedia/en/7/77/Forza_Horizon_boxart.jpg"
    alt="image"
    className="about-image"
  ></img>
]
const DURATION = 15000
const ROWS = 5
const TAGS_PER_ROW = 5

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shuffle = arr => [...arr].sort(() => 0.5 - Math.random())

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag = ({ text }) => (
  <div className="tag">
    <span></span> {text}
  </div>
)

const About = ({ user, authenticated }) => (
  <div className="app">
    <header className="about-header">
      <h1 className="about-h1">About Us</h1>
      <p className="about-p">
        Our names are Tyler and Ryan Caillet and we are twins who happen to both
        have a passion for coding. This is our first project we decided to do
        together and even though this can be challenging at times this shows our
        determination to complete this task and have fun at the same time
      </p>
    </header>
    <div className="tag-list-container">
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map(tag => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
      </div>
      <div className="fade" />
    </div>
  </div>
)

export default About
