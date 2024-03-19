import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function Count() {

    const[count, getCount] = useState('')
    const[addCount, setCount] = useState('')

   


    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const response = await supabase.from('websiteVisit').select('counter')
          let c = response.data[0].counter
          getCount(c)
        console.log(count)
          setCount(count + 1)

        } catch (error) {
        
      }}
      fetchData()
    }, [count])
    


    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await supabase.from('websiteVisit').update({counter : addCount}).eq('id',1)
            
            console.log(response.data[0].counter)
    
          } catch (error) {
          
        }}
        fetchData()
      }, [addCount])


  return (
    <div></div>
  )
}

export default Count