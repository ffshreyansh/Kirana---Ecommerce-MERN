import React from 'react'
import '../index.css';


function CategoryButtons() {
  return (
    <div className='cat-btns d-flex'>
        <div className='d-flex'>
            <button>Price</button>
            <button>Review</button>
            <button>Color</button>
            <button>Offers</button>
        </div>
            <button className='fltr'>Filters</button>

    </div>
  )
}

export default CategoryButtons