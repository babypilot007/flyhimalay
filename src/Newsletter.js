import React from 'react'
import Nav from './Nav'
import Maillist from './Maillist'
import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'
import {  useNavigate} from 'react-router-dom';


function Newsletter() {

    const navigate = useNavigate()


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
          
            <div className='newsDiv'>
                <button className='newsbtn'> <div  onClick={()=>{
                    navigate('/news',{state:news.id})
                }}>
                    <h2>{news.title}</h2>
                    <h3>{news.brief}</h3>   
                   
                   <div className='newsdivfoot'> <h4>- {news.name}</h4><h4>{news.date}</h4></div>
                </div></button>
                </div>
            )
    })
       

    :null}
       


      </div >
   
  
  </div>
<Maillist/>

    </>
  )
}

export default Newsletter