import React from 'react'
import Nav from './Nav'
import Email from './Email'

function Study() {
  return (
    <>    
        <Nav />
    
    <div className='App'>


        <div className='courses'>
            <h1>Study Courses</h1>
        </div>

        <div className='course_index'>
            <div className='ppl'>
                <a href="ppl_study.html">
                    <p>Private Pilot </p>
                </a>
            </div>

            <div className='instrument'>
                <a href="Inst_study.html" >
                    <p>Instrument Rating</p>
                </a>
            </div>

            <div className='cpl'>
                <a href="Cpl_study.html">

                    <p>Commercial Certificate</p>
                </a>
            </div>
        </div>


    </div>

    
    <Email />

    </>

  )
}

export default Study