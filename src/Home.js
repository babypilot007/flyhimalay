import React from 'react'
import p6 from './images/p6.png'
import Nav from './Nav';
// import Email from './Email';
import Maillist from './Maillist';
import Count from './Count';

function Home() {
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


<div className='info_details'> 
            
              <p className='namaste'>Namaste!</p>
                <div className='dets'>
              <p>I am a Certified Flight Instructor,</p>
              <p>With About a <span>1000 hours of Dual</span> Instructions given.</p>
              <p>I have acquired around <span>1300 Hours</span> of Total Flight Time.</p>
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