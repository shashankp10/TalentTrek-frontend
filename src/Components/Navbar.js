import React from 'react'
import '../Assets/Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Students</Link>
      <Link to="/">Mentors</Link>
      <Link to="/">Investors</Link>
    </div>
  )
}
