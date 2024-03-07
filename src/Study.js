import React from 'react'
import Nav from './Nav'
import Email from './Email'
import { useNavigate } from 'react-router-dom';


function Study() {
    const navigate = useNavigate()

  return (
    <>    
            <Nav/>
    <div className='App'>


        <div className='courses'>
            <h1>Study Courses</h1>
        </div>

        <div className='course_index'>
            <div className='ppl'>

             <button onClick={()=>{navigate('/study/ppl')}}><p>Private Pilot Course </p></button>

                    
            </div>

            <div className='instrument'>

             <button onClick={()=>{navigate('/study/instrument')}}><p>Instrument Rating Course</p></button>

            </div>

            <div className='cpl'>
            <button onClick={()=>{navigate('/study/cpl')}}> <p>Commercial Certificate Course</p></button>

            </div>
        </div>


    </div>

    
    <Email />

    </>

  )
}

export default Study