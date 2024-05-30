import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
         <h1>Get exclusive offers on Your Email</h1>
         <p>Subcribe to our newsletter and stay update</p>
         <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
         </div>
    </div>
  )
}
