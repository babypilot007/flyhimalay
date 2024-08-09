import React from 'react'
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { supabase } from './supabaseClient';
import { useLocation } from "react-router-dom";


function PplTopic() {
    const location = useLocation()

    const [data, getData] = useState('')

// const navigate = useNavigate()

// const[news, getNews] = useState('')

const id = location.state

console.log(id)




useEffect( () => { 

    async function fetchData() {
        try {

            const response = await supabase.from('topics').select('*').eq('id',id)

            getData(response.data)
            if(response){
            }
        } catch (err) {
        }
        
    }

    fetchData();

}, [id]);

  return (

    <>
    <div className='App'>
        
    {data ? data.map((news)=>{
   
               return(
                   <div className='newspage'>
   
                   <div className='newsDiv'>
                    
                       <h2>{news.TopicHeader}</h2>
                       <div dangerouslySetInnerHTML={{ __html: news.TopicDetails }}></div>
                      
                      <div className='newsdivfoot'> <h4>- {news.name}</h4><h4>{news.date}</h4></div>
                   </div>
       </div>
   
               )
       })
   
       :null}
       </div>
       </>
  )
}

export default PplTopic