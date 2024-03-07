import React from 'react'
import { supabase } from './supabaseClient'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Blog() {

  const navigate = useNavigate()


  const[userName, setUserName] = useState('')
  const[getReview, setReview] = useState('')
  const[license, getLicense] = useState('')

  const[message, setMessage] = useState('')




  const postReview = async () =>{

    try {
      const {data: {u}} = await supabase.from('Testimonies').insert([
        {
          name : [userName],
          review : [getReview],
          license : [license]
        }
      ])
        console.log(u)
   
    } catch (error) {

    }

 

  }

  function clear(){
    setReview("");
    setUserName('');
    getLicense("")
    setMessage('We recieved your Review, Thank You!')

    navigate('/testimony')
  }

  return (
<div className='App'>

        <div className='area'>
        
        <h3>Review</h3>




<textarea rows='20' cols='20' 
className='text' 
placeholder='Write a Review'
value={getReview}
onChange={(e) => setReview(e.target.value)}
></textarea>

<input className="text"
    type="text"
    placeholder="Name"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}/>

<input className="text"
    type="text"
    placeholder="License You Trained for"
    value={license}
    onChange={(e) => getLicense(e.target.value)}/>

<div className='postbtn'>
           <button onClick={() => {postReview();clear()
}}>Post Review</button>
        </div>



    
       

        </div>

        <h3>{message}</h3>

    </div>
  )
}

export default Blog