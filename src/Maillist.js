import React from 'react'
import Footer from './Footer'
import { useState } from 'react'
import { supabase } from './supabaseClient'


function Maillist() {

    const[firstName, getFirstName] = useState('')
    const[LastName, getLastName] = useState('')
    const[Email, getEmail] = useState('')

    const[dets, getDets] = useState('Add me to the Mailing List')
    const[detsDiv, getDetsDiv] = useState(false)




    // function onSubmit(event){
    //     event.preventDefault()
    // }

    const mail = async (event) =>{


        if(!firstName || !LastName || !Email){
            getDetsDiv(true)

            getDets("Please enter valid Details")
        }

        else {
            alert("Welcome to the club")

        try {
          const {data: {u}} = await supabase.from('userdetails').insert([
            {
              first_name : [firstName],
              last_name : [LastName],
              email : [Email]
            }
          ])
            console.log(u)
        } catch (error) {
    
        }
    
    }
    
      }

  return (
    <>
    <div>
        
            <form className='mail_form'>
        <input className='formInput' type='text' placeholder='First Name'
        value={firstName}
  onChange={(e) => getFirstName(e.target.value)}
    required
        ></input>
        <input className='formInput' type='text' placeholder='Last Name'
        value={LastName}
         onChange={(e) => getLastName(e.target.value)} 
        required></input>
        <input className='formInput' type='text' placeholder='Email'
        value={Email}
         onChange={(e) => getEmail(e.target.value)} required></input>



         {detsDiv ? <div className='noInfo'>{dets}</div>:<div className='yesInfo'><p>{dets}</p>
</div>}
        
        </form >

        <div className='formSubmit'>
        <input className='submitbtn' type='submit' value={'Add me'} onClick={()=>{mail()}} ></input>
        </div>
       

        </div>
     <div>   
<Footer/>
</div>

    </>

  )
}

export default Maillist