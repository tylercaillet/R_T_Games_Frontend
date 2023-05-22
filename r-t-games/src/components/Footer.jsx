import React from "react";
// import { Link } from 'react-router-dom'

const Footer = ({ user, authenticated }) => {
    return user && authenticated ? (
        <div className="footer-box">
            <div className="footer-creators-container-ryan">
                <h2 className="footer-item">Ryan Caillet</h2>
                <a href='https://www.linkedin.com/in/ryan-caillet/'>
                    <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px' />
                    <h3 className="footer-item">LinkedIn</h3>
                </a>
                <a href='https://github.com/rycaillet'>
                    <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px' />
                    <h3 className="footer-item">Github</h3>
                </a>
            </div>
            <div className="footer-creators-container-tyler">
                <h2 className="footer-item">Tyler Caillet</h2>
                <a href='https://www.linkedin.com/in/tyler-caillet/'>
                    <img className="footer-image" src={`https://i.imgur.com/GQpmYIM.png`} alt={`Linked In logo`} width='20px' />
                    <h3 className="footer-item">LinkedIn</h3>
                </a>
                <a href='https://github.com/tylercaillet'>
                    <img className="footer-image" src={`https://i.imgur.com/cjwavRj.png`} alt={`Linked In logo`} width='20px' height='20px' />
                    <h3 className="footer-item">Github</h3>
                </a>
            </div>
            <div className="copyright">
                Copyright @2023
            </div>
        </div>

    ) : (
        <div></div>
    )
}

export default Footer