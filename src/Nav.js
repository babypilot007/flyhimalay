import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate()

  return (
    <div className='navbar'>

    <button onClick={()=>{navigate('study')}}>Study Material</button>
    <button onClick={()=>{navigate('study')}}>Testimonials</button>
    <button onClick={()=>{navigate('study')}}>Conatact</button>
    
    
    </div>
  )
}
