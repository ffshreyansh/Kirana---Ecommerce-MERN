import React from 'react';
import '../index.css';

function Items(props) {
  return (
    <div className="items">
        <div className='item-img'><img src={props.img} alt="" /></div>
        <div className='item-details'>
          <div className='item-heading d-flex'>
            <h2 className='item-name'>{props.name}</h2>
            <h2 className='item-price'>{props.price}</h2>
          </div>
          <p className='item-description'>{props.description}</p>
          
          <div className='stars d-flex'>
  {Number.isInteger(props.stars) &&
    [...Array(props.stars)].map((star, index) => (
      <i key={index} className="fa-solid fa-star"></i>
    ))
  }
  {Number.isInteger(props.stars) &&
    [...Array(5 - props.stars)].map((star, index) => (
      <i key={index} className="fa-regular fa-star"></i>
    ))
  }
  <p>({props.reviews})</p>
</div>

          <div className='d-flex btn-like'>
            <button className='addCart btn btn-outline-success'>Add to Cart</button>
            {/* <i className="fa-regular fa-heart like"></i> */}
          </div>
        </div>
      </div>
  )
}

export default Items