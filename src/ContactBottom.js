import React from 'react'
import insta from './images/insta.png'
import linked from './images/linked.png'
import whatsapp from './images/whatsapp.png'
import call from './images/call.png'
import email from './images/email.png'

function ContactBottom() {
  return (             
        <div className='bottomDiv'>

        <div className='socicons_bottom'>
                        <a href="mailto: cfihimalay@gmail.com"><img src={email} alt="Linked In" height="54px"></img></a>
                        <br></br><a href=" tel: +1 201-654-5586"><img src={call} alt="Call" height="48px"></img></a>
                        <br></br> <a href="https://www.instagram.com/curry_wingz"><img src={insta} alt="Instagram"></img></a>
                    <br></br> <a href="https://www.linkedin.com/in/himalay-jariwala-b1524492"><img src={linked} alt="Linked In"></img></a>
                    <br></br> <a href="https://api.whatsapp.com/send?phone=2016545586"><img src={whatsapp} alt="Whatsapp"></img></a>
                    
                    
        
                 </div>
        <div>
            <p>Powered By</p>
            <p><a href='finalappraoch.com' className='bub'>finalappraoch.com</a></p>
        </div>  
       
        </div>

  )
}

export default ContactBottom