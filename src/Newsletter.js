import React from 'react'
import Nav from './Nav'
import Email from './Email'
import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'




function Newsletter() {

  const[news, getNews] = useState('')

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await supabase.from('newsletter').select('*')

            if(response.data !== null){

            getNews(response.data)
        } 
      } catch (error) {
      
    }}
    fetchData()
  }, [])

  console.log(news)

  return (
    <>
    <Nav />

    <div className='App'>
        <div className='news'>
            <h1>Newsletter</h1>

    {news ? news.map((news)=>{

            return(
                <button className='newsbtn'> <div className='newsDiv'>
                    <h2>{news.title}</h2>
                    <h3>{news.brief}</h3>
                   
                   <div className='newsdivfoot'> <h4>- {news.name}</h4><h4>{news.date}</h4></div>
                </div></button>
            )
    })
       

    :null}
       


      </div>

    </div>
<Email/>
    </>
  )
}

export default Newsletter