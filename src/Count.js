import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function Count() {

    const[count, getCount] = useState('')
   
    let addCount


    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const response = await supabase.from('websiteVisit').select('*')
          getCount(response.data[0].counter)


        } catch (error) {
        
      }}
      fetchData()
    }, [count])
      

    addCount = count + 1

    // console.log(addCount)

    useEffect(()=>{
        const fetchData = async ()=>{
          try {
            const response = await supabase.from('websiteVisit').update({counter : addCount}).eq('id',1)
            
            if(response){}
    
          } catch (error) {
          
        }}
        fetchData()
      }, [addCount])


  return (
    <div></div>
  )
}

export default Count