import React from 'react'
import Items from "../components/Items";
import '../index.css';

function MultipleItems() {   
     return (
    <>
    <div className='row g-0 rowMItems'>
        <div className='col-lg-3 col-md-6'>
    <Items
      img="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg"
      name="Wireless Earbuds"
      price="$89.00"
      description="Best Battery Life, Made in India"
      stars={4}
      reviews={121}
    />
    </div>
    <div className='col-lg-3 col-md-6'>
    <Items
      img="https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg"
      name="Smartwatch"
      price="$149.00"
      description="Fitness Tracking, Heart Rate Monitor, Sleep Tracking"
      stars={3}
      reviews={76}
    />
</div>
<div className='col-lg-3 col-md-6'>
    <Items
    img="https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg"
      name="Bluetooth Speaker"
      price="$99.00"
      description="Waterproof, 20W Output, 12 Hours Playtime"
      stars={5}
      reviews={42}
    />
    </div>
    <div className='col-lg-3 col-md-6'>
    <Items
     img="https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg"
      name="Bluetooth Speaker"
      price="$99.00"
      description="Waterproof, 20W Output, 12 Hours Playtime"
      stars={5}
      reviews={42}
    />
    </div>
    <div className='col-lg-3 col-md-6'>
    <Items
     img="https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg"
      name="Bluetooth Speaker"
      price="$99.00"
      description="Waterproof, 20W Output, 12 Hours Playtime"
      stars={5}
      reviews={42}
    />
    </div>
    <div className='col-lg-3 col-md-6'>
    <Items
     img="https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg"
      name="Bluetooth Speaker"
      price="$99.00"
      description="Waterproof, 20W Output, 12 Hours Playtime"
      stars={5}
      reviews={42}
    />
    </div>
    </div>
     </>
  )
}

export default MultipleItems
