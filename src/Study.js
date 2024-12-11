import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom';
import ContactBottom from './ContactBottom';


function Study() {
    const navigate = useNavigate()

  return (
    <>    
    <Nav/>
            
    <div className='App'>

  <div className='studyDiv'>
        <div className='courses'>
            <h1>Study Courses</h1>
            <div className='ppl'>

<button onClick={()=>{navigate('/ppl')}}><p>Private Pilot Course </p></button>   


       
</div>

<div className='instrument'>

<button onClick={()=>{navigate('/study/instrument')}}><p>Instrument Rating Course</p></button>

</div>

<div className='cpl'>
<button onClick={()=>{navigate('/study/cpl')}}> <p>Commercial Certificate Course</p></button>

</div>
        </div>

      
  </div>

    </div>
    <ContactBottom/>

    </>
    

  )
}

export default Study