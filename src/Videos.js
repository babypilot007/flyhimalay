import React from 'react'
import Nav from './Nav';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react';


function Videos() {

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
    <Nav/>
    <div className='App'>

        
    
    {data ? <>
      {data.map((dat)=>{

        return(

          <>
      <div className='frame'>
        
    <div className='frameInset'>

                            <iframe
                        src={dat.Link}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen = 'yes'
                        title='video'
                        />

                        <h4>{dat.Name}</h4>
            </div>
      </div>

          </>
        )
         

      })}
    
    </>:null}
    </div>

    </>
  )
}

export default Videos