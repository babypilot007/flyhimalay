import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function Count() {

    const[getCurrentCount, getCount] = useState()

   


    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const response = await supabase.from('websiteVisit').select('counter')
          
          let c = response.data[0].counter
            
        getCount(c)
        console.log(getCurrentCount)
            
        } catch (error) {
        
      }}
      fetchData()

    }, [getCurrentCount])
    



    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await supabase.from('websiteVisit').update({counter : getCurrentCount + 1}).eq('id',1)
            
            console.log(response.data[0].counter)
    
          } catch (error) {
          
        }}
        fetchData()
      }, [getCurrentCount])


  return (
    <div></div>
  )
}

export default Count