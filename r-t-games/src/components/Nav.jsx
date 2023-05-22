import { NavLink } from 'react-router-dom'
import logo from '../images/R__T_Games_copy-transformed.png'

const NavBar = ({ authenticated, user, handleLogOut }) => {
    let userOptions;
    if (user) {
        userOptions = (
            <div className="nav-text">
                <NavLink to='/' className='zoom nav-link home'>Home</NavLink>
                <NavLink to='/about' className='zoom nav-links about'>About</NavLink>
                <NavLink to={`/listing`} className='zoom nav-links listing'>Video Games</NavLink>
                {/* <NavLink to='/review' className='zoom nav-links review'>Reviews</NavLink> */}
                <NavLink onClick={handleLogOut} to='/' className='zoom nav-links logout'>Log Out</NavLink>
            </div>
        );
    }

    const globalOptions = (
        <div className="nav-text">
            <NavLink to='/' className='zoom nav-link home'>Home</NavLink>
            <NavLink to='/about' className='zoom nav-links about'>About</NavLink>
            <NavLink to='/login' className='zoom nav-links login'>Login</NavLink>
            <NavLink to='/register' className='zoom nav-links register'>Register</NavLink>
        </div>
    );


    return (
        <div>
            <div className="header">
                <div className="header-text">
                </div>
                <h1 className='username-display'>Welcome{user && ` ${user.username}`}!</h1>
                <nav className="nav-container">
                    <div>
                        {authenticated && user ? userOptions : globalOptions}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;