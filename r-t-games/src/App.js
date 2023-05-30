import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Register from './pages/Register'
import Login from './pages/Login'
import Nav from './components/Nav.jsx'
import Home from './pages/Home'
import VideoGameCard from './pages/VideoGameCard'
import VideoGameDetails from './components/VideoGameDetails'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <header>
          <Nav
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
        <main>
          <Routes>
             <Route
              index
              element={<Home user={user} authenticated={authenticated} />}
            />
            <Route path="/listing" element={<VideoGameCard />} />
            <Route
              path="/listing/:id"
              element={
                <VideoGameDetails user={user} authenticated={authenticated} />
              }
            />
            {/* <Route
              path="/new_review/user/:userId/listing/:listingId"
              element={
                <NewCommentForm user={user} authenticated={authenticated} />
              }
            /> */}
            {/* <Route
              path="/edit_comment/user/:userId/listing/:listingId/comment/:commentId"
              element={
                <EditCommentForm user={user} authenticated={authenticated} />
              }
            /> */}
            {/* <Route path="/listing/new_listing" element={<NewListingForm />} /> */}
            {/* <Route
              path="/listing/:listingId/edit_listing"
              element={<EditListingForm />}
            /> */}

            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            {/* <Route path="/about_us" element={<AboutUs />} /> */}
          </Routes>
        </main>
        <footer>
          {/* <Footer authenticated={authenticated} user={user} /> */}
        </footer>
      </div>
    </div>
  )
}

export default App
