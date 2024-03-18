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
          setNavTrans(3)
        }

        if(rot === 0){
          setRot(3)
        }

 

    }
  return (

    <div className='nav'>
      
    
    <div className='prop' >
      <div className='focusFlyFun'>
        <button onClick={()=>{navigate('/')}}>Focus. Fly. Fun</button>
      </div>
      <button 
       className='propImg'
       onClick={()=>{propeller();
      }}
      // onAnimationEnd={() => setRot(0)}
      rot = {rot}
      
      ><img  className='noSelect' src={prop} alt='prop'></img></button>
    
      </div >

      <div  className='navOpen' opennav={navTans}>

      {nav ? 
       <div  className='navOpen' opennav={navTans}>
       <ul>
       <li><button onClick={()=>{navigate('/')}}>Home</button></li>
     <li> <button onClick={()=>{navigate('/study')}}>Study Material</button></li>
     <li> <button onClick={()=>{navigate('/testimony')}}>Testimonials</button></li>
       <li><button onClick={()=>{navigate('/contact')}}>Connect</button></li>
       <br/>
       
       <div className='navSub'> 
      <a className='donateBtn' href='https://www.venmo.com/u/Himalay-Jariwala'>Buy me a Coffee</a>
     <li><button onClick={()=>{navigate('/newsletter')}} className='newsHead'>Newsletter</button></li>
      </div>
       </ul>

</div> : null}
</div>
     
    
    </div>


  )
}
