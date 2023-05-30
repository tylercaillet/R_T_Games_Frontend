import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import {Link} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState({ initialFormValues })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
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
    <div className="user-box">
      <input type="password" name="confirmPassword" required="" onChange={handleChange} placeholder="*****" value={formValues.confirmPassword}></input>
      <label>Confirm Password</label>
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
      register
    </button>
    <button id="register-link">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        <Link to="/login" >Already A User?</Link>
    </button>
  </form>
</div>
  )
}

export default Register