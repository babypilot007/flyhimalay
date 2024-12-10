import React from 'react'
import Nav from './Nav'

import { supabase } from './supabaseClient'
import { useState,useEffect} from 'react'



function Product() {
    // const navigate = useNavigate()
    const[res, getRes] = useState('')

    useEffect(()=>{
      const fetchData = async ()=>{
        try {
          const response = await supabase.from('products').select('*')
  
              if(response.data !== null){
  
              getRes(response.data)
  
          } 
        } catch (error) {
        
      }}
      fetchData()
    }, [])
      
  
    return (
    <div>
      <Nav/>
  
      <div className='App'>
  
  
          <div className='testimonies'>
              {res ?
              res.map((inf,key)=>{
                      return(
                          <>
                          <a href='https://amzn.to/4iqhx0N'>

     <div className='productBg' >
        <img src={inf.prodImg}  height='80px' alt='Bose A30'></img> 
        <div className='productDescp'>
                 <h4>{inf.prodName}</h4>
                 <p>{inf.prodDescp}</p>
        </div>
      </div>
   </a>
                          </>
                      )
              }) :null}
          </div>
  
      </div>
</div>)

}

export default Product