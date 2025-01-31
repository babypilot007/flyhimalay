import React from 'react'
import p6 from './images/p6.png'
import Nav from './Nav';
// import Email from './Email';
import Maillist from './Maillist';
import Count from './Count';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()

  return (


< div className='main'>
  <Count/>
  <Nav />

<div className="App">
    
    <div className='name'>
      <h1>Himalay Jariwala</h1>
      < div className='info'>
      <p>FAA Certified Flight Instructor</p>
              <p>CFI/CFII</p>
      </div>
    </div>

  
    <div className='prodBtn'>
                <button className='donateBtn' onClick={()=>{navigate('/products')}}>Flying Accessories</button>
                <button className='donateBtn' onClick={()=>{navigate('/videos')}}>Videos</button>

    </div>

<div className='info_details'> 
            
                <div className='dets'>
              <p> A Certified Flight Instructor,</p>
              <p>With About a <span>1200 hours of Dual</span> Instructions given.</p>
              <p>and has acquired around <span>1600 Hours</span> of Total Flight Time.</p>
              <p>Currently Instructing at : </p><br></br>
              </div>
              <div className='img'>
              <a href="https://www.p6aviation.com/"><img src={p6} alt="p6"></img></a>
              </div>
</div>

         
<Maillist/>
    
  </div>


  </div>
  )
}

export default Home