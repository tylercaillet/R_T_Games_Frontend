import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
            <label  className="label"htmlFor="username">Username</label>
            <input
             className="input"
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="username"
              value={formValues.username}
              required
            />
            <label className="label"htmlFor="password">Password</label>
            <input
             className="input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login