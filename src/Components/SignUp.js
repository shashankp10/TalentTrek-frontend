import React, { useState } from 'react'
import '../Assets/signup.css'
import zigzag from '../img/zigzag.png'
import profile from '../img/profile.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
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
        const response = await axios.post('http://localhost:8080/talenttrek/user/register', formData);
        console.log('Server response:', response.data);
        setFormData({
            username: '',
            email:'',
            password: ''
          });
        alert("Registered successfully!!")
        navigate("/Login")
        } catch (error) {
        console.error('Error:', error);
            alert(error)
        }
        console.log('Form submitted:', formData);
      };
      
    return (
        <div className='signup_s'>
            <div className='partition_s'>
                
                <div className='field_s'>
                    <h1>Sign Up</h1>
                    <h5>Journey to Your Bright Future</h5>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">What can we call you?</label>
                        <input name="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            type='text' id="name" placeholder='Name' />

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
                <div className='photo_s'>
                    <img className="zigzag_s" src={zigzag} alt="line" />
                    <img className="profile_s" src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}
