import React from 'react'



function Blog() {
  return (
    <div className='App'>

        <div className='area'>
        
        <h3>Review</h3>

        <textarea rows='20' cols='20' className='text' placeholder='Write a Review'></textarea>

        <input type='text' className='text' placeholder='Name'></input>

        </div>

        <div className='postbtn'>
        <button>Post Review</button>
        </div>

    </div>
  )
}

export default Blog