import React from 'react'
import Nav from './Nav'
// import { useNavigate } from 'react-router-dom';
import ContactBottom from './ContactBottom';
import boseA30 from './images/bose A30.jpg'
import kneeboard from './images/kneeboard.jpg'
import pplTest from './images/testPrepPPL.jpg'


function Product() {
    // const navigate = useNavigate()

  return (
    <>    
    <Nav/>
            
    <div className='App'>

  <div className='studyDiv'>
        <div className='courses'>
            <div className='ppl'>
                </div>
                </div>



    <a href='https://amzn.to/4iqhx0N'>

    <div className='productBg'>
       <img src={boseA30} height='80px' alt='Bose A30'></img> 
       <div className='productDescp'>
                <h4>Bose A30 Aviation Headset</h4>
                <p>Bose A30 Aviation Headset, Noise Cancelling Pilot Headset with Adjustable ANR, Bluetooth and Lightweight Comfortable Design, Dual Plug, Black</p>
        </div>
     </div>
    </a>

    <a href='https://amzn.to/3ZqwjMl'>

<div className='productBg'>
   <img src={kneeboard} height='80px' alt='Bose A30'></img> 
   <div className='productDescp'>
            <h4>Aviation Pilot Kneeboard-VFR</h4>
            <p>Aviation Pilot Kneeboard-VFR Black with Notepad-Premium Pilot Accessories for Flight Bags for Pilots-Airplane Grade Aluminum-Elastic Knee Board Strap & Pen-Box Included for Pilots Gifts.</p>
    </div>
 </div>
</a>

<a href='https://amzn.to/4gpfet2'>

<div className='productBg'>
   <img src={pplTest} height='80px' alt='Bose A30'></img> 
   <div className='productDescp'>
            <h4>2024 Private Pilot Test Prep</h4>
            <p>2024 Private Pilot Test Prep: Study and prepare for your pilot FAA Knowledge Exam</p>
    </div>
 </div>
</a>

 </div>

 </div>

    <ContactBottom/>

    </>
    

  )
}

export default Product