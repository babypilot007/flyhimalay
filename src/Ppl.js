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

            const response = await supabase.from('topics').select('*')


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
    <h1>Coming Soon</h1>

    {data ? <>
      {data.map((dat)=>{

        return(

          <>
      <div className='ppldiv'>
        

      <button className='newsbtn'  onClick={()=>{
                    navigate('/ppl/dat.id', {state:dat.id})
                }}>Desnity Altitude</button>

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