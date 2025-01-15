import React from 'react'
import Nav from './Nav'
import ContactBottom from './ContactBottom'
// import { Link } from 'react-router-dom'
import {  useNavigate} from 'react-router-dom';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';



function Ppl() {

  const navigate = useNavigate()

  const [data, getData] = useState('')

  useEffect( () => { 

    async function fetchData() {
        try {

            const response = await supabase.from('videoLink').select('*')


            if(response){
            getData(response.data)

            }
        } catch (err) {
        }
        
    }

    fetchData();

}, []);


  return (
    <>
    <Nav />
    <div className='App'>

    {data ? <>
      {data.map((dat)=>{

        return(

          <>
      <div className='ppldiv'>
        
<h1>PPL</h1>

<iframe
  src={dat.Link}
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowfullscreen
  title='video'
/>

<button onClick={()=>{navigate('/ppl/ppldownloads')}}><p>Important Downloads </p></button>   

      </div>

          </>
        )
         

      })}
    
    </>:null}
    </div>
    
    <ContactBottom/>

    </>
  )
}

export default Ppl