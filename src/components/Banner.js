import React from 'react'
import '../index.css';
function Banner() {
  return (
    <div className='banner'>
        <img src="https://images.pexels.com/photos/3756774/pexels-photo-3756774.jpeg" alt="kid listening music" />
       <div className='text-banner'>
        <h2>Grab upto 50% Off On <br /> Selected Headphones</h2>
        <button className='buy-btn'>Buy Now</button>
        </div>
    </div>
  )
}

export default Banner