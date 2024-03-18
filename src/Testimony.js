import React from 'react'
import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'
import Nav from './Nav'
import ContactBottom from './ContactBottom'

function Testimony() {

  const[res, getRes] = useState('')

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await supabase.from('Testimonies').select('*')

            if(response.data !== null){

            getRes(response.data)

        } 
      } catch (error) {
      
    }}
    fetchData()
  }, [])
    

  console.log(res)
  return (
    <>
    <div className='App'>
        <Nav/>
        <div className='testimonies'>
            <h2>Testimonials</h2>
            {res ?
            res.map((inf, key)=>{
                    return(
                        <>
                        <div className='testDiv'>
                        <p key={inf.id}>{inf.review}</p>

                        <h3 className='namehead'>-{inf.name} ({inf.license})</h3>

                        </div>
                        </>
                    )
            }) :null}
        </div>
    </div>
    <ContactBottom/>
        </>
  )
}

export default Testimony