import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/landingpage.css'
import logo from '../img/logo.png'
import title from '../img/title.png'
import plane from '../img/plane.png'
import line from '../img/line.png'
export default function LandingPage() {
  return (
    <div className='landingpage'>
        <div className='nav'>
          <div className="left-section">
              <img className="logo" src={logo} alt="logo"/>
              <img className="title" src={title} alt="logo"/>
          </div>
          <div className="right-section">
            <Link to='/Login'>
              <button>Log in</button>
            </Link>
            <Link to='/Signup'>
              <button>Sign up</button>
            </Link>
          </div>
        </div>
        <div className='heading'>
          <img className="plane" src={plane} alt="logo"/>
          <h1>Unlock Opportunities</h1>
          <img className="line" src={line} alt="logo"/>
        </div>
        <div className='paragraph'>
          <p>Join a Community of Students, Mentors, and Innovators in Exploring Limitless Potential.</p>
        </div>
        <div className='input-field'>
          <input className="email" placeholder="Enter your e-mail here" />
          <button className='signup'>Sign Up</button>
        </div>
    </div>
  )
}
