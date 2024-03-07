import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import prop from './images/prop.png'

export default function Nav() {
    const navigate = useNavigate()

    const[nav, setNav] = useState(false)
    var[rot, setRot] = useState(1)
    const[navTans, setNavTrans] = useState(0)



    function propeller(){

        setNav(!nav)
        setNavTrans(1)
        setRot(0)

        if(navTans === 1)
        {
          setNavTrans(0)
        }

        if(rot === 0){
          setRot(3)
        }

 

    }
  return (

    <div className='nav'>
      
    
    <div className='prop' >
      <button 
       className='propImg'
       onClick={()=>{propeller();
      }}
      // onAnimationEnd={() => setRot(0)}
      rot = {rot}
      
      ><img src={prop} alt='prop'></img></button>
    
      </div >

      <div  className='navOpen' openNav={navTans}>

      {nav ? 
       <div  className='navOpen' openNav={navTans}>
       <ul>
       <li><button onClick={()=>{navigate('/')}}>Home</button></li>
     <li> <button onClick={()=>{navigate('/study')}}>Study Material</button></li>
     <li> <button onClick={()=>{navigate('/testimony')}}>Testimonials</button></li>
       <li><button onClick={()=>{navigate('/contact')}}>Contact</button></li>
       </ul>

</div> : null}
</div>
     
    
    </div>


  )
}
