import React from 'react'
import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";



function News() {
    const location = useLocation()
    var id = location.state

  const[news, getNews] = useState('')


  useEffect(()=>{
    const fetchData = async ()=>{
      try { 
        const response = await supabase.from('newsletter').select('*').eq('id',id)

            if(response.data !== null){

            getNews(response.data)
        } 
      } catch (error) {
      
    }}
    fetchData()
  }, [id])


  return (
    <>
    <div className='App'>
        
 {news ? news.map((news)=>{

            return(
                <div className='newspage'>

                <div className='newsDiv'>
                    <h2>{news.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: news.details }}></div>
                   
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

export default News