import React from 'react'
import { supabase } from './supabaseClient'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';


function PostNews() {
    const navigate = useNavigate()


    const[userName, setUserName] = useState('')
    const[dets, getDets] = useState('')
    const[tit, getTit] = useState('')
    const[brief, getBrief] = useState('')
    const[date, getDate] = useState('')


  
    const[message, setMessage] = useState('')
  
  
  
  
    const postReview = async () =>{
  
      try {
        const {data: {u}} = await supabase.from('newsletter').insert([
          {
            title : [tit],
            brief : [brief],
            details : [dets],
            date :[date],
            name : [userName],

          }
        ])
          console.log(u)
     
      } catch (error) {
  
      }
  
   
  
    }
  
    function clear(){
      getDets("");
      setUserName('');
      getTit("")
      setMessage('We recieved your Review, Thank You!')
  
      navigate('/newsletter')
    }
  
    return (
  <div className='App'>
  
          <div className='area'>
          
          <h3>News</h3>
  
  
          <input className="text"
      type="text"
      placeholder="Title"
      value={tit}
      onChange={(e) => getTit(e.target.value)}/>
  
  <textarea rows='5' cols='20' 
  className='text' 
  placeholder='brief'
  value={brief}
  onChange={(e) => getBrief(e.target.value)}
  ></textarea>
  
  <textarea rows='10' cols='20' 
  className='text' 
  placeholder='Blog'
  value={dets}
  onChange={(e) => getDets(e.target.value)}
  ></textarea>
  
  <input className="text"
      type="text"
      placeholder="Name"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}/>

<input className="text"
      type="text"
      placeholder="Date"
      value={date}
      onChange={(e) => getDate(e.target.value)}/>
  
  
  
  <div className='postbtn'>
             <button onClick={() => {postReview();clear()
  }}>Post Review</button>
          </div>
  
  
  
      
         
  
          </div>
  
          <h3>{message}</h3>
  
      </div>
    )
}

export default PostNews