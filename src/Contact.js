import React from 'react'
import Nav from './Nav'
import insta from './images/insta.png'
import linked from './images/linked.png'
import whatsapp from './images/whatsapp.png'
import call from './images/call.png'
import email from './images/email.png'



function Contact() {
  return (
    <div>
    <Nav/>
    <div className='App'>

            <div className='socials'>
              <h3 className='session'>Contact for 1 on 1 Ground Sessions</h3>
                <div className='socicons'>
                        <a href="mailto: cfihimalay@gmail.com"><img src={email} alt="Linked In" height="54px"></img></a>
                        <br></br><a href=" tel: +1 201-654-5586"><img src={call} alt="Call" height="48px"></img></a>
                        <br></br> <a href="https://www.instagram.com/curry_wingz"><img src={insta} alt="Instagram"></img></a>
                    <br></br> <a href="https://www.linkedin.com/in/himalay-jariwala-b1524492"><img src={linked} alt="Linked In"></img></a>
                    <br></br> <a href="https://api.whatsapp.com/send?phone=2016545586"><img src={whatsapp} alt="Whatsapp"></img></a>

                 </div>
        </div>

        </div>
        </div>
  )
}

export default Contact