import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate()

  return (
    <div className='nav'>

    <button onClick={()=>{navigate('/')}}>Home</button>
    <button onClick={()=>{navigate('/study')}}>Study Material</button>
    <button onClick={()=>{navigate('/testimony')}}>Testimonials</button>
    <button onClick={()=>{navigate('')}}>Contact</button>

    
    
    </div>
  )
}
