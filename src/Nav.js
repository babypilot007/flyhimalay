import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate()

  return (
    <div className='navbar'>

    <button onClick={()=>{navigate('/study')}}>Study Material</button>
    <button onClick={()=>{navigate('')}}>Testimonials</button>
    <button onClick={()=>{navigate('')}}>Contact</button>
    
    
    </div>
  )
}
