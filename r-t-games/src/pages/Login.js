import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const Login = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ username: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }
  return (
<div className="login-box">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div className="user-box">
      <input type="username" name="username" required="" onChange={handleChange} placeholder="Johndoe123" value={formValues.username}>
      </input>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" required="" onChange={handleChange} placeholder="*****" value={formValues.password}></input>
      <label>Password</label>
    </div>
    <button disabled={
              !formValues.username ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            } id="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Sign In
    </button>
    <button id="register-link">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        <Link to="/register" >Register Here</Link>
    </button>
  </form>
</div>
  )
}

export default Login
