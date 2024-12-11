import React from 'react'
import Nav from './Nav'
import ContactBottom from './ContactBottom';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';

function PplDownloads() {

    const [data, getData] = useState('')

    useEffect( () => { 
  
      async function fetchData() {
          try {
  
              const response = await supabase.from('downloadsPPL').select('*')
  
  
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
    


        <div className='testimonies'>
              {data ?
              data.map((inf,key)=>{
                      return(
                          <>
                          <a href={inf.downloadLink}>

     <div className='productBg' >
         
        <div className='productDescp'>
                 <h4>{inf.downloadName}</h4>
                 <p>{inf.prodDescp}</p>
        </div>
      </div>
   </a>
                          </>
                      )
              }) :null}
          </div>
        </div>
    <ContactBottom/>
    
</>
  )
}

export default PplDownloads