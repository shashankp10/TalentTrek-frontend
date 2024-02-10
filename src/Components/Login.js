import React, { useState } from 'react'
import '../Assets/login.css'
import zigzag from '../img/zigzag.png'
import profile from '../img/profile.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/talenttrek/user/login', {
        email:formData.email,
        password:formData.password
      });
      alert("You are successfully logged in!"); 
      navigate("/");
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Login error:', error);
    }
    
  };
  
  return (
    <div className='login'>
      <div className='partition'>
        <div className='photo'>
          <img className="zigzag" src={zigzag} alt="line" />
          <img className="profile" src={profile} alt="profile" />
        </div>
        <div className='field'>
          <h1>Login</h1>
          <h5>Journey to Your Bright Future</h5>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">What's your email?</label>
            <input name="email" 
              value={formData.email} 
              onChange={handleChange} 
            type='mail' id="email" placeholder='Email' />

            <label htmlFor="password">Choose a password</label>
            <input name="password" 
                value={formData.password} 
                onChange={handleChange}
            type='password' id="password" placeholder='Password' />

            <button type="submit">Let's Go!</button>
          </form>
        </div>

      </div>
    </div>
  )
}
